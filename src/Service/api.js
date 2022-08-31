import axios from "axios";

const URL = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    return axios.post(`${URL}/add`, data);
  } catch (err) {
    console.log("Error while calling addUser api ", err);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers api", error);
  }
};

export const getUserByPhoneNumber = async (phoneNumber) => {
  try {
    let response = await axios.post(`${URL}/getUserByPhone`, {
      phoneNumber: phoneNumber,
    });
    return response.data;
  } catch (err) {
    console.log("Error while calling getUserByPhoneNumber api", err);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling set Conversation api", error);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation api", error);
  }
};

export const newMessage = async (data) => {
  try {
    axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newMessage api", error);
  }
};

export const getMessages = async (id) => {
  try {
    return await axios.get(`${URL}/message/get/${id}`);
  } catch (error) {
    console.log("Error while calling getMessage api", error);
  }
};
