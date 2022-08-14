import React from "react";
import styled from "styled-components";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import ChatCard from "./ChatCard";
function Chats() {
  return (
    <ChatsContainer>
      <ChatsTopSection>
        <ChatsTopSectionLeft>
          <ChatText>Chats</ChatText>
          <RecentChatText>
            Recent Chats <AiOutlineDown />
          </RecentChatText>
        </ChatsTopSectionLeft>
        <ChatSectionRight>
          <NewChatButton>+ Create New Chat</NewChatButton>
        </ChatSectionRight>
      </ChatsTopSection>
      <SearchBar>
        <Search>
          <IconContainer>
            <AiOutlineSearch />
          </IconContainer>
          <SearchInput placeholder="Search" />
        </Search>
        <MessageText>
          Messages
          <IconContainer>
            <AiOutlineDown />
          </IconContainer>
        </MessageText>
      </SearchBar>
      <ChatsListSection>
        <ChatLists>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </ChatLists>
      </ChatsListSection>
    </ChatsContainer>
  );
}

export default Chats;

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
