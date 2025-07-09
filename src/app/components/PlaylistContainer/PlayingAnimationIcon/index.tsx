import Style from "./playing-animation.module.css";

interface PlayingAnimationIconProps {
  isPlaying: boolean;
}

export default function PlayingAnimationIcon({
  isPlaying,
}: PlayingAnimationIconProps) {
  const dots = Array(3).fill("");
  return (
    <div className={`d-flex me-1 align-items-end ${Style.loadingContainer}`}>
      {dots.map((_, index) => (
        <div
          key={index}
          className={`${Style.loadingSquare} ${
            isPlaying ? Style.animatePlayingIcon : ""
          } bg-primary`}
        />
      ))}
    </div>
  );
}
