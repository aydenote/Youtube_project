import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList';

function App() {
  const [title, setTitle] = useState([]);

  useEffect(()=> { 
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA2HgFe8-5As2Uz5b1yoI1hpGGOpsOY0sk", requestOptions)
      .then(response => response.json())
      .then(result => setTitle(result.items))
      .catch(error => console.log('error', error));
  },[]);

  
 return <VideoList videos={title} />;
}

export default App;