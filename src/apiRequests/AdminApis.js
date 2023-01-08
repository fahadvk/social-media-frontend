import { Host } from "../Constants/defaults";
import { instance } from "./Authapis";
import postApi from "./Postapi";

export const AdminLogin = async (body) => {
  try {
    const { data } = await instance.post("/admin/login", body);
    if (data) {
      window.location.href = `${Host}/admin/home`;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async (page) => {
  try {
    return await instance.get(`/admin/users?page=${page}`);
  } catch (error) {
    return undefined;
  }
};

export const verifyAdmin = async () => {
  try {
    return await instance.get("/admin/verify");
  } catch (error) {
    return undefined;
  }
};

export const BlockUser = async (userId) => {
  try {
    return await instance.patch("/admin/blockuser", { userId });
  } catch (error) {
    return undefined;
  }
};

export const DeletePost = async (postid) => {
  try {
    return await postApi.delete(`/admin/deletePost/${postid}`);
  } catch (error) {
    return undefined;
  }
};
