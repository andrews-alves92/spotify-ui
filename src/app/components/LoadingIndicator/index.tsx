import { HTMLAttributes } from "react";
import { OrbitProgress } from "react-loading-indicators";

type LoadingIndicatorProps = HTMLAttributes<HTMLDivElement>;
export default function LoadingIndicator({ className }: LoadingIndicatorProps) {
  return (
    <div
      className={`d-flex align-items-center justify-content-center h-100 ${className}`}
    >
      <OrbitProgress color="#1ED760" size="medium" />
    </div>
  );
}
