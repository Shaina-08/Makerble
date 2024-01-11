import React from "react";
import "./style.scss";
import { CiHeart } from "react-icons/ci";

function Post() {
  return (
    <div className="post-container">
      <div className="first">
        <img src="https://placekitten.com/150/150?image=1" className="avatar" alt="" />
        <div className="info">
          <div className="title">Shaina</div>
          <div className="value">
            First posted at {new Date().toLocaleString("en-US")}
          </div>
          <div className="badge222">Event Register</div>
        </div>
      </div>
      <div className="expand">Expand Story</div>
      <div className="interaction">
        <CiHeart color="#ff4116" size={30} />
        <div className="infos">
          <div className="text">0 Comments</div>
          <div className="text">0 Favourites</div>
        </div>
      </div>
      <div className="comment">
        <input type="text" placeholder="Write Comment" />
        <div className="btn" style={{color:"white"}}>Post</div>
      </div>
    </div>
  );
}

export default Post;
