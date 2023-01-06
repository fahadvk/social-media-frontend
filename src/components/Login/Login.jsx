/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useToast } from "@chakra-ui/react";
import { Input } from "@mantine/core";
import { useDispatch } from "react-redux";
import { setAuth, setName, setUserId } from "../../Store/AuthSlice";
import { changeLoad } from "../../Store/LoaderSlice";
import { loginapi } from "../../apiRequests/authapis";
import { AdminLogin } from "../../apiRequests/AdminApis";

// eslint-disable-next-line react/prop-types
function Login({ admin }) {
  console.log(admin);
  const [show] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setError] = useState(false);
  const toast = useToast();
  const emailRef = useRef("");
  // const handleClick = () => setShow(!show);
  const passwordRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === "" || password === "") {
      setError(true);
      toast({
        status: "error",
        title: "validation error",
        description: "please enter valid details",
      });
    } else {
      dispatch(changeLoad(true));
      if (admin) {
        await AdminLogin({
          UserName: emailRef.current.value,
          Password: passwordRef.current.value,
        });
        dispatch(changeLoad(false));
        return;
      }

      const response = await loginapi({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(changeLoad(false));
      if (response.data?.name) {
        const cookie = new Cookies();
        cookie.set("token", response.data.token);
        dispatch(setName(response.data.name));
        dispatch(setAuth(true));
        // eslint-disable-next-line no-underscore-dangle
        dispatch(setUserId(response.data?._id));
        Navigate("/");
      } else if (response.response.data.failed) {
        toast({
          status: "error",
          title: "failed",
          description: response.response.data.message,
        });
      } else {
        toast({
          status: "error",
          title: "failed",
          description: "failed to authenticate",
        });
      }
    }
  };
  return (
    <div className="bg-gradient-to-r from-navy via-blue to-login flex flex-col justify-center w-full h-screen">
      <div className="max-w-[400px] w-full mx-auto bg-white  p-8 px-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className=" text-blue dark:text-white font-bold text-center text-3xl ">
            Signin
          </h2>
          <div className="flex flex-col text-gray-400 py-2 mt-3">
            <label htmlFor="email"> UserName</label>
            <Input
              size="md"
              ref={emailRef}
              name="email"
              placeholder="email"
              className="rounded-lg bg-gray-700 mt-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col   text-gray-400 ">
            {/* <InputGroup > */}
            {/* <div className="relative "> */}
            <label> Password</label>
            <Input
              size="md"
              className=" rounded-lg  bg-gray-700 mt-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
            className="w-full my-3 py-3 bg-blue text-white rounded-xl"
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
