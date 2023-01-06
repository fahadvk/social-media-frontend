import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchReported } from "../../apiRequests/AdminApis";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchReportedPosts() {
      const { data } = fetchReported();
      if (data) setPosts(data);
    }
    fetchReportedPosts()
  }, []);
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> Reported Posts</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
