import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
  const VideoListItems = props.videos.map( (video) => {
  	return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag} video={video}
          />;
  });

  return (
    <ul className="col-md-4 list-group">
    	{VideoListItems}
    </ul>
  );
};

export default VideoList;
