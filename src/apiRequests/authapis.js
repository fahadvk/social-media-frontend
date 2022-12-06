/* eslint-disable linebreak-style */
import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000/",
  timeout: 3000,
});

export const registerapi = async (body) => {
  try {
    return await instance.post("/register", { body });
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const loginapi = async (body) => {
  try {
    return await instance.post("/login", body);
  } catch (error) {
    return error;
  }
};
export const verifyuser = async () => {
  try {
    return await instance.get("/verify");
  } catch (error) {
    return error;
  }
};

// export const emailCheck = async (email) => {
//   return await instance.get(`/emailexist/${email}`)
// }
