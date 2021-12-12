import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList/videoList';
import styles from './app.module.css';
import Search_header from './components/search_header/search_header';
import Video_detail from './components/video_detail/video_detail';

function App({youtube}) {
  const [title, setTitle] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=> { 
    youtube.mostPopular()
    .then(videos => setTitle(videos))
  },[]);

  const search = (text)=> {
    youtube.search(text)
    .then(videos => setTitle(videos))
    .then(setSelectedVideo(null))
  };

  const selectVideo = (video) =>{
    setSelectedVideo(video)
  }

 return (
 <div className={styles.app}>
 <Search_header onSearch={search} />
 <section className={styles.content}>
   {selectedVideo &&(
  <div className={styles.detail}>
    <Video_detail video={selectedVideo}/>
  </div>
   )}
 <div className={styles.list}>
   <VideoList videos={title} onVideoClick={selectVideo} display={selectedVideo? 'list':'grid'}/>
 </div>
  
 </section>
  </div>
 )
 }

export default App;