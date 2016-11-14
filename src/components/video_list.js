/**
 * Created by hhnj on 10/29/16.
 */
import React from 'react';

function VideoList(props) {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}

export default VideoList;
