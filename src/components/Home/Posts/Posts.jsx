import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Text, Image, Flex, Heading, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { FaRocketchat, } from "react-icons/fa";
import { BiLike, BiChat, BiShare } from 'react-icons/bi'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { fetchAll } from "../../../apiRequests/Postapi";
import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  accessibility,
  responsive,
  lazyload,
  placeholder
} from '@cloudinary/react';

const Posts = () => {
  const [posts, setPosts] = useState([])
  const fetchAllposts = async () => {
    const response = await fetchAll()
    setPosts(response.data)
  }
  useEffect(() => {
    fetchAllposts()

  }, [])
  const myCld = new Cloudinary({ cloud: { cloudName: 'dmfse4ydr' } });

  console.log(posts, "post")

  return (
    posts.length === 0 ? <Text>No Post to view</Text> :
      posts.map((val) => {
 const publicid = val.image.split('/')[7].split('.')[0]
 console.log(publicid)
       let img = myCld.image(publicid)
       
        return <Card maxW='md'>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name={val.userid.name} />

                <Box>
                  <Heading size='sm'></Heading>
                  <Text>{val.userid.name}</Text>
                </Box>
              </Flex>
              <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              {val.caption}
            </Text>
          </CardBody>
       { val.image &&  <AdvancedImage
            cldImg={img}
            plugins={[lazyload(), responsive(), placeholder()]}
          />}
          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
            <Button flex='1' variant='ghost'
              // leftIcon={<BiLike />}
              leftIcon={<AiOutlineLike />}
            >
              Like
            </Button>
            <Button flex='1' variant='ghost'
              leftIcon={<BiChat />}
            >
              Comment
            </Button>
            <Button flex='1' variant='ghost'
              leftIcon={<BiShare />}
            >
              Share
            </Button>
          </CardFooter>
        </Card>
      })

  )

}
export default Posts