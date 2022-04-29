import React from "react";
import video from './../img/video.jpg'

export const Video = () => {
    return (
            <video src="https://www.w3schools.com/html/movie.mp4" width="100%" height="auto" controls="controls" poster={video}/>
    )
}