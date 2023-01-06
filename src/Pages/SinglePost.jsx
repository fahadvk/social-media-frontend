import { Cloudinary } from "@cloudinary/url-gen";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../apiRequests/Postapi";
import PostCard from "../components/Post/Post";
import { CloudName as cloudName } from "../Constants/defaults";

export default function SinglePost() {
  const { postid } = useParams();
  const [post, setPost] = useState();
  const myCld = new Cloudinary({ cloud: { cloudName } });

  const fetchPost = async () => {
    console.log(postid);
    const { data } = await fetchPostById(postid);
    console.log(data);
    if (data) {
      const publicid = data[0].image?.split("/")[7]?.split(".")[0];
      const img = myCld.image(publicid);
      data[0].img = img;
      // eslint-disable-next-line no-underscore-dangle
      //   data.userid._id = id;

      console.log(data.img);
      setPost(data[0]);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="w-full  flex justify-center mt-10">
      <div className="w-2/3 lg:w-1/3">
        {post && <PostCard post={post} fetchAll={fetchPost} />}
      </div>
    </div>
  );
}
