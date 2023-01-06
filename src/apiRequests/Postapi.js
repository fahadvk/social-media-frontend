import axios from "axios";
import { PostServerUrl } from "../Constants/defaults";

const postapi = PostServerUrl;
const instance = axios.create({
  withCredentials: true,
  baseURL: postapi,
  timeout: 3000,
});
export const createPost = async (data) => {
  try {
    return await instance.post("/create", data);
  } catch (error) {
    return console.log(error);
  }
};
export const fetchAll = async () => {
  try {
    return await instance.get("/allPosts");
  } catch (error) {
    return console.error(error);
  }
};
export const addLike = async (postid) => {
  try {
    return await instance.patch("/addLike", { postid });
  } catch (error) {
    return error;
  }
};

export const createComment = async (data) => {
  try {
    return await instance.post("/addcomment", { data });
  } catch (error) {
    return error;
  }
};
export const fecthCommentbypost = async (id) => {
  try {
    return await instance.get(`/fetchCommentByPost/${id}`);
  } catch (error) {
    return error;
  }
};
export const fetchUserPosts = async (id) => {
  try {
    return await instance.get(`/fetchUserPosts/${id}`);
  } catch (error) {
    return error;
  }
};

export const DeletePost = async (id) => {
  try {
    return await instance.delete(`/deletePost/${id}`);
  } catch (error) {
    return error;
  }
};
export const HidePost = async (id) => {
  try {
    return await instance.patch(`/hidePost/${id}`);
  } catch (error) {
    return error;
  }
};
export const savePostApi = async (id) => {
  try {
    return await instance.patch(`/savepost/${id}`);
  } catch (error) {
    return undefined;
  }
};

export const fetchsavedPosts = async () => {
  try {
    return await instance.get("/getsavedPosts");
  } catch (error) {
    return undefined;
  }
};

export const fetchPostById = async (id) => {
  try {
    return await instance.get(`/${id}`);
  } catch (e) {
    return undefined;
  }
};

export const ReportPost = async (id) => {
  try {
    return await instance.patch(`/reportPost/${id}`);
  } catch (error) {
    return undefined;
  }
};
