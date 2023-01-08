/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Card, Image, Text, Button } from "@mantine/core";
import { useState } from "react";
import { followuser } from "../../apiRequests/Authapis";

export default function People({ user }) {
  const [userInfo, setUserInfo] = useState(user);
  const followUser = async (id) => {
    const { data } = await followuser(id);
    if (data) setUserInfo({ ...userInfo, isFollowed: !userInfo.isFollowed });
  };
  return (
    <Card
      shadow="sm"
      p="md"
      sx={{ maxWidth: "120px", maxHeight: "", marginTop: "3rem" }}
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image
          src={
            userInfo.profileImage ||
            "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          }
          className="flex ml-8 "
          // src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          sx={{ height: "40px", width: "40px" }}
          width="70%"
          height="40%"
        />
      </Card.Section>

      <Text className="mt-12 ml-4 " size="sm" color="dimmed">
        {userInfo.name}
      </Text>

      <Button
        onClick={() => followUser(userInfo._id)}
        variant="light"
        color="blue"
        mt="md"
        radius="md"
      >
        {userInfo?.isFollowed ? "UnFollow" : "Follow"}
      </Button>
    </Card>
  );
}
