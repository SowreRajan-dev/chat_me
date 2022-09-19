import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { SocketContext } from "./socket";
import { useSelector } from "react-redux";
import { setConversation } from "../Service/api";

const ConversationsContext = React.createContext();
export function useConversation() {
  return useContext(ConversationsContext);
}

export default function ConversationProvider({ children }) {
  const socket = useContext(SocketContext);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userInfo: user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    axios
      .get(`http://localhost:8080/conversations/mylist/?userId=${user._id}`)
      .then((res) => {
        const { conversation, message } = res.data;
        if (!conversation || !message) return;
        setConversations(conversation);
        setChat(message);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(true);
  }, [user]);

  const formatted = useMemo(() => {
    console.log("formatted");
    return conversations.map((i) => {
      const { recipients, groupName, ...other } = i;
      const all = recipients.filter((t) => {
        return t._id !== user._id;
      });

      const profiles = all;
      let profilePics = [],
        name = "";
      profilePics.push(profiles[0].profilePic);
      name = profiles[0].name;
      if (i.isGroup) {
        if (profiles.length > 1) {
          profilePics.push(profiles[1].profilePic);
          name += "," + profiles[1].name;
        }
        if (profiles.length === 1) {
          profilePics.push("");
          name = ",...";
        }
        if (groupName.length > 0) name = groupName;
        else name = name.substr(0, 15) + (name.length > 15 ? "..." : "");
      }
      const isAdmin = i.admins.includes(user._id);

      return { ...other, recipients: all, name, groupName, isAdmin, profiles };
    });
  }, [conversations, user._id]);

  const count = useMemo(() => {
    let countArray = [];
    chat.forEach((p) => {
      const { _id, messages } = p;
      let ok = false;
      // console.log("messages ", messages, "message length", messages.length);
      for (let i = messages.length - 1; i >= 0; i--) {
        console.log("i", i);
        const { readers, sender } = messages[i];
        if (sender._id === user._id) break;
        if (
          readers.findIndex((l) => {
            return l._id === user._id;
          }) === -1
        ) {
          ok = true;
          break;
        }
      }
      if (ok) {
        countArray.push(_id);
      }
    });
    return countArray;
  }, [chat, user._id]);

  const addMessageToConversation = ({ current, sender, text, readers }) => {
    let c = count.findIndex((i) => {
      return i === current._id;
    });
    let ok = false;
    setChat((prev) => {
      const newMessage = prev.map((i) => {
        if (i._id !== current._id) return i;
        else {
          if (c !== -1) readers.push(user._id);
          const { messages, ...other } = i;
          ok = true;
          return {
            messages: [...messages, { sender, text, readers }],
            ...other,
          };
        }
      });
      if (ok) return newMessage;
      else {
        if (c !== -1) {
          readers.push(user._id);
          return [
            ...prev,
            { _id: current._id, messages: [{ sender, text, readers }] },
          ];
        }
      }
    });

    console.log(chat);
    if (!ok) {
      setConversation((prev) => {
        return [...prev, current];
      });
    }
  };

  useEffect(() => {
    if (socket == null) return;

    socket
      .off("receive-message")
      .on("recieve-message", addMessageToConversation);

    socket.off("group-add").on("group-add", ({ geldim }) => {
      setChat((prev) => {
        return [...prev, { _id: geldim._id, messages: [] }];
      });

      setConversations((prev) => {
        return [...prev, geldim];
      });

      socket.off("somebody-added").on("somebody-added", ({ geldim }) => {
        setConversations((prev) => {
          return prev.map((i) => {
            if (i._id !== geldim._id) {
              return i;
            } else return geldim;
          });
        });
      });

      socket.off("users").on("users", ({ baza }) => {
        const k = baza.map((i) => {
          const { username, online } = i;

          return { username, online };
        });
      });

      socket.off("get-typing").on("get-typing", ({ current, writer }) => {
        setTyping((prev) => {
          let ok = false;
          const nw = prev.map((i) => {
            if (i.current._id === current._id) {
              ok = true;
              return { current, writers: [...i.writers, writer] };
            } else return i;
          });
          if (ok) return nw;
          else return [...prev, { current, writers: [writer] }];
        });
      });

      socket.off("dur-typing").on("dur-typing", ({ current, writer }) => {
        setTyping((prev) => {
          const nw = prev
            .map((i) => {
              if (i.current._id === current._id) {
                const wr = i.writers.filter((t) => {
                  return t._id !== writer._id;
                });

                return { current, writers: wr };
              } else return i;
            })
            .filter((i) => {
              return i.writers.length > 0;
            });
          return nw;
        });
      });
    });
  }, [socket]);

  const t_cur = useMemo(() => {
    if (currentConversation === null) return null;
    else
      return formatted[
        formatted.findIndex((t) => {
          console.log("t -> ", t);
          return t._id === currentConversation._id;
        })
      ];
  }, [formatted, currentConversation]);

  console.log("cc -> ", currentConversation);

  function sendMessage(recipients, current, text) {
    socket.emit(
      "send-message",
      { recipients, sender: user, current, text },
      ({ err }) => {
        if (err) console.log(err);
      }
    );

    addMessageToConversation({ current, sender: user, text });
  }

  useEffect(() => {
    if (t_cur === null) return;
    let c = count.findIndex((i) => {
      return i === currentConversation._id;
    });
    if (c === -1) return;
    socket.emit("read-message", { currentConversation: t_cur }, ({ err }) => {
      if (err) {
        console.log(err);
      }
    });

    let k = chat.findIndex((i) => {
      return i._id === currentConversation._id;
    });

    setChat((prev) => {
      return prev.map((i, index) => {
        if (index !== k) return i;
        else {
          const { messages, ...other } = i;
          const arr = messages.map((i) => {
            let { sender, text, readers, ...fer } = i;

            if (sender._id !== user._id) {
              if (
                readers.findIndex((i) => {
                  return i === user._id;
                }) === -1
              )
                readers.push(user._id);
            }

            return { sender, text, readers, ...fer };
          });
          return { messages: arr, ...other };
        }
      });
    });
  }, [currentConversation, chat]);

  const selectedChat = useMemo(() => {
    if (t_cur === null) return [];
    return chat[
      chat.findIndex((t) => {
        return t._id === t_cur._id;
      })
    ];
  }, [t_cur, chat]);
  const ero = useMemo(() => {
    return chat;
  }, [chat]);

  const value = {
    selectedChat,
    setConversations,
    conversations: formatted,
    setCurrentConversation,
    currentConversation: t_cur,
    chat: ero,
    setChat,
    sendMessage,
    count,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}
