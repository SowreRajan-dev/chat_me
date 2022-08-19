import React from "react";
import styled from "styled-components";

function ChatCard() {
  return (
    <ChatCardContainer>
      <ChatCardTop>
        <ChatCardTopLeft>
          <ProfileImage>
            <img
              src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="profile-img"
            />
            <OnlineBar></OnlineBar>
          </ProfileImage>
          <UserDesc>
            <UserName>Luy Robin </UserName>
            <UserStatus>Online</UserStatus>
          </UserDesc>
        </ChatCardTopLeft>
        <ChatCardTopRight>
          <ChatTime>
            <ChatTimeText>1 minute ago</ChatTimeText>
          </ChatTime>
        </ChatCardTopRight>
      </ChatCardTop>
      <ChatCardBottom>
        <ChatCardBottomLeft>
          <ChatMessagePreview>
            <ChatMessagePreviewText>
              Most of its text is made up from sections 1.10.32-3 of Cicero's De
              finibus bonorum et malorum (On the Boundaries of Goods and Evils;
              finibus may also be translated as purposes).
            </ChatMessagePreviewText>
          </ChatMessagePreview>
        </ChatCardBottomLeft>

        <ChatCardBottomRight>
          <ChatMessageCount>2</ChatMessageCount>
        </ChatCardBottomRight>
      </ChatCardBottom>
    </ChatCardContainer>
  );
}

export default ChatCard;

const ChatCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 10px;
`;

const ChatCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatCardTopLeft = styled.div`
  display: flex;

  align-items: center;
`;

const ChatCardTopRight = styled.div``;

const ProfileImage = styled.div`
  position: relative;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const OnlineBar = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00b894;
  position: absolute;
  top: 1px;
  left: 2px;
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
  color: #707c97;
  font-family: "TT Norms", sans-serif;
`;

const ChatTime = styled.div``;

const ChatTimeText = styled.p`
  font-size: 0.75rem;
  font-weight: 200;
  color: #707c97;
  font-family: "TT Norms", sans-serif;
`;

const ChatCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatCardBottomLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ChatMessagePreview = styled.div`
  padding: 10px;
`;

const ChatMessagePreviewText = styled.p`
  font-size: 0.75rem;
  font-weight: 200;
  color: #707c97;
  font-family: "TT Norms", sans-serif;
  line-height: 20px;
  line-clamp: 2;
`;

const ChatCardBottomRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff3366;
  color: #fff;
  width: 40px;
  height: 20px;
  border-radius: 50%;
  @media screen and (max-width: 1024px) {
    width: 60px;
    height: 15px;
  }
`;

const ChatMessageCount = styled.p`
  font-size: 0.75rem;
  font-weight: 200;
  color: #fff;
  font-family: "TT Norms", sans-serif;
`;
