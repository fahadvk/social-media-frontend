import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { Cloudinary } from "@cloudinary/url-gen";
import "./Posts.css";
import PostCard from "../Post/Post";

import { fetchAll } from "../../apiRequests/Postapi";
import PostFormCard from "../PostCreate/PostCreate";

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

  return (
    <div className="">
      <div className="ml-4">
        <PostFormCard fetchPosts={fetchAllposts} />
      </div>
      {posts?.length === 0 ? (
        <Text>No Post to view</Text>
      ) : (
        posts?.map((val) => {
          const publicid = val?.image?.split("/")[7]?.split(".")[0];
          const img = myCld.image(publicid)
          // eslint-disable-next-line no-param-reassign
          val.img = img;

          return (
            <div className="mt-9 ">
              <PostCard post={val} fetchAll={fetchAllposts} />
            </div>
          );
        })
      )}
      
    </div>
  );
}

export default Posts;
