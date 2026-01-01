import React from 'react'
import { featchGif, featchPhotos, featchVideos } from './api/mediaApi'

const App = () => {



  return (
    <div>
      <button onClick={async()=>{
        const data = await featchPhotos('cat')

        console.log(data.results);
        
      }}>get photos</button>

      <button onClick={async()=>{
       const data = await featchVideos('cat')
       console.log(data.videos);
      }}>
        get videos
      </button>


      <button onClick={async()=>{
       const data = await featchGif('cat')
       console.log(data.data.results);
       
      }}>
        get gif
      </button>
    </div>
  )
}

export default App