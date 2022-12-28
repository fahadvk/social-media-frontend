/* eslint-disable react/prop-types */
import { createStyles, Text, Avatar, Group } from "@mantine/core";
import { format } from "timeago.js";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

function Comment({ comment }) {
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar src="" alt="" radius="xl" />
        <div>
          <Text size="sm">{comment.username?.name}</Text>
          <p className="text-gray text-sm font-light">{format(comment?.comments?.date)}</p>
        </div>
      </Group>

      <Text className={classes.body} size="sm">
        {comment?.comments?.content}
      </Text>
    </div>
  );
}

export default Comment;
