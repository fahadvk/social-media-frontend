/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Autocomplete } from "@mantine/core";
import { useState, useEffect } from "react";
import { searchapi } from "../../apiRequests/authapis";
import { createChatRoom, getUserChats } from "../../apiRequests/ChatApis";
import SingleChat from "../Chat/Chat";
import Chat from "../Chat/Conversation";

export default function Users() {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResult, setResult] = useState([]);
  const getChats = async () => {
    const { data } = await getUserChats();
    if (data) setChats(data);
  };
  useEffect(() => {
    getChats();
  }, []);
  const searchHandler = (e) => {
    setSearch(e);
    setTimeout(async () => {
      const { data } = await searchapi(search);
      console.log(data);
      if (data) {
        const names = [];
        data.forEach((res) => {
          // eslint-disable-next-line no-underscore-dangle
          names.push({ value: res.name, id: res._id });
          console.log(res.name);
        });
        setResult(names);
      }
    }, 100);
  };
  const submitItem = async (e) => {
    const recieverId = e.id;
    const { data } = await createChatRoom({ recieverId });
    console.log(data);
    getChats();
    // eslint-disable-next-line no-underscore-dangle
    const current = chats.find((chat) => chat._id === data._id);
    setCurrentChat(current);
  };
  return (
    <div className="flex h-screen flex-row w-full bg-white">
      <div className="flex w-1/4 flex-col border-l border-r-2 overflow-y-auto">
        <div className=" py-4 px-3">
           <Autocomplete
          value={search}
          onChange={searchHandler}
          data={searchResult}
          onItemSubmit={submitItem}
          placeholder="search People"
        />
          </div>
        <h3 className="text-center font-semibold">Recent Chats</h3>
        {chats.map((chat) => {
          return <SingleChat setCurrentChat={setCurrentChat} chat={chat} />;
        })}
      </div>
      <div className="w-2/3">
        <Chat chat={currentChat} />
      </div>
    </div>
  );
}
