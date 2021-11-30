import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList/videoList';
import './app.css';

function App() {
  const [title, setTitle] = useState([]);
  
  useEffect(()=> { 
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&location=korea&key=AIzaSyATcQur2qPzkLrqDQghP40GcxGL3Piu0Eg", requestOptions)
      .then(response => response.json())
      .then(result => setTitle(result.items))
      .catch(error => console.log('error', error));
  },[]);

  const search = (text)=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    
    const search_text = text; 

    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_text}&key=AIzaSyATcQur2qPzkLrqDQghP40GcxGL3Piu0Eg

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_text}}&key=AIzaSyATcQur2qPzkLrqDQghP40GcxGL3Piu0Eg`, requestOptions)
      .then(response => response.json())
      .then(result => setTitle(result.items))
      .catch(error => console.log('error', error));
  }  

 return <VideoList videos={title} videoSearch={search} />
  
 
 }

export default App;