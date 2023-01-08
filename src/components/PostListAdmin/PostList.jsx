import { Modal } from "@mantine/core";
import { useState, useEffect } from "react";
import { format } from "timeago.js";
import { DeletePost } from "../../apiRequests/AdminApis";

import { fetchReported } from "../../apiRequests/Postapi";
import PostCard from "../Post/Post";
import Table from "../Table/Table";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState({});
  useEffect(() => {
    async function fetchReportedPosts() {
      const { data } = await fetchReported();
      if (data) setPosts(data);
    }
    fetchReportedPosts();
  }, []);
  console.log(posts);
  async function deletePost(id) {
    const { data } = await DeletePost(id);
    if (data) {
      const newPosts = posts.filter((val) => {
        return val._id !== data._id;
      });
      setPosts(newPosts);
    }
  }
  // eslint-disable-next-line no-shadow
  const rows = posts.map((post) => (
    <tr key={post._id}>
      <td>{post.userid[0].name}</td>
      <td> {post.likedusers.length}</td>
      <td>{post.reportedUsers?.length}</td>
      <td>{format(post.createdAt)}</td>
      <td>
        <button
          className="p-1 bg-blue rounded text-white"
          type="button"
          onClick={() => {
            setModalOpen(true);
            setPost(post);
          }}
        >
          view
        </button>
      </td>
      <td>
        <button
          type="button"
          onClick={() => deletePost(post._id)}
          className="p-1 bg-blue rounded text-white"
        >
          delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="w-2/3 ">
      <h2 className="text-center text-2xl font-bold"> Reported Posts</h2>
      <div className="border-l-2 border   mt-5">
        <div className="flex align-middle gap-10 justify-around mt-9 border-b-2">
          <Table
            headings={[
              "User Name",
              "Likes",
              "ReportedUsers",
              "postedAt",
              "Delete",
              "View",
            ]}
            rows={rows}
          />
        </div>
      </div>
      <Modal onClose={() => setModalOpen(false)} opened={isOpen}>
        <PostCard post={post} />
      </Modal>
    </div>
  );
}
