/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import React from "react";
// import { useSelector } from "react-redux";
import {
  MdOutlineSpaceDashboard,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
// import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { IconUserSearch } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

function SideNavbar() {
  const cookie = new Cookies();
  const { userId } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="p-10 ml w-1/2 h-screen  bg-white z-20 fixed top-0  -left-72  lg:left-0 lg:w-64  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <h3 className="text-center  text-blue mb-4 font-normal text-xl">
          SnapFeed
        </h3>
        {/* <Tooltip label="Search " openDelay={400}>
          <InputGroup mx={isMobile ? 2 : 4} width={isMobile ? "20vw" : "20vw"}>
            <InputLeftElement
              pointerEvents="none"
              children={<ImSearch color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search  ..."
              variant="filled"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
          </InputGroup>
        </Tooltip> */}
        {/* username ................ */}
        {/* <Box
          sx={{
            marginLeft: "-0rem",
            boxShadow: "3rem",
            backgroundColor: "white",
          }}
        >
          <Flex className="">
            <Image
              className="max-h-16  "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAMAAABmfEh9AAABKVBMVEX////7vARChfTqQzU0qFP7tgAgePPoIQ0LoDj93KWkwfn0pKWl0qn7ugA7gvTqQDHpMh/9367/+/U1f/T+9vbvfHXqPCr+7tH+9OHpKRb+8dn915XpMTf8xAD0PA4jif4fo0YzqjqTtfhGifS1yvqOyJv4zMrylpDynJb2t7f75ub52tjoIQDrVEjtbGb0rqvtZFvwiIH2wMD957L95r3803j8wDL914z8x1T7uyD80oD8zmv8w0PrRj/+4JrymYX0lnDzjETzhib7gwn1SCL2Uzf0W0T+zsPr05PczIO1vFWlsjmktiiijG+bXamdZqOffralmM6jqeHV4fzN6t1iun5HtnUml6tXsmfn8uZKoKm53sRtsaqKwqljlvvH1/t6pfzp8P59wYe90M4LAAAEXklEQVR4nO3Za1vaSBQH8NFwE8nFpA2CWxdBRCu2bPECStu9tXuxd7SSdUvU7/8hdhKUJ8BMmLEnzuzzzP+VL3/POeOZMwEhFRUVFRUVFRUVFRUVlf9PthqN7eWdraePREOi2TWb2Wy2ae09e74rD2y5qYVxXct8vCOLazmrjWNZrR3RnlGiKlwx6/GuaFGQSRWul/tCNAnNqjTT3RZtIqg0symeNavStFJDRpXZFP2vSFLhsyX4yBNVmvtS7Dwlq7TSTzKqNEvoNKWqWjKqtOZTGVWWyJNFVZl7AotFVWklgTOLrnIFtpCuMjUpVaa4+R6jcpMcpHaxvbKy0m6XbT6VZiV13Ff3Dw67up7G0fXD3lFxRhajKj1PxnTc03V9YRz8d2dtyvXQqmInHRGNZemDVXEq+1gnmIKku0uiVPuHabIpdHXKLCrw077SpRTqto2Hxfkq8MlwHFOoW9ddF+NUsFP0KLZQo3Tb81TuHihqbW6lwmq156lAH6v7DJUKq7Uar7K2AFFlNhMuVseOU5ktyGN1wFgqPCDW4lQWZAPbrKagh+W41wRgqewOc6lwD49jXl6Qm2ibA4VZZXqtAN8S9gnTVBirjmiqJuQdWO7yoBb0nk1Wwb6cX3E1ELOK5C9FLyGvQPuEV/WKpHJBByha7fGhFvQTgsp0YRerfa6zHqg6r0szqCzwXsWtWuj9bE23T4Ne9ti2hWie/PLDJCrbAv/ocQ/Vr1GV6brL8A/m71O5ltVI4uvQvVWm6VruXiOZJ3yxm+YIfsHqT37Lrq+v//7mbWv7j8Q+dhSXmPPnX3+fnp6+e//h48dPnz5/yTOnnxTeOyucf/2awsld/BjEybDHSIbl1QepSiUVZuMis8iZTDURU+WOFKocGVSFCEkWlTfIpSay8Y/BrcoDoy5TlUlUKvdvjVu1CYyaKlSg+jbkLZbjg6IK04UKVIUrTpUxvIZEnRFQWJXnVV1BojyCKVD5vCrQwz4glQqrrnkPFuRoL8ye9JEKVbkmlnMFiCL3L1T1uWrlQM6FOrF/oYqrWKBn3Sb3b6TiKdaDlCpUoTzz3uBA3oHegIIaqRDrv6FhQE5Q4gCNqK4X2VgG6GVDbeCtCvkZFhbwtkBt4J0K+c58lgOLsqmlGqvQ5lwW9LbnMaiQX4sdW44BvFahSxYV6g9jBoRTg92qEHmxmlXhLi5SyuWAzqk7FW2yT6nQdTVDOF5OZpjEE5C1VqFraDjGWGYYhjOsgi6f91Fhl18d1nDPwizWqn4yJtbTHk3f38znN/1+UqIg9AuHpnqIsExRAaGihKpu5t3OQkI/7iJV87Y+QaG2UKjKi3tNiMt5zMtLXGiDVKyKtroLVqGZz3xSqMgzS7SK9P1RAhXxaIlXkTZlCVSEpVQG1ewHdylUyLuZ/MVEDhUu13nUJYsKu25S45+95FHhW7FwPqjkcpVKrnIm2jIR7+yyUK/X5UKpqKioqKioqKioqKioxOc/3LiRi8gLI/sAAAAASUVORK5CYII="
              alt="profile"
            />
            <p className="ml-8 mt-4">{userName}</p>
          </Flex>
        </Box> */}
        <div className="flex flex-col justify-start item-center ">
          {/* <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full"></h1> */}
          <div className=" my-4 border-b border-gray-200 pb-6">
            <div
              onClick={() => navigate("/")}
              className="flex mb-2 justify-start items-center gap-4 pl-5   hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Home
              </h3>
            </div>
            <div
              onClick={() => navigate(`/profile/${userId}`)}
              className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Profile
              </h3>
            </div>
            <div onClick={()=> navigate('/messages')} className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Messages
              </h3>
            </div>
            <div
              onClick={() => navigate("/people")}
              className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <IconUserSearch
                // size={48}
                // strokeWidth={2.5}
                color="black"
                className="text-2xl text-gray-600 group-hover:text-white "
              />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Find People
              </h3>
            </div>
            <div 
              onClick={() => navigate("/savedPosts")}
            className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
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
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Saved Posts
              </h3>
            </div>
          </div>
          {/* setting  */}
          <div className=" my-4 border-b border-gray-100 pb-4">
            <div
              onClick={() => navigate("/settings")}
              className="flex mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Settings
              </h3>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                More
              </h3>
            </div>
          </div>
          {/* logout */}
          <div className=" my-4">
            <div
              onClick={() => {
                cookie.remove("token");
                navigate("/login");
              }}
              className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200   hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Logout
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
