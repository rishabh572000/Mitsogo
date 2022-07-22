import React from "react";
import profile from '../Media/file.mp4';

export default function Video() {
  return (
    <>   
    <div className="video"> 
    <div className="card">
        <div className="videoHeader">
        <h3>Product Video</h3>
        </div>
        <video src={profile}  height="300" controls="controls" autoplay="true" />
         {/* <iframe
        src="https://www.youtube.com/embed/Oy6hk6Y7VHQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "} */}
    </div>
    </div>
    </>
  );
}