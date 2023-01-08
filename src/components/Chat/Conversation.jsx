/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import openSocket from "socket.io-client";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

import { getMessages, sendMessage } from "../../apiRequests/ChatApis";
import { MainServerUrl } from "../../Constants/defaults";

export default function Chat({ chat, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, SetNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { userId } = useSelector((state) => state.authReducer);
  const SocketRef = useRef();
  const [SendMessage, setSendMessage] = useState("");
  const [recievedmsg, setrecievedmsg] = useState("");
  const [isOnline, setOnline] = useState();
  const scroll = useRef();
  const handleOnEnter = async () => {
    // eslint-disable-next-line no-underscore-dangle
    if (!newMessage || newMessage === "") return;
    const { data } = await sendMessage({
      chatId: chat?._id,
      text: newMessage,
      senderId: userId,
    });
    setMessages([...messages, data]);
    const recieverId = chat?.Users?._id;
    setSendMessage({ data, recieverId });
    if (scroll.current) scroll?.current.scrollIntoView({ behavior: "smooth" });
    SetNewMessage("");
  };

  function checkOnline() {
    const member = chat?.Users?._id;
    const online = onlineUsers.find((user) => user.userId === member);
    return online;
  }
  useEffect(() => {
    try {
      SocketRef.current = openSocket(MainServerUrl);
      SocketRef.current.on("connect", () => {
        console.log("connected");
        SocketRef.current.emit("new-user-add", userId);
        SocketRef.current.on("get-users", (users) => {
          setOnlineUsers([users]);
        });
      });
      SocketRef.current.on("get-users", (activeUsers) =>
        // console.log(activeUsers, "dkkdkk")
        setOnlineUsers(activeUsers)
      );
    } catch (error) {
      console.log(error);
    }
  }, [currentUser]);
  useEffect(() => {
    setOnline(checkOnline());
    const fethMessages = async (chatid) => {
      const { data } = await getMessages(chatid);
      if (data) setMessages(data);
    };
    if (chat !== null) fethMessages(chat?._id);
  }, [chat]);

  useEffect(() => {
    if (SendMessage !== null) {
      SocketRef.current.emit("send-message", SendMessage);
    }
  }, [SendMessage]);

  useEffect(() => {
    setOnline(checkOnline());
    SocketRef.current.on("recieve-message", ({ data }) => {
      setrecievedmsg(data);
    });
    if (scroll.current) scroll?.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    if (recievedmsg !== null) {
      setMessages([...messages, recievedmsg]);
    }
    if (scroll.current) scroll?.current.scrollIntoView({ behavior: "smooth" });
  }, [recievedmsg]);
  return (
    <div>
      <div className="h-screen  flex antialiased text-gray-200 bg-gray-900 mt-6 overflow-hidden">
        <div className="flex-1 flex flex-col">
          <main className="flex-grow flex flex-row min-h-0">
            {chat ? (
              <section className="flex flex-col flex-auto  border-gray-800">
                <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                  <div className="flex">
                    <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src={
                          chat?.Users.profileImage ||
                          "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-bold">{chat?.Users.name}</p>
                      <p>{isOnline ? "online" : "offline"}</p>
                    </div>
                  </div>
                </div>
                {/* chat starts */}
                <div className="chat-body p-4 flex-1 overflow-y-scroll">
                  {messages.map((message) => {
                    return (
                      <div
                        ref={scroll}
                        className={
                          userId === message?.sender
                            ? "flex flex-row justify-end mt-5"
                            : "flex flex-row justify-start"
                        }
                      >
                        <div className="messages text-sm mt-2 bg-white-light p-3 rounded-2xl  text-gray-700 grid grid-flow-row gap-2">
                          <div className="flex items-center group ">
                            <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                              {message.text}
                            </p>
                          </div>
                          <span className="text-gray-500 font-light">
                            {format(message.createdAt)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="chat-footer flex-none">
                  <div className="flex flex-row items-center p-4">
                    <div className="relative flex-grow w-full">
                      <InputEmoji
                        onEnter={handleOnEnter}
                        cleanOnEnter
                        value={newMessage}
                        onChange={(msg) => SetNewMessage(msg)}
                      />
                    </div>
                    <button
                      onClick={handleOnEnter}
                      type="button"
                      className="flex outline bg-blue flex-shrink-0 focus:outline-none mx-2  text-white hover:text-blue-700 py-1 p-2 rounded-lg"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </section>
            ) : (
              <span className="text-lg font-medium ml-auto mr-auto">
                Tap on a Chat to Start a Conversation
              </span>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
