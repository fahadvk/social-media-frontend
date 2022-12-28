/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Card } from "@mantine/core";
import { Avatar } from "@chakra-ui/react";
import { useState } from "react";
import {
  AdvancedImage,
  responsive,
  lazyload,
  placeholder,
} from "@cloudinary/react";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  addLike,
  DeletePost,
  HidePost,
  savePostApi,
} from "../../apiRequests/Postapi";
import Comments from "../Comments/Comments";

export default function PostCard({ post, fetchAll }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [commentOpen, setCommntOpen] = useState(false);
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.authReducer);
  const isUserPost = post?.userid?._id === userId;
  function openDropdown(e) {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  }
  const like = async (id) => {
    await addLike(id);
    fetchAll();
  };
  const deletePost = async () => {
    const res = await DeletePost(post._id);
    // eslint-disable-next-line no-param-reassign
    if (res.data) await fetchAll();
  };
  const hidePost = async () => {
    const res = await HidePost(post._id);
    if (res.data) await fetchAll();
  };
  const savePost = async () => {
    const res = await savePostApi(post._id);
    if (res) {
      // eslint-disable-next-line no-param-reassign
      post.isSaved = !post.isSaved;
    }
  };
  return (
    <Card sx={{ margin: "0" }}>
      <div className="flex gap-3">
        <div>
          <button
            type="button"
            onClick={() => navigate(`/profile/${post?.userid._id}`)}
          >
            <span className="cursor-pointer">
              <Avatar
                name={post?.userid.name}
                src={post?.userid?.profileimage}
              />
            </span>
          </button>
        </div>
        <div className="grow">
          <p>
            {post?.userid.name}
            <span className="mr-1 font-semibold cursor-pointer hover:underline" />
          </p>
          <p className="text-gray-500 text-sm font-light">
            {format(post?.createdAt)}
          </p>
        </div>
        <div className="relative">
          <button
            type="button"
            className="text-gray-400"
            onClick={openDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          {dropdownOpen && <div className="bg-red w-3 h-3 absolute top-0" />}

          <div className="relative">
            {dropdownOpen && (
              <div className="absolute -right-6 bg-white shadow-md shadow-gray-300 p-3 rounded-sm border border-gray-100 w-52">
                <button
                  type="button"
                  onClick={savePost}
                  className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:text-dark -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={post.isSaved ? "black" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  Save post
                </button>
              
                {!isUserPost && (
                  <button
                    type="button"
                    onClick={hidePost}
                    href="/"
                    className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:text-dark -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Hide post
                  </button>
                )}
                {isUserPost && (
                  <button
                    type="button"
                    onClick={deletePost}
                    className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:text-dark -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="my-3 mt-5 text-sm">{post?.caption}</p>
        <div className="rounded-md overflow-hidden">
          {post?.image && (
            <AdvancedImage
              className="max-h-96 w-full"
              cldImg={post?.img}
              plugins={[lazyload(), responsive(), placeholder()]}
            />
          )}
        </div>
      </div>
      <div className="mt-8 flex gap-8">
        <button
          type="button"
          onClick={() => like(post?._id)}
          className="flex gap-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={post?.isliked ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={post?.isliked ? 0 : 1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {post?.likedusers?.length}
        </button>
        <button
          onClick={() => setCommntOpen(!commentOpen)}
          type="button"
          className="flex gap-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          {post?.comments.length}
        </button>
        <button type="button" className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </button>
      </div>
      <div className="overflow-hidden">
        {commentOpen && <Comments postid={post?._id} />}
      </div>
    </Card>
  );
}
