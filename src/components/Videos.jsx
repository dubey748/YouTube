import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  // Sort the videos array so that ChannelCard items come before VideoCard items
  const sortedVideos = videos.sort((a, b) => {
    if (a.id.kind === "youtube#channel" && b.id.kind === "youtube#video") {
      return -1;
    } else if (a.id.kind === "youtube#video" && b.id.kind === "youtube#channel") {
      return 1;
    }
    return 0;
  });

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {sortedVideos.map((item, idx) => (
        <Box key={idx}>
          {item.id.kind === "youtube#channel" ? (
            <ChannelCard channelDetail={item} />
          ) : (
            <VideoCard video={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
