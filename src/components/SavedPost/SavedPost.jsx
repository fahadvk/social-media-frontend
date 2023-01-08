import { Box } from "@mantine/core";
import { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fetchsavedPosts } from "../../apiRequests/Postapi";
import {CloudName as cloudName} from '../../Constants/defaults'
import PostCard from "../Post/Post";

export default function () {
  const [saved, setSaved] = useState([]);
  const myCld = new Cloudinary({ cloud: { cloudName } });
  const fetchdata = async () => {
    const { data } = await fetchsavedPosts();
    const posts = data.map((val) => {
      // eslint-disable-next-line no-param-reassign
      val.posts.userid = val.userid;
      return val.posts;
    });

    setSaved(posts);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <Box>
      <h3 className="text-center font-bold mt-6 text-lg"> Saved Posts</h3>
      {saved.map((post) => {
        const publicid = post?.image?.split("/")[7]?.split(".")[0];
        const img = myCld.image(publicid);
        // eslint-disable-next-line no-param-reassign
        post.img = img;
        return <PostCard post={post} />;
      })}
    </Box>
  );
}
