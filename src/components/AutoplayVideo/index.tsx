import { VideoHTMLAttributes } from "react";

type VideoPlayerProps = {
  src: string; // Đường dẫn đến file MP4
};

const AutoplayVideo = ({
  src,
  ...props
}: VideoPlayerProps & VideoHTMLAttributes<HTMLVideoElement>) => {
  return <video autoPlay src={src} {...props} loop muted></video>;
};

export default AutoplayVideo;
