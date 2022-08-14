import React from "react";
import styled from "styled-components";
import Chats from "../Components/Chats";

function Chatscreen() {
  return (
    <ChatScreenContainer>
      <Chats />
    </ChatScreenContainer>
  );
}

export default Chatscreen;

const ChatScreenContainer = styled.div`
  margin: 30px 20px;
  height: 100%;
`;
