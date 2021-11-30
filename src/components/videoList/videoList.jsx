import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from '../videoList/videoList.module.css';

const VideoList = (props) => {
    const inputRef = React.createRef();
    const formRef = React.createRef();

    onsubmit = event =>{
        event.preventDefault();
        const text = inputRef.current.value;
        text && props.videoSearch(text);
    }
    return <>
    <div className={styles.navbar}>
        <i class="fab fa-youtube"></i>
          Youtube
      <form ref={formRef} className={styles.search_form} onSubmit={onsubmit}>
        <input ref={inputRef} type="text" className={styles.search_text} />
      </form>
    </div>
    <ul className={styles.videos}>
        {props.videos.map(video =>( 
            <VideoItem key={video.id} video={video} />  
        ))}
    </ul>
    </>
}

export default VideoList;
