//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {data.map((props, index) => {
        return <Post
          key={index}
          username={props.username}
          thumbnailUrl={props.thumbnailUrl}
          imageUrl={props.imageUrl}
          comments={props.comments}
          likes={props.likes}
          timestamp={props.timestamp}
        />
      })}
    </div>
  );
};

export default PostsPage;