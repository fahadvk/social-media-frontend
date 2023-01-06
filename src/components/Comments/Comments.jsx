/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Avatar } from "@chakra-ui/react";
import { ScrollArea } from "@mantine/core";
import { useRef, useState, useEffect } from "react";
import openSocket from "socket.io-client";

import {
  createComment as create,
  fecthCommentbypost,
} from "../../apiRequests/Postapi";
import Comment from "../Comment/Comment";

function Comments({ postid, incrementcount }) {
  const commentRef = useRef("");
  const [allComments, setComments] = useState([]);

  const fetchcomments = async () => {
    const response = await fecthCommentbypost(postid);
    if (response?.data) setComments(response.data);
  };
  useEffect(() => {
    fetchcomments();
    const socket = openSocket("http://localhost:4001");
    socket.on("comment", (data) => {
      if (data.action === "create") {
        setComments(data.post);
      }
    });
    console.log("comment");
  }, []);
  const createComment = async () => {
    const content = commentRef.current.value;
    const response = await create({ postid, content });
    if (response.data) commentRef.current.value = "";
    // await fetchcomments();
    incrementcount();
  };
  return (
    <>
      <>
        <ScrollArea type="hidden">
          <div className="bg-white mb-4 p-1 max-h-48  w-full  text-black">
            {allComments?.map((val) => {
              return (
                <div className="">
                  <Comment comment={val} />
                </div>
              );
            })}
          </div>
        </ScrollArea>
        <div className="flex mt-4 gap-3">
          <div>
            <Avatar />
          </div>
          <div className="border grow rounded-full relative">
            <input
              ref={commentRef}
              className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full"
              placeholder="Leave a comment"
            />
            <button
              type="button"
              className="absolute top-4 right-3 text-gray-400"
              onClick={createComment}
            >
              {" "}
              Send
            </button>
          </div>
        </div>
      </>
      <div className="grow text-right">
        <button
          type="button"
          className="bg-socialBlue text-white px-6 py-1 rounded-md"
        >
          Share
        </button>
      </div>
    </>

    // </div>
  );
}
export default Comments;
