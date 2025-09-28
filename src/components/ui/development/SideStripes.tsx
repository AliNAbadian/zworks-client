import React from "react";

type SideStripesProps = {
  count?: number;
};

const SideStripes = ({ count = 9 }: SideStripesProps) => {
  return (
    <div className="grid grid-cols-9 h-full">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="h-full bg-gradient from-white/10 to-transparent text-white flex items-center justify-center backdrop-blur-md shadow"
        />
      ))}
    </div>
  );
};

export default SideStripes;
