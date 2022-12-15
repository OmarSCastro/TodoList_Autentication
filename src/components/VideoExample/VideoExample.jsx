import React from 'react';
import ReactPlayer from 'react-player';
 

export const VideoExample = ({url}) => {
  return (
    <ReactPlayer url={url} />
  )
}
