import "./App.css";
import { useEffect, useRef } from "react";

function App() {
  const videoRef = useRef(null);
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1000, height: 1000 },
      })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getVideo();
  }, [videoRef]);
  return (
    <div className="App">
      <div>
        <div>Take a photo</div>
        <video ref={videoRef}></video>
        <button>Snap</button>
      </div>
    </div>
  );
}

export default App;
