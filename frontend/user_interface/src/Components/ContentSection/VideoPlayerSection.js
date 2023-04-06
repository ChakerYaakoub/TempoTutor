// import React, { useState, useRef } from 'react';
// import ReactPlayer from 'react-player';

// const VideoPlayerSection = ({ section, video, onVideoFinish , url  }) => {
//   const playerRef = useRef(null);
//   const [watched, setWatched] = useState(false);

//   const handleProgress = (state) => {
//     if (state.played === 1 && !watched) {
//       setWatched(true);
//       onVideoFinish(section, video);
//     }
//   };

//   return (
//     <ReactPlayer
//       ref={playerRef}
//       url={`https://example.com/${section}/${video}`}
//       onProgress={handleProgress}
//     />
//   );
// };

// export default VideoPlayerSection;
