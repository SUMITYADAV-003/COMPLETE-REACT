import React from 'react'
import "./spotify.scss";
import MacWindow from './MacWindow';

const Spotify = () => {
  return (
    <MacWindow width='max(25vw,)'>
      <div className='spotify-window'>
    <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} 
    src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF?utm_source=generator"
     width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
     
    </MacWindow>

    
  )
}

export default Spotify