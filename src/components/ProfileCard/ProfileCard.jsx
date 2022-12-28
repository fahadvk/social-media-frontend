/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProfileCard.css";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  fetchUserDetails,
  updateCoverImage,
  updateProfile,
} from "../../apiRequests/authapis";

function ProfileCard({ Details }) {
  const { id } = useParams();
  const { userId } = useSelector((state) => state.authReducer);
  const toast = useToast();
  const CoverImageRef = useRef("");
  const [coverURl, SetCoverUrl] = useState("");
  const [details, SetDetails] = useState({});
  const isLogginedUser = id === userId;
  const CloudinaryRef = useRef();
  const widgetRef = useRef();
  const openWidget = () => {
    isLogginedUser && widgetRef.current.open();
  };
  const fetchDetails = async () => {
    const res = await fetchUserDetails(id);
    if (res.data) SetDetails(res.data);
  };
  CloudinaryRef.current = window.cloudinary;
  widgetRef.current = CloudinaryRef.current.createUploadWidget(
    {
      cloudName: "dmfse4ydr",
      uploadPreset: "ftvgzdez",
      cropping: true,
      sources: ["local", "camera"],
      folder: "user_Profile",
      multiple: false, // restrict upload to a single file
      clientAllowedFormats: ["images", "png", "webp", "jpeg"], // restrict uploading to image files only
    },
    async (err, result) => {
      if (!err && result && result.event === "success") {
        await updateProfile(result.info.secure_url);
        fetchDetails();
        toast({
          title: "profileupdated",
          status: "success",
          isClosable: true,
        });
      }
    }
  );
  Details && SetDetails(Details);
  !Details &&
    useEffect(() => {
      fetchDetails();
    }, []);

  return (
    <div className="ProfileCard">
      <div className="ProfileImage">
        <img
          className="coverImage"
          src={
            coverURl ||
            (details?.coverImage
              ? details?.coverImage
              : "https://img.freepik.com/free-vector/winter-light-blue-gradient-background_53876-120755.jpg?w=2000")
          }
          alt=""
          onClick={() => {
            isLogginedUser && CoverImageRef.current.click();
          }}
        />

        <img
        className="max-h-28"y
          alt=""
          src={
            details.profileImage
              ? details.profileImage
              : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          }
          onClick={openWidget}
        />

        <input
          name="cover"
          accept="image/png,image/jpeg,image/webp"
          onChange={async (e) => {
            const file = e.target.files[0]
           
            SetCoverUrl(URL.createObjectURL(file));
            const form = new FormData()
            form.append("file",file)
            form.append("upload_preset","ftvgzdez")
            form.append("folder","coverImages")
            axios
              .post("https://api.cloudinary.com/v1_1/dmfse4ydr/image/upload", form)
              .then(async (res) => {
                const response = await updateCoverImage(res.data.secure_url);
                if (response.data)
                  toast({
                    title: "coverImageUpdated",
                    status: "success",
                    isClosable: true,
                  });
              });
          }}
          type="file"
          hidden
          ref={CoverImageRef}
        />
      </div>
      <div className="ProfileName">
        <span>{details.name} </span>

        <span>{details?.about} </span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{details?.following?.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl" />
          <div className="follow">
            <span>{details?.followers?.length}</span>
            <span>Followers</span>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default ProfileCard;
