import React from 'react';

const VideoItem = props => (




<div className="item">
<img src={props.video.snippet.thumbnails.default.url} alt="" />  {/* img 태그 디스플레이 블럭을 none 으로 바꿔주면 될 듯*/}
<div>{props.video.snippet.title}</div>
<div>{props.video.snippet.channelTitle}</div>
</div>



)

export default VideoItem;
