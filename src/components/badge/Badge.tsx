import React from "react";
import { BadgeProps } from "../../types";

const Badge = ({ title }: BadgeProps) => {
  return (
    <span className="py-1 px-2 border-[0.2px] border-gray-200 bg-badge-bg rounded text-sm px-2 py-1">
      {title}
    </span>
  );
};

export default Badge;
