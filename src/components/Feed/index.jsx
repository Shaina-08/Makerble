import React from "react";
import "./style.scss";
import Search from "../Search";
import Post from "../Post";

function Feed() {
  return (
    <div className="page-container">
      <Search />
      <h3>NEWSFEED</h3>
      {[...Array(5)].map((post, index) => {
        return <Post key={index} />;
      })}
    </div>
  );
}

export default Feed;
