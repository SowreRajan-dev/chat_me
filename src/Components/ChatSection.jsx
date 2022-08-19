import React from "react";
import styled from "styled-components";
import { FiPaperclip } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";

function ChatSection() {
  return (
    <ChatSectionContainer>
      <ChatSectionTop>
        <ChatSectionTopLeft>
          <ProfileImage>
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="profile-pic"
            />
          </ProfileImage>
          <UserDesc>
            <UserName>Nika Jerrardo </UserName>
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
          <ProfilePicDisplay>
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="profile-pic"
            />
          </ProfilePicDisplay>
          <ChatMessagePreviewText>
            Hello! Finally found the time to write to you) I need your help in
            creating interactive animations for my mobile application.
          </ChatMessagePreviewText>
        </ChatMessagePreview>
        <ChatMessagePreview>
          <ProfilePicDisplay>
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="profile-pic"
            />
          </ProfilePicDisplay>
          <ChatMessagePreviewText>
            Most of its text is made up from sections 1.10.32-3 of Cicero's De
            finibus bonorum et malorum (On the Boundaries of Goods and Evils;
            finibus may also be translated as purposes).
          </ChatMessagePreviewText>
        </ChatMessagePreview>
        <ChatMessagePreview>
          <ProfilePicDisplay>
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="profile-pic"
            />
          </ProfilePicDisplay>
          <ChatMessagePreviewText>
            Most of its text is made up from sections 1.10.32-3 of Cicero's De
            finibus bonorum et malorum (On the Boundaries of Goods and Evils;
            finibus may also be translated as purposes).
          </ChatMessagePreviewText>
        </ChatMessagePreview>
        <ChatUserPreview>
          <ChatMessageUserPreviewText>
            Most of its text is made up from sections 1.10.32-3 of Cicero's De
            finibus bonorum et malorum (On the Boundaries of Goods and Evils;
            finibus may also be translated as purposes).
          </ChatMessageUserPreviewText>
        </ChatUserPreview>
        <ChatUserPreview>
          <ChatMessageUserPreviewText>
            Most of its text is made up from sections 1.10.32-3 of Cicero's De
            finibus bonorum et malorum (On the Boundaries of Goods and Evils;
            finibus may also be translated as purposes).
          </ChatMessageUserPreviewText>
        </ChatUserPreview>
        <ChatUserPreview>
          <ChatMessageUserPreviewText>
            Most of its text is made up from sections 1.10.32-3 of Cicero's De
            finibus bonorum et malorum (On the Boundaries of Goods and Evils;
            finibus may also be translated as purposes).
          </ChatMessageUserPreviewText>
        </ChatUserPreview>
      </ChatArea>
      <ChatSectionBottom>
        <ChatInputSection>
          <PlusSymbol>
            <AiOutlinePlus />
          </PlusSymbol>
          <ChatInput type="text" placeholder="Type a message here" />
          <EmojiContainer>
            <MdOutlineEmojiEmotions />
          </EmojiContainer>
          <SendButton>
            <AiOutlineSend />
          </SendButton>
        </ChatInputSection>
      </ChatSectionBottom>
    </ChatSectionContainer>
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

const ChatUserPreview = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  position: relative;
  align-items: flex-end;
  margin-right: 20px;
`;

const ChatMessageUserPreviewText = styled.p`
  background: #fff;
  color: #707c97;
  padding: 10px;
  box-shadow: 15px 15px 35px 0px #707c970d;

  border-radius: 10px;
  width: 70%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;

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
