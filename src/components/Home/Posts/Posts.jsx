import { useState, useEffect } from "react";
import { Box as Mbox } from "@mantine/core";
import { Text } from "@chakra-ui/react";


import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import { Cloudinary } from "@cloudinary/url-gen";

import {  fetchAll } from "../../../apiRequests/Postapi";
import "./Posts.css";

import Post from "../Post/Post";
let fetchAllposts
function Posts() {
  const [posts, setPosts] = useState([]);
  
  const fetchAllposts = async () => {
   const response = await fetchAll();
   setPosts(response?.data);
 };
  useEffect(() => {
    fetchAllposts();
  }, []);
  const myCld = new Cloudinary({ cloud: { cloudName: "dmfse4ydr" } });
 
  return posts?.length === 0 ? (
    <Text>No Post to view</Text>
  ) : (
    posts?.map((val) => {
      const publicid = val?.image?.split("/")[7]?.split(".")[0];
      const img = myCld.image(publicid);
      val.img = img;
   

      return (
        <>
          <Post post={val} fetchAll={fetchAllposts} />
        </>
      );
    })
  );
}

export default Posts;

