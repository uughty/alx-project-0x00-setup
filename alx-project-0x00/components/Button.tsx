import React from "react";


export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full" | "rounded-lg";
  styles: string; // ✅ Make sure this line exists
}


const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", styles }) => {
  let padding = "px-4 py-2"; // default medium
  if (size === "small") padding = "px-2 py-1";
  if (size === "large") padding = "px-6 py-3";

  return (
    <button className={`bg-blue-500 text-white ${padding} ${shape} ${styles}`}>
      {title}
    </button>
  );
};

export default Button;


