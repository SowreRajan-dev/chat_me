import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import ChatCard from "./ChatCard";
import { getUserByPhoneNumber } from "../Service/api";
import { currentChatUser } from "../redux/slices/userSlice";
import { useConversation } from "../context/conversations";
import { SocketContext } from "../context/socket";
import axios from "axios";

function Chats() {
  const [openNewChat, setOpenNewChat] = useState(false);
  const { usersLists } = useSelector((state) => state.user);

  const OpenNewChatMenu = () => {
    setOpenNewChat((prev) => !prev);
  };

  return (
    <ChatsContainer>
      <ChatsTopSection>
        <ChatsTopSectionLeft>
          <ChatText>Chats</ChatText>
          <RecentChatText>
            Recent Chats
            <AiOutlineDown />
          </RecentChatText>
        </ChatsTopSectionLeft>
        <ChatSectionRight>
          <NewChatButton onClick={OpenNewChatMenu}>
            + Create New Chat
          </NewChatButton>

          {openNewChat && <SearchUserContainer />}
        </ChatSectionRight>
      </ChatsTopSection>
      <SearchBar>
        <Search>
          <IconContainer>
            <AiOutlineSearch />
          </IconContainer>
          <SearchInput placeholder="Search" />
        </Search>
        <MessageText>Messages</MessageText>
        <IconContainer>
          <AiOutlineDown />
        </IconContainer>
      </SearchBar>
      <ChatsListSection>
        <ChatLists>
          {usersLists.map((user, index) => (
            <ChatCard
              userName={user.name}
              status={user?.onlineStatus}
              lastMessage="he was a good friend"
              messageCount={2}
              timeAgo={5}
              key={index}
              user={user}
            />
          ))}
        </ChatLists>
      </ChatsListSection>
    </ChatsContainer>
  );
}

export default Chats;

const SearchUserContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [userNewChat, setUser] = useState(null);
  const currUser = useSelector((state) => state.user).userInfo;
  const [selectNewUser, setSelectNewUser] = useState(false);
  const dispatch = useDispatch();

  const selectUser = () => {
    setSelectNewUser((prev) => !prev);
    dispatch(currentChatUser(userNewChat));
    console.log(userNewChat);
  };

  const getNewUser = async (phoneNumber) => {
    if (currUser.phoneNumber === phoneNumber) return;
    try {
      const newUser = await getUserByPhoneNumber(phoneNumber);
      if (!newUser.success) return;
      setUser(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!phoneNumber) return;
    getNewUser(phoneNumber);
  }, [phoneNumber]);

  // const [loading, setLoading] = useState(true);

  const {
    setCurrentConversation,
    setConversations,
    setChat,
    currentConversation,
    conversations,
    chat,
  } = useConversation();
  const { currentUserChat, userInfo } = useSelector((state) => state.user);

  const socket = useContext(SocketContext);

  async function findOrCreate() {
    console.log("finding or create");
    try {
      await axios
        .post("http://localhost:8080/conversations/findOrCreate", {
          recipients: [currentUserChat],
          userId: userInfo._id,
        })
        .then((res) => {
          const { ans, qty } = res.data;
          if (!qty) {
            console.log("no qty");
            setChat((prev) => {
              console.log(prev);
              return [{ id: ans._id, message: [] }, ...prev];
            });
            setConversations((prev) => {
              console.log(prev);
              return [ans, ...prev];
            });
          }
          setCurrentConversation(ans);
        });
    } catch (err) {
      console.log(err);
    }
  }

  function addUserConversation() {
    const { recipients, ...other } = currentConversation;
    const nw = [...recipients, userInfo];
    const ns = {
      recipients: nw,
      ...other,
    };

    socket.emit(
      "add_user",
      {
        add: [currentUserChat],
        currentConversation: ns,
      },
      ({ err }) => {
        if (err) console.log("add_user err: ", err);
        else {
          setConversations((prev) => {
            return prev.map((i) => {
              if (i._id === currentConversation._id) return i;
              else {
                const { recipients, ...other } = i;
                return {
                  ...other,
                  recipients: { ...recipients, ...currentUserChat },
                };
              }
            });
          });
        }
      }
    );
  }

  const setUserConversation = () => {
    // selectUser();
    findOrCreate();
    // addUserConversation();
  };

  return (
    <SearchContainer>
      <SearchTop>
        <NewSearchBar>
          <NewSearch>
            <IconContainer>
              <AiOutlineSearch />
            </IconContainer>
            <SearchNewInput
              placeholder="Search a number to chat..."
              onChange={(e) => setPhoneNumber(e.target.value)}
              max={10}
            />
          </NewSearch>
        </NewSearchBar>
      </SearchTop>
      <SearchLists>
        {userNewChat ? (
          <UserCard onClick={setUserConversation}>
            <NewUserLeft>
              <ProfilePic
                src={
                  userNewChat.responseData.profilePic
                    ? userNewChat.responseData.profilePic
                    : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                }
                alt="new-user-dp"
              />
              <NewUserName>{userNewChat.responseData.name}</NewUserName>
            </NewUserLeft>
            <NewUserRight>
              <AiOutlinePlusCircle fontSize={30} opacity={0.6} />
            </NewUserRight>
          </UserCard>
        ) : (
          <NoNewUser>No results found</NoNewUser>
        )}
      </SearchLists>
    </SearchContainer>
  );
};

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
`;

const ChatsTopSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ChatsListSection = styled.div`
  overflow: scroll;
  white-space: wrap;
  scroll-behavior: smooth;
  margin-top: 20px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(92.68deg, #7cb8f7 0%, #2a8bf2 100%);
    border-radius: 100px;
  }
`;

const ChatsTopSectionLeft = styled.div``;

const ChatText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #0d1c2e;
  font-family: "TT Norms", sans-serif;
`;

const RecentChatText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: #707c97;
  font-family: "TT Norms", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NewChatButton = styled.button`
  background: linear-gradient(92.68deg, #7cb8f7 0%, #2a8bf2 100%);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 0.75rem;
  font-family: "TT Norms", sans-serif;
  padding: 10px;
  margin: 10px;
  width: 150px;
  height: 45px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(92.68deg, #2a8bf2 0%, #7cb8f7 100%);
  }
`;

const ChatSectionRight = styled.div``;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "TT Norms", sans-serif;
  color: #000;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #707c97;
  }
`;

const IconContainer = styled.div`
  border-radius: 50%;
  color: #707c97;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
const MessageText = styled.p`
  font-size: 0.75rem;
  font-weight: 200;
  color: #707c97;
  font-family: "TT Norms", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
`;

const ChatLists = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const SearchContainer = styled.div`
  width: 40%;
  height: 180px;
  background: #f3f3fb;
  position: absolute;
  z-index: 5;
  left: 20%;
  border-radius: 20px;
  border: 1px solid #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchTop = styled.div`
  width: 100%;
  height: 80px;
`;

const SearchLists = styled.div`
  width: 100%;
`;

const SearchNewInput = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "TT Norms", sans-serif;
  color: #000;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #707c97;
  }
`;

const NewSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const NewSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 30px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-left: 20px;
`;

const UserCard = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  margin-left: 20px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const ProfilePic = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const NewUserName = styled.p`
  margin-left: 10px;
  font-size: 0.75rem;
  font-weight: 200;
  color: #707c97;
  font-family: "TT Norms", sans-serif;
`;

const NewUserLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

const NewUserRight = styled.div`
  display: flex;
  align-items: center;
`;

const NoNewUser = styled.p`
  margin-left: 10px;
  font-size: 1rem;
  font-weight: 200;
  color: #707c97;
  font-family: "TT Norms", sans-serif;
  text-align: center;
`;
