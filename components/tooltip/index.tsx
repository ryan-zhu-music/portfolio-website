//tooltip component
import * as React from "react";

export default function Tooltip({ children, text }: any) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {
        <p
          className={
            "absolute whitespace-nowrap duration-200 text-center z-50 top-10 bg-mauve text-white rounded-sm py-1 px-2 text-xs " +
            (showTooltip ? "opacity-80" : "opacity-0")
          }
        >
          {text}
        </p>
      }
      {children}
    </div>
  );
}
