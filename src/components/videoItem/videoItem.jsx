import React from 'react';
import styles from '../videoItem/videoItem.module.css';

const VideoItem = ({video:{snippet}}) => 
<li className={styles.video}>
    <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
    
 <div>
     <p className={styles.title}>{snippet.title}</p>
     <p className={styles.channel}>{snippet.channelTitle}</p>
 </div>
</li>










export default VideoItem;
