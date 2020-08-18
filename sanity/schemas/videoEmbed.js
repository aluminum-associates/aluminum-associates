import React from "react";
import ReactPlayer from "react-player";
import { MdOndemandVideo } from "react-icons/md";

const EmbedPreview = ({ value }) => {
  const { url } = value;
  return <ReactPlayer url={url} />;
};

export default {
  name: "videoEmbed",
  title: "Embed Link",
  type: "object",
  icon: MdOndemandVideo,
  fields: [
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: EmbedPreview,
  },
};
