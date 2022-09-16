import React, { useState } from "react";
import styled from "styled-components";
import { FiGrid, FiSettings } from "react-icons/fi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrContactInfo, GrPowerShutdown } from "react-icons/gr";
import { AiTwotoneCalendar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";

function Sidebar() {
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  return (
    <SidebarContainer>
      <SidebarTop>
        <ProfilePic
          src={
            user.ProfilePic
              ? user.profilePic
              : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          }
        />
        <ProfileName>{user.name}</ProfileName>
      </SidebarTop>
      <SidebarMiddle>
        <SidebarList>
          <SidebarListItem>
            <SidebarListItemIcon>
              <FiGrid />
            </SidebarListItemIcon>
            <ItemText>Home</ItemText>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarListItemIcon>
              <IoChatbubbleEllipses />
            </SidebarListItemIcon>
            <ItemText>Chat</ItemText>
          </SidebarListItem>

          <SidebarListItem>
            <SidebarListItemIcon>
              <GrContactInfo />
            </SidebarListItemIcon>
            <ItemText>Contact</ItemText>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarListItemIcon>
              <IoMdNotificationsOutline />
            </SidebarListItemIcon>
            <ItemText>Notifications</ItemText>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarListItemIcon>
              <AiTwotoneCalendar />
            </SidebarListItemIcon>
            <ItemText>Calendar</ItemText>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarListItemIcon>
              <FiSettings />
            </SidebarListItemIcon>
            <ItemText>Settings</ItemText>
          </SidebarListItem>
        </SidebarList>
      </SidebarMiddle>
      <SidebarBottom>
        <SidebarLogoutBtn onClick={() => dispatch(logout())}>
          <SidebarListItemIcon>
            <GrPowerShutdown />
          </SidebarListItemIcon>
          <ItemText>Logout</ItemText>
        </SidebarLogoutBtn>
      </SidebarBottom>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const SidebarTop = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const ProfileName = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  font-family: "TT Norms", sans-serif;
  color: #0d1c2e;
`;

const SidebarMiddle = styled.div`
  width: 100%;
  display: flex;
  flex: 2;
  justify-content: flex-start;
`;
const SidebarBottom = styled.div`
  width: 100%;
  display: flex;
  flex: 0.5;

  align-items: flex-end;
`;

const SidebarList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 50px;
  list-style: none;
`;
const SidebarListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const ItemText = styled.p`
  font-size: 1rem;
  font-family: "TT Norms", sans-serif;
  color: #0d1c2e;
  color: #707c97;
`;

const SidebarListItemIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const SidebarLogoutBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: #fff;
  margin-left: 50px;
  margin-bottom: 20px;
`;
