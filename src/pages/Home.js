import React, { useState } from 'react';

function Home () {
    const [playing, setPlaying] = useState(false);

    const startVideo = () => {
      setPlaying(true);
      navigator.mediaDevices.getUserMedia(
        {
          video: true
        }
      ).then(function(stream) {
        let video = document.getElementsByClassName('app_videoFeed')[0];
          if (video) {
            video.srcObject = stream;
          }
      })
      .catch(function(err) {
        console.error(err)
      })
    };

//   stopStreamedVideo(videoElem) {
//   const stream = videoElem.srcObject;
//   const tracks = stream.getTracks();

//   tracks.forEach(function(track) {
//     track.stop();
//   });

//   videoElem.srcObject = null;
// }

    const stopVideo = () => {
      setPlaying(false);

      let video = document.getElementsByClassName('app_videoFeed')[0];
      video.srcObject.getTracks()[0].stop();
    }
  return (
    <div className="home">
      <video
        height={500}
        width={500}
        muted
        autoPlay
        className="app_videoFeed"
        >
      </video>

      <div>
        {playing ? (
          <button onClick={stopVideo}>Stop</button>
        ) : (
          <button onClick={startVideo}>Start</button>
        )}
      </div>
    </div>
  );
};

export default Home;