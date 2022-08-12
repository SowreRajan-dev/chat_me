import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Login() {
  return (
    <LoginContainer>
      <LoginDiv>
        <LoginTop>
          <LoginTitle>Login</LoginTitle>
          <ChatMeLogo src="/Images/chatmelogo.png" />
        </LoginTop>
        <LoginBottom>
          <FormContainer>
            <FormType>
              <FormTitle label="email">Email</FormTitle>
              <FormInput type="text" id="email" placeholder="Email" />
            </FormType>
            <FormType>
              <FormTitle label="password">Password</FormTitle>
              <FormInput type="password" id="password" placeholder="Password" />
            </FormType>
            <FormButton>Login</FormButton>

            <FormRegister>
              <p>
                Needed to sign in? - <Link to="/register">register</Link>{" "}
              </p>
            </FormRegister>
          </FormContainer>
        </LoginBottom>
      </LoginDiv>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginDiv = styled.div`
  width: 70%;
  height: 70%;
  background: #fff;
  border-radius: 10px;
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #000;
  text-align: center;
  margin-top: 2rem;
  font-size: 36px;
  font-family: "TT Norms", sans-serif;
`;

const LoginTop = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 35%;
`;
const LoginBottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
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
  margin-top: 30px;
  text-align: center;
  font-size: 1rem;
  font-family: "TT Norms", sans-serif;
`;
