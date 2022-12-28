import { instance } from "./authapis";

export const getUserChats = async (id) => {
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
// export const
