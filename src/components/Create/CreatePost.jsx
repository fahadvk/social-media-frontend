import React, { useState, useEffect, useRef } from 'react';
import {Flex, Heading, Image, Input, Button} from '@chakra-ui/react';
import { BsImageFill } from "react-icons/bs";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import {  useNavigate } from "react-router-dom";

import { createPost } from "../../apiRequests/Postapi";


const CreateComponent = () => {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    let CloudinaryRef = useRef()
    let widgetRef = useRef()
    const openWidget = () => {

        widgetRef.current.open()
    }
    useEffect(() => {

        CloudinaryRef.current = window.cloudinary
        widgetRef.current = CloudinaryRef.current.createUploadWidget(
            {
                cloudName: 'dmfse4ydr',
                uploadPreset: 'ftvgzdez',
                // cropping: true, //add a cropping step
                // showAdvancedOptions: true,  //add advanced options (public_id and tag)
                // sources: [ "local", "url"], // restrict the upload sources to URL and local files
                multiple: false,  //restrict upload to a single file
                // folder: "user_images", //upload files to the specified folder
                // tags: ["users", "profile"], //add the given tags to the uploaded files
                // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
                clientAllowedFormats: ["images",], //restrict uploading to image files only
                // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
                // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
                // theme: "purple", //change to a purple theme
            }, function (err, result) {
                if (!err && result && result.event === "success") {
                    // console.log("Done! Here is the image info: ", result.info);
                    setImage(result.info.secure_url)
                    document
                        .getElementById("uploadedimage")
                        .setAttribute("src", result.info.secure_url);
                }
            })
    })
    const submitPost = async (e) => {
        e.preventDefault()
        const post = {
            caption,
            image,
        }
        let response = await createPost(post)
        if(response.data.success)
        {
            navigate('/')
        }


    };



    return (
        <Flex flexDirection="column" gap="2rem" width="100%" height="max-content">
            <Heading as="h4" size="md">
                New  Post
            </Heading>
            <Flex flexDirection="column" gap="0.4rem" width="100%">
                <Input
                    height={70}
                    variant="filled"
                    placeholder="Caption"
                    onChange={(e) => {
                        setCaption(e.target.value);
                    }}
                    value={caption}
                />
             
            </Flex>
            <BsImageFill onClick={openWidget} className="self-center" />
            <button className="self-center " onClick={openWidget}>upload a image</button>

            <Image id="uploadedimage" />
           
                <Button onClick={submitPost}
                    colorScheme="purple"
                    marginBottom="1rem"


                    loadingText="Creating"
                >
                    Create post
                </Button>
        </Flex>
    );
};

export default CreateComponent;
