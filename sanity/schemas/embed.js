import React from "react";
import Embed from "react-embed";
import { GrMultimedia } from "react-icons/gr";

const EmbedPreview = ({ url }) => {
  return <Embed url={url} />;
};

export default {
  name: "embed",
  title: "Embed Link",
  type: "object",
  icon: GrMultimedia,
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
