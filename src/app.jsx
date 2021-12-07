import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList/videoList';
import styles from './app.module.css';
import Search_header from './components/search_header/search_header';

function App({youtube}) {
  const [title, setTitle] = useState([]);

  useEffect(()=> { 
    youtube.mostPopular()
    .then(videos => setTitle(videos))
  },[]);

  const search = (text)=> {
    youtube.search(text)
    .then(videos => setTitle(videos))
  };


 return (
 <div className={styles.app}>
 <Search_header onSearch={search}/>
 <VideoList videos={title} />
  </div>
 )
 }

export default App;