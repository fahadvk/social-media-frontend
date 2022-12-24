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
export const fetchUserDetails = async (id) => {
  try {
    return await instance.get(`/getUserInfo/${id}`);
  } catch (error) {
    return error;
  }
};
export const updateProfile = async (file) => {
  try {
    return await instance.patch("/editProfilePicture", { imgurl: file });
  } catch (error) {
    return error;
  }
};
export const updateCoverImage = async (file) => {
  try {
    return await instance.patch("/editCoverPicture", { imgurl: file });
  } catch (error) {
    return error;
  }
};

export const verifyPassword = async (password) => {
  try {
    return await instance.patch("/verifyPassword", { password });
  } catch (error) {
    return error;
  }
};
export const setNewPassword = async (password) => {
  try {
    return await instance.patch("/changePassword", { password });
  } catch (error) {
    return undefined;
  }
};
export const updateUserInfo = async (data) => {
  try {
    return await instance.put("/updateUserInfo", { data });
  } catch (error) {
    return error;
  }
};

export const deleteUserAccount = async () => {
  try {
    return await instance.delete("/user");
  } catch (error) {
    return error;
  }
};

export const searchapi = async (data) => {
  try {
    return await instance.get(`/${data}/search`);
  } catch (error) {
    return error;
  }
};
export const fetchAllUsers = async () => {
  try {
    return await instance.get("/findallUsers");
  } catch (error) {
    return error;
  }
};

export const followuser = async (id) => {
  try {
    return await instance.put(`/followUser/${id}`);
  } catch (error) {
    return error;
  }
};

export const findFollowingApi = async () => {
  try {
    return await instance.get("/getfollowing");
  } catch (error) {
    return undefined;
  }
};

export const findFollowedApi = async () => {
  try {
    return await instance.get("/getfollowed");
  } catch (error) {
    return undefined;
  }
};

export async function fetchSuggestedUsersApi() {
  try {
    return await instance.get("/getSuggestedUsers");
  } catch (error) {
    return undefined;
  }
}
