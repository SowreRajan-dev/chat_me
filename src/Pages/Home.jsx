import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import Chatscreen from "./Chatscreen";

function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <Chats>
        <Chatscreen />
      </Chats>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
  display: flex;
`;

const Chats = styled.div`
  width: 100%;
  height: 100vh;
`;
