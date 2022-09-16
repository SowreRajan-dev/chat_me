import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    if (!username && !email && !password && !phoneNumber && !confirmPassword)
      return;
    if (!(password === confirmPassword)) return;
    const user = {
      username,
      password,
      email,
      phoneNumber,
    };
    try {
      const newUser = await axios.post("http://localhost:8080/user", {
        name: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
      });
      window.localStorage.setItem("chat_me", newUser.data.responseData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <RegisterContainer>
      <RegisterDiv>
        <RegisterTop>
          <RegisterTitle>Register</RegisterTitle>
          <ChatMeLogo src="/Images/chatmelogo.png" />
          <SeperationLine></SeperationLine>
        </RegisterTop>
        <RegisterBottom>
          <FormContainer>
            <FormType>
              <FormTitle label="name">Username</FormTitle>
              <FormInput
                type="text"
                id="name"
                placeholder="Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </FormType>
            <FormType>
              <FormTitle label="email">Email</FormTitle>
              <FormInput
                type="text"
                id="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </FormType>
            <FormType>
              <FormTitle label="password">Password</FormTitle>
              <FormInput
                type="password"
                id="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </FormType>
            <FormType>
              <FormTitle label="confirm-password">Confirm Password</FormTitle>
              <FormInput
                type="password"
                id="confirm-password"
                placeholder="confirm password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
            </FormType>
            <FormType>
              <FormTitle label="phoneNumber">Phone number</FormTitle>
              <FormInput
                type="type"
                id="phoneNumber"
                placeholder="+91 Phone number"
                maxLength={10}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </FormType>
            <FormButton onClick={registerUser}>Register</FormButton>

            <FormRegister>
              <p>
                Great! had an account? - <Link to="/login">Login</Link>{" "}
              </p>
            </FormRegister>
          </FormContainer>
        </RegisterBottom>
      </RegisterDiv>
    </RegisterContainer>
  );
}

export default Register;
const RegisterContainer = styled.div`
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterDiv = styled.div`
  width: 70%;
  height: 750px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }

  @media only screen and (min-width: 1440px) {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const RegisterTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #000;
  text-align: center;
  margin-top: 3rem;
  font-size: 36px;
  font-family: "TT Norms", sans-serif;
  margin-bottom: 20px;
`;

const RegisterTop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    margin-top: 250px;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: -50px;
  }
`;
const SeperationLine = styled.div`
  width: 100%;
  height: 1px;
  background: #2a8bf2;
  position: absolute;
  bottom: -70px;

  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 1px;
    bottom: -30px;
  }
  @media only screen and (min-width: 1024px) {
    width: 60%;
    height: 1px;
    bottom: -20px;
  }
  @media only screen and (min-width: 1444px) {
    width: 50%;
    height: 1px;
    bottom: -45px;
  }
`;

const RegisterBottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChatMeLogo = styled.img`
  width: 200px;
  height: 50px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const FormTitle = styled.h2`
  font-weight: 400;
  color: #2a8bf2;
  text-align: left;
  font-size: 1.5rem;
  font-family: "TT Norms", sans-serif;
  margin-bottom: 10px;
`;
const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "TT Norms", sans-serif;
  &:focus {
    outline: none;
  }
`;
const FormType = styled.div`
  margin-top: 30px;
`;

const FormButton = styled.button`
  width: 240px;
  height: 40px;
  margin-top: 30px;
  border-radius: 5px;
  background: linear-gradient(92.68deg, #7cb8f7 0%, #2a8bf2 100%);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;

  &:hover {
    background: linear-gradient(92.68deg, #2a8bf2 0%, #7cb8f7 100%);
  }
`;

const FormRegister = styled.div`
  margin: 30px 0;
  text-align: center;
  font-size: 1rem;
  font-family: "TT Norms", sans-serif;
`;
