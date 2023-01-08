import { Cloudinary } from "@cloudinary/url-gen";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostById } from "../apiRequests/Postapi";
import PostCard from "../components/Post/Post";
import { CloudName as cloudName } from "../Constants/defaults";

export default function SinglePost() {
  const { postid } = useParams();
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const myCld = new Cloudinary({ cloud: { cloudName } });

  const fetchPost = async () => {
    try {
      const { data } = await fetchPostById(postid);
      if (data) {
        const publicid = data[0].image?.split("/")[7]?.split(".")[0];
        const img = myCld.image(publicid);
        data[0].img = img;
        // eslint-disable-next-line no-underscore-dangle
        setPost(data[0]);
      } else {
        console.log("else");
        navigate("/dklk");
      }
    } catch {
      navigate("/dklk");
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
