// You will add code in this file
import React, { useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = ({ username, thumbnailUrl, imageUrl, comments, likes, timestamp }) => {
  // set up state for the likes
  const [like] = useState(likes)

  return (
    <div className="post-border">
      <PostHeader
        username={username}
        thumbnailUrl={thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={imageUrl}
        />
      </div>
      <LikeSection like={like} />
      <CommentSection
        postId={timestamp}
        comments={comments}
      />
    </div>
  );
};

export default Post;
