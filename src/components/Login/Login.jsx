/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useCookies } from "react-cookie";
import {  useDispatch } from "react-redux";
import { setAuth, setName } from "../../store/authSlice";
import { loginapi } from "../../apiRequests/authapis";

function Login() {
  const [show] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setError] = useState(false);
  const [ ,setCookie] = useCookies("token");
  const emailRef = useRef("");
  // const handleClick = () => setShow(!show);
  const passwordRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === "" || password === "") {
      setError(true);
    } else {
      const response = await loginapi({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if (response.data?.name) {
        setCookie("token", response.data.token, { path: "/" });
        const cookie = new Cookies();
        cookie.set("token", response.data.token, { httpOnly: true });
        dispatch(setName(response.data.name));
        dispatch(setAuth(true));
        Navigate("/");
      }
    }
  };
  return (
    <div className="bg-gray-600 flex flex-col justify-center w-full h-screen">
      <div className="max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className=" text-white dark:text-white font-bold text-center text-3xl ">
            {" "}
            Signin
          </h2>
          <div className="flex flex-col text-gray-400 py-2 mt-3">
            <label htmlFor="email"> UserName</label>
            <input
              ref={emailRef}
              name="email"
              placeholder="email"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col   text-gray-400 py-2">
            {/* <InputGroup > */}
            {/* <div className="relative "> */}
            <label> Password</label>
            <input
              className=" rounded-lg  bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              // isInvalid={false}
              ref={passwordRef}
              name="Password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />

            {/* <button className="absolute" onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}</button> */}
            {/* </div> */}
          </div>

          <button
            type="submit"
            className="w-full my-3 py-3 bg-gray-500 rounded-xl"
          >
            Signin
          </button>
        </form>
        <button type="button" className="text-gray-400 py-2 text-center ">
          forgot password
        </button>
        {/* <div className='flex justify-between text-gray-400 py-2'> */}
        <button
          className="w-full text-center text-gray-400 py-2"
          onClick={() => {
            Navigate("/signup");
          }}
          type="submit"
        >
          Don't have an account ? Register
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Login;
