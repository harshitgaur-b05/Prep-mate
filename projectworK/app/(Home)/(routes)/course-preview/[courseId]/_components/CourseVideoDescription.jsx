
import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
function CourseVideoDescription({ courseInfo }) {
  if (!courseInfo) {
    return <p>Loading course information...</p>;
  }

  return (
    <div>
      <h2 className="text-[20px] font-semibold " >{courseInfo.name || "No Course Name Available"}</h2>
      
      {/* video player */}
      {console.log(courseInfo?.chapter[0]?.video?.url)}
      {
        console.log(courseInfo?.chapter.map((vid,id)=>vid.video.url))
      }
      <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url}/>
      {/* description */}
      <h2 className="mt-5 text-[17px] font-semibold">About this course</h2>
      <div>
        <Markdown className='text-[12px]
        font-light mt-2 leading-6'>{courseInfo.description}</Markdown>
      </div>
    </div>
  );
}

export default CourseVideoDescription;
