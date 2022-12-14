import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { SocketContext } from "../context/socket";
import { deleteSpecificUser, onChatUser } from "../redux/slices/userSlice";

function ChatCard({
  userName,
  status,
  timeAgo,
  lastMessage,
  messageCount,
  user,
}) {
  const dispatch = useDispatch();
  const setCurrentUserInChat = (user) => {
    dispatch(onChatUser(user));
  };

  return (
    <ChatCardContainer onClick={() => setCurrentUserInChat(user)}>
      <ChatCardTop>
        <ChatCardTopLeft>
          <ProfileImage>
            <img
              src={
                user.profilePic
                  ? user.profilePic
                  : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              }
              alt="profile-img"
            />
            <OnlineBar></OnlineBar>
          </ProfileImage>
          <UserDesc>
            <UserName>{userName}</UserName>
            <UserStatus>{status}</UserStatus>
          </UserDesc>
        </ChatCardTopLeft>
        <ChatCardTopRight>
          <ChatTime>
            <ChatTimeText>{timeAgo} minute ago</ChatTimeText>
          </ChatTime>
        </ChatCardTopRight>
      </ChatCardTop>
      <ChatCardBottom>
        <ChatCardBottomLeft>
          <ChatMessagePreview>
            <ChatMessagePreviewText>{lastMessage}</ChatMessagePreviewText>
          </ChatMessagePreview>
        </ChatCardBottomLeft>

        <ChatCardBottomRight>
          <ChatMessageCount>{messageCount}</ChatMessageCount>
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

const ChatMessageCount = styled.p`
  font-size: 0.75rem;
  font-weight: 200;
  color: #fff;
  font-family: "TT Norms", sans-serif;
`;
