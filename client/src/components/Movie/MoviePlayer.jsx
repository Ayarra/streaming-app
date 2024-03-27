import axios from "axios";
import { useEffect, useState } from "react";

const VideoPlayer = ({ movieHash }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/movies/stream/${movieHash}`,
          {
            responseType: "blob",
          }
        );
        console.log("data:", response.data);

        const videoUrl = URL.createObjectURL(response.data);
        console.log("videoURL:", videoUrl);

        setVideoUrl(videoUrl);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching video:", err);
        setError("Failed to fetch video");
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, [movieHash]);

  return (
    <div className="">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <video controls className="max-w-full" src={videoUrl} />
      )}
    </div>
  );
};

export default VideoPlayer;
