import {
    Avatar,
    Divider,
    Flex,
    Heading,
    Image,
    Tag,
    Tooltip,
    useToast,
  } from "@chakra-ui/react";
  import React from "react";
//   import Post from "./Post";
  import { useNavigate } from "react-router-dom";
  
 
  const Post=[{}]
 
  
  const Feed = (props) => {
    const toast = useToast();
    const navigate = useNavigate();
    return props?.isExplore ? (
      <Flex
        flexDirection="column"
        gap="1rem"
        width="100%"
        position="sticky"
        top="5.4rem"
        height="max-content"
      >
        <Heading as="h4" size="md">
          Trending posts
        </Heading>
        {props?.explorePosts?.map((post, index) => (
          <Post key={index} posts={post} />
        ))}
      </Flex>
    ) : props.isLibrary ? (
      <Flex
        flexDirection="column"
        gap="1rem"
        width="100%"
        position="sticky"
        top="5.4rem"
        height="max-content"
      >
        <Heading as="h4" size="md">
          Saved posts
        </Heading>
        {props?.libraryPosts?.map((post, index) => (
          <Post key={index} posts={post} />
        ))}
      </Flex>
    ) : props?.isYourPosts ? (
      <Flex
        flexDirection="column"
        gap="1rem"
        width="100%"
        position="sticky"
        top="5.4rem"
        height="max-content"
      >
        <Heading as="h4" size="md">
          Your posts
        </Heading>
        {props?.yourPosts?.map((post, index) => (
          <Post key={index} posts={post} />
        ))}
      </Flex>
    ) : props?.isSearch ? (
      <Flex
        flexDirection="column"
        gap="1rem"
        width="100%"
        position="sticky"
        top="5.4rem"
        height="max-content"
      >
        <Heading as="h4" size="md">
          Search results
        </Heading>
        {props?.searchPosts?.length === 0 ? (
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            height="80vh"
            flexDirection="column"
            gap="1rem"
          >
            <Image alt="" src="/ohno.png" width="50%" height="50%" />
            <Heading as="h4" size="md" color="gray.500">
              No search results found
            </Heading>
          </Flex>
        ) : (
          props?.searchPosts?.map((post, index) => (
            <Post key={index} posts={post} />
          ))
        )}
      </Flex>
    ) : props?.isProfile ? (
      <Flex
        flexDirection="column"
        gap="1rem"
        width="100%"
        position="sticky"
        top="5.4rem"
        height="max-content"
      >
        <Heading as="h4" size="md">
          {props?.username} posts
        </Heading>
        {props?.profilePosts?.length === 0 ? (
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            height="80vh"
            flexDirection="column"
            gap="1rem"
          >
            <Image alt="" src="/ohno.png" width="50%" height="50%" />
            <Heading as="h4" size="md" color="gray.500">
              Oh noooooo this idiot has no posts
            </Heading>
          </Flex>
        ) : (
          props?.profilePosts?.map((post, index) => (
            <Post key={index} posts={post} />
          ))
        )}
      </Flex>
    ) : props?.isFollower ? (
      <Flex
        flexDirection="column"
        gap="1rem"
        width="100%"
        position="sticky"
        top="5.4rem"
        height="max-content"
      >
        <Flex gap="2rem" alignItems="center" flexWrap="wrap" marginBottom="1rem">
          {props?.followersData?.map((user, index) => (
            <Tooltip label={user?.username} openDelay={400} key={index}>
              <Avatar
                width="16"
                height="16"
                cursor="pointer"
                src={user?.pfp}
                onClick={() => {
                  navigate(`/profile/${user?.uid}`);
                }}
              />
            </Tooltip>
          ))}
        </Flex>
        <Heading as="h4" size="md">
          Your followers post
        </Heading>
      </Flex>
    ) : (
      <Flex
        flexDirection="column"
        gap="1rem"
        width="100%"
        position="sticky"
        top="5.4rem"
        height="max-content"
      >
        <Flex gap="1rem" width="100%" flexWrap="wrap">
          <Tag>Gaming</Tag>
          <Tag>Programming</Tag>
          <Tag>Movies</Tag>
          <Tag>Music</Tag>
          <Tag>Anime</Tag>
          <Tag>YourMom</Tag>
          <Tag>Idk</Tag>
          <Tag>What</Tag>
          <Tag>Else</Tag>
          <Tag>To</Tag>
          <Tag>Write</Tag>
          <Tag>Lol</Tag>
        </Flex>
        {props?.homePosts?.map((post, index) => (
          <Post key={index} posts={post} />
        ))}
      </Flex>
    );
  };
  
  export default Feed;
  