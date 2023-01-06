import { instance } from "./authapis";

export const getUserChats = async () => {
  try {
    return await instance.get(`/chat/`);
  } catch (error) {
    return undefined;
  }
};
export const getMessages = async (id) => {
  try {
    return await instance.get(`/messages/${id}`);
  } catch (error) {
    return undefined;
  }
};

export const sendMessage = async (data) => {
  try {
    return await instance.post("/messages", data);
  } catch (error) {
    return undefined;
  }
};

export const createChatRoom = async (data) => {
  try {
    return await instance.post("/chat/create", data);
  } catch (error) {
    return undefined
  }
};
