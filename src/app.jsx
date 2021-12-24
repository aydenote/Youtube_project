import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList/VideoList';
import styles from './app.module.css';
import SearchHeader from './components/searchheader/SearchHeader';
import VideoDetail from './components/videodetail/VideoDetail';
import { useCallback } from 'react';

function App({youtube}) {
  const [title, setTitle] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=> { 
    youtube.mostPopular()
    .then(videos => setTitle(videos))
  },[youtube]);

  const search = useCallback((text)=> {
    youtube.search(text)
    .then(videos => setTitle(videos))
    .then(setSelectedVideo(null))
  },[youtube]);

  const selectVideo = (video) =>{
    setSelectedVideo(video)
  }

 return (
 <div className={styles.app}>
 <SearchHeader onSearch={search} />
 <section className={styles.content}>
   {selectedVideo &&(
  <div className={styles.detail}>
    <VideoDetail video={selectedVideo}/>
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