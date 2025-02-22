"use client";

import { VideoHTMLAttributes, memo, useEffect, useRef } from "react";

type VideoPlayerProps = {
  src: string; // Đường dẫn đến file MP4
};

const AutoplayVideo = ({
  src,
  ...props
}: VideoPlayerProps & VideoHTMLAttributes<HTMLVideoElement>) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.2 } // Chỉ phát khi ít nhất 50% video xuất hiện trong viewport
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return <video ref={videoRef} src={src} {...props} loop muted></video>;
};

export default memo(AutoplayVideo);
