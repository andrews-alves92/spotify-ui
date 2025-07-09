import Style from "./progress-bar.module.css";
interface ProgressBarProps {
  percentage: number;
}
export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className={Style.progressContainer}>
      <div
        className={Style.filledProgress}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
