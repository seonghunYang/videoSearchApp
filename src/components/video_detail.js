import React from 'react';

export default function VideoDetail({video}) {
  if(!video) {
    return (
      <div className="text-center">No video</div>
    )
  }
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" title={video.title}
      src={`https://www.youtube.com/embed/${video.id}`} allowFullScreen></iframe>
    </div>
  );
}