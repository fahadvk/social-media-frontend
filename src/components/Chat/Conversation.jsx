/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import openSocket from "socket.io-client";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

import { getMessages, sendMessage } from "../../apiRequests/ChatApis";

export default function Chat({ chat, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, SetNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { userId } = useSelector((state) => state.authReducer);
  const SocketRef = useRef();
  const [SendMessage, setSendMessage] = useState(null);
  const [recievedmsg, setrecievedmsg] = useState("");
  const [isOnline, setOnline] = useState();
  const scroll = useRef();
  const handleOnEnter = async () => {
    // eslint-disable-next-line no-underscore-dangle
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
      SocketRef.current = openSocket("http://localhost:4000");
      SocketRef.current.on("connect", () => {
        console.log("connected");
        SocketRef.current.emit("new-user-add", userId);
        SocketRef.current.on("get-users", (users) => {
          console.log(users, "___________________");
          setOnlineUsers([users]);
        });
      });
      SocketRef.current.on("get-users", (activeUsers) =>
        console.log(activeUsers, "dkkdkk")
      );
    } catch (error) {
      console.log(error);
    }
  }, [currentUser]);
  useEffect(() => {
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
      console.log(data, "recieved");
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
                        // src="https://randomuser.me/api/portraits/women/33.jpg"
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
                        {/* <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                          <img
                            className="shadow-md rounded-full w-full h-full object-cover"
                            // src="https://randomuser.me/api/portraits/women/33.jpg"
                            src={message}
                            alt=""
                          />
                        </div> */}
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
                    {/* <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M0,6.00585866 C0,4.89805351 0.893899798,4 2.0048815,4 L5,4 L7,2 L13,2 L15,4 L17.9951185,4 C19.102384,4 20,4.89706013 20,6.00585866 L20,15.9941413 C20,17.1019465 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1029399 0,15.9941413 L0,6.00585866 Z M10,16 C12.7614237,16 15,13.7614237 15,11 C15,8.23857625 12.7614237,6 10,6 C7.23857625,6 5,8.23857625 5,11 C5,13.7614237 7.23857625,16 10,16 Z M10,14 C11.6568542,14 13,12.6568542 13,11 C13,9.34314575 11.6568542,8 10,8 C8.34314575,8 7,9.34314575 7,11 C7,12.6568542 8.34314575,14 10,14 Z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M9,18 L9,16.9379599 C5.05368842,16.4447356 2,13.0713165 2,9 L4,9 L4,9.00181488 C4,12.3172241 6.6862915,15 10,15 C13.3069658,15 16,12.314521 16,9.00181488 L16,9 L18,9 C18,13.0790094 14.9395595,16.4450043 11,16.9378859 L11,18 L14,18 L14,20 L6,20 L6,18 L9,18 L9,18 Z M6,4.00650452 C6,1.79377317 7.79535615,0 10,0 C12.209139,0 14,1.79394555 14,4.00650452 L14,8.99349548 C14,11.2062268 12.2046438,13 10,13 C7.790861,13 6,11.2060545 6,8.99349548 L6,4.00650452 L6,4.00650452 Z" />
                      </svg>
                    </button> */}
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
