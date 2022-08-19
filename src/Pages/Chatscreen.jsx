import React from "react";
import styled from "styled-components";
import Chats from "../Components/Chats";
import ChatSection from "../Components/ChatSection";

function Chatscreen() {
  return (
    <ChatScreenContainer>
      <Chats />
      <ChatSection />
    </ChatScreenContainer>
  );
}

export default Chatscreen;

const ChatScreenContainer = styled.div`
  margin: 30px 20px;
  height: 100%;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
