import React from 'react';

const VideoList = (props) => {
   //const vidoes = props.vidoes;
   return (
      <ul className="col-md-4 list-group">
         {props.videos.length}
      </ul>
   )
};

export default VideoList;