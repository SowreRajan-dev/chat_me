import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FiPaperclip } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useSelector } from "react-redux";
import { useConversation } from "../context/conversations";
import { SocketContext } from "../context/socket";
import { useEffect } from "react";
import { useCallback } from "react";

function ChatSection() {
  const { currentUserChat, userInfo: user } = useSelector(
    (state) => state.user
  );
  const [text, setText] = useState("");
  const [ok, setOk] = useState(false);

  // const { sendMessage, currentConversation, chat, count, conversations } =
  //   useConversation();
  // const socket = useContext(SocketContext);

  // const okCount = useCallback(
  //   (id) => {
  //     return (
  //       count.findIndex((i) => {
  //         return i === id;
  //       }) >= 0
  //     );
  //   },
  //   [count]
  // );

  // useEffect(() => {
  //   if (text.length > 0 && !ok) {
  //     setOk(true);
  //   }
  //   if (text.length === 0 && ok) {
  //     setOk(false);
  //   }
  // }, [text, ok]);

  // function handleSubmit() {
  //   // if (text.length === 0) return;
  //   // const { recipients, ...other } = currentConversation;
  //   // // console.log(currentConversation);
  //   // sendMessage(
  //   //   currentConversation.recipients.map((r) => r._id),
  //   //   { recipients: [...recipients, user], ...other },
  //   //   text
  //   // );
  //   // setOk(false);
  //   // setText("");
  // }

  // const currentMessage = (id) => {
  //   const num = chat.findIndex((i) => {
  //     return i.current._id === id;
  //   });
  //   if (num === -1) return <p></p>;
  //   const m = chat[num].messages;
  //   if (m.length === 0) return <p></p>;
  //   let p = m[m.length] - 1;
  //   if (p.length > 15) p = p.substr(0, 15) + "...";
  //   let ok =
  //     count.findIndex((i) => {
  //       return i === id;
  //     }) >= 0;
  //   if (ok) return <p>{p}</p>;
  // };

  return (
    currentUserChat && (
      <ChatSectionContainer>
        <ChatSectionTop>
          <ChatSectionTopLeft>
            <ProfileImage>
              <img
                src={
                  currentUserChat.profilePic
                    ? currentUserChat.profilePic
                    : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                }
                alt="profile-pic"
              />
            </ProfileImage>
            <UserDesc>
              <UserName>{currentUserChat.name}</UserName>
              <UserStatus>last online 5 hours ago</UserStatus>
            </UserDesc>
          </ChatSectionTopLeft>
          <ChatSectionTopRight>
            <IconContainer>
              <FiPaperclip />
            </IconContainer>
            <IconContainer>
              <BiDotsVerticalRounded />
            </IconContainer>
          </ChatSectionTopRight>
        </ChatSectionTop>
        <ChatArea>
          <ChatMessagePreview>
            {/* <ProfilePicDisplay>
              <img
                src={
                  currentUserChat.profilePic
                    ? currentUserChat.profilePic
                    : "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                }
                alt="profile-pic"
              />
            </ProfilePicDisplay>
           
              <ChatMessagePreviewText>
               
              </ChatMessagePreviewText> */}
          </ChatMessagePreview>
        </ChatArea>
        <ChatSectionBottom>
          <ChatInputSection>
            <PlusSymbol>
              <AiOutlinePlus />
            </PlusSymbol>
            <ChatInput
              type="text"
              placeholder="Type a message here"
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                }
              }}
            />
            <EmojiContainer>
              <MdOutlineEmojiEmotions />
            </EmojiContainer>
            <SendButton>
              <AiOutlineSend />
            </SendButton>
          </ChatInputSection>
        </ChatSectionBottom>
      </ChatSectionContainer>
    )
  );
}

export default ChatSection;

const ChatSectionContainer = styled.div`
  width: 90%;
  height: 100%;
  background: #fff;
  margin: 15px;
  position: relative;
`;

const ChatSectionTop = styled.div`
  background: #fafbff;
  width: 100%;
  height: 80px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatArea = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  height: calc(100vh - 200px);
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

const ChatSectionBottom = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 50px;

  padding: 10px;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserDesc = styled.div`
  margin-left: 10px;
`;

const UserName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  font-family: "TT Norms", sans-serif;
`;

const UserStatus = styled.p`
  font-size: 0.75rem;
  font-weight: 200;
  color: #2a8bf2;
  font-family: "TT Norms", sans-serif;
`;

const ChatSectionTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ChatSectionTopRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ChatMessagePreview = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  padding: 30px;
  position: relative;
  margin-left: 20px;
`;

const ProfilePicDisplay = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 0px;
  top: 20px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const ChatMessagePreviewText = styled.p`
  background: linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%);
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  width: 70%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;

// const ChatUserPreview = styled.div`
//   display: flex;
//   padding: 10px;
//   flex-direction: column;
//   position: relative;
//   align-items: flex-end;
//   margin-right: 20px;
// `;

// const ChatMessageUserPreviewText = styled.p`
//   background: #fff;
//   color: #707c97;
//   padding: 10px;
//   box-shadow: 15px 15px 35px 0px #707c970d;

//   border-radius: 10px;
//   width: 70%;
//   overflow-wrap: break-word;
//   word-wrap: break-word;
//   word-break: break-word;
// `;

const ChatInputSection = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const PlusSymbol = styled.div`
  width: 50px;
  height: 35px;
  border-radius: 50%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%);
  margin-right: 20px;
  cursor: pointer;
  color: #fff;
`;

const EmojiContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  margin-right: 20px;
`;

const SendButton = styled.button`
  width: 50px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  border: none;
`;
