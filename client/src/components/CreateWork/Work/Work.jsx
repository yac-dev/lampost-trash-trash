// main libraries
import React from 'react';

// component
import PhotoWork from './PhotoWork/PhotoWork';
import VideoWork from './VideoWork/VideoWork';

const Work = (props) => {
  switch (props.type) {
    case 'photo':
      return <PhotoWork />;
    case 'video':
      return <VideoWork />;
    default:
      return null;
  }
};

export default Work;
