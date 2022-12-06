import axios from "axios";

const postapi = "http://localhost:4001";
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
    return console.log(error);
  }
};
export const addLike = async (postid) => {
  try {
    return await instance.patch("/addLike",{postid});
  } catch (error) {
    return error;
  }
};
