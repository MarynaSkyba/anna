// src/components/YouTubePlayer.js
import React from 'react';
import YouTube from 'react-youtube';
import { styled } from 'styled-components';


const Container = styled.div`
display: flex;
justify-content: center;
margin: 20px 0;

@media screen and (max-width: 768px ) {
  display: flex;
  justify-content: center;

  margin: 24px;
}
`


const YouTubeVideo = () => {
  const videoId = 'u6IUtxHRCXg';

  const mobileOpts = {
    width: '500',
    height: '350', 
  };
  
  const tabletOpts = {
    width: '700', 
    height: '400', 
  };
  
  const desktopOpts = {
    width: '900', 
    height: '500', 
  };

  const getOptsByScreenSize = () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 768) {
      // Mobile
      return mobileOpts;
    } else if (viewportWidth < 1024) {
      // Tablet
      return tabletOpts;
    } else {
      // Desktop
      return desktopOpts;
    }
  };


  const opts = getOptsByScreenSize();


  return (
    <Container>
      <YouTube videoId={videoId} opts={opts} />
    </Container>
  );
};

export default YouTubeVideo;
