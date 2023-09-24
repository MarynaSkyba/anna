// src/components/YouTubePlayer.js
import {useState, useEffect} from 'react';
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const dynamicWidth = screenWidth / 1.25;
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoId = 'u6IUtxHRCXg';

  const mobileOpts = {
    width: dynamicWidth,
    height: '350', 
  };
  
  const tabletOpts = {
    width: dynamicWidth, 
    height: '400', 
  };
  
  const desktopOpts = {
    width:dynamicWidth, 
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
