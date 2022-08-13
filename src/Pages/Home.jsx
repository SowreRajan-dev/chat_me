import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <HomeContainer>
      <Sidebar />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
`;
