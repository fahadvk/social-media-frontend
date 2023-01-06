/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Avatar } from "@chakra-ui/react";
import { createPost } from "../../apiRequests/Postapi";
import {CloudName,uploadPreset} from '../../Constants/defaults'

export default function PostFormCard({fetchPosts}) {
  const [image, setImage] = useState("");
  const captionRef = useRef("");
  const CloudinaryRef = useRef();
  const widgetRef = useRef();
  const { userName } = useSelector((state) => state.authReducer);
  const openWidget = () => {
    widgetRef.current.open();
  };
  
  useEffect(() => {
    CloudinaryRef.current = window.cloudinary;
    widgetRef.current = CloudinaryRef.current?.createUploadWidget(
      {
        cloudName:CloudName,
        uploadPreset,
        multiple: false, // restrict upload to a single file
        clientAllowedFormats: ["images", "png", "webp", "jpeg"], // restrict uploading to image files only

      },
      function (err, result) {
        if (!err && result && result.event === "success") {
          setImage(result.info.secure_url);
        }
      }
    );
  }, []);
  const submitPost = async (e) => {
    e.preventDefault();
    const post = {
      caption: captionRef.current.value,
      image,
    };
    if(captionRef.current.value === '' && image === ''){
      return undefined
    }
    const response = await createPost(post);
    setImage("");
    if (response.data.success) {
     return fetchPosts()
    }
    return undefined
  };
  return (
    <Card>
      <div className="flex gap-2">
        <div>
          <Avatar src="" className="blue" backgroundColor='#0D4C92' name={userName}/>
        </div>
        <input
          ref={captionRef}
          className="grow p-3 h-14"
          placeholder={`Whats on your mind, ${userName}?`}
        />
      </div>
      <div className="flex gap-5 items-center mt-2">
        <div>
          <button onClick={openWidget} type="button" className="flex gap-1">
            <img
              alt=""
              className="max-h-5 ml-3"
              src="https://www.svgrepo.com/show/76225/picture-frame.svg"
            />
          </button>
        </div>
        <div className="grow text-right mb-2">
          <input hidden type="file" accept="" />
          {!image && (
            <button
              type="button"
              onClick={submitPost}
              className="  text-white bg-blue px-6 py-1 rounded-md"
            >
              Share
            </button>
          )}
        </div>
      </div>
      {image && (
        <>
          <div>
            <img alt="" src={image} />
          </div>
          <button
            type="button"
            onClick={submitPost}
            className="bg-socialBlue text-dark bg-blue-500 px-6 py-1 rounded-md"
          >
            Share
          </button>
        </>
      )}
    </Card>
  );
}
