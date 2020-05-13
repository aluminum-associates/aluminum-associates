import React from "react";
import getYouTubeID from "get-youtube-id";
import { FaYoutube } from "react-icons/fa";

const YouTubePreview = ({ value }) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;

  if (!id) {
    return <p>Missing YouTube URL</p>;
  }
  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default {
  name: "youtube",
  title: "Youtube",
  type: "object",
  icon: FaYoutube,
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
    component: YouTubePreview,
  },
};
