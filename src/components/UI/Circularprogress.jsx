import React from "react";

export default function CircularProgress({
  value,
  progressColor = "#3b82f6",
  backgroundColor = "#1f2937",
  size = 60,
  strokeWidth = 4,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate offset based on percentage
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* Background track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        fill="transparent"
      />

      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={progressColor}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(90 ${size / 2} ${size / 2}) scale(-1 1) translate(-${size} 0)`}
        style={{
          transition: "stroke-dashoffset 0.5s ease",
        }}
      />

      {/* Label */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={size / 4}
        fill="#d1d5db"
      >
        {value}%
      </text>
    </svg>
  );
}
