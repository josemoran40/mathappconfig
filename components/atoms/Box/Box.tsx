import React from "react";

export function Box({ children, className = "", hover = true, ...remaing }) {
  return (
    <div
      {...remaing}
      className={`bg-white flex p-5 flex-1 rounded-md ${className} ${
        hover && "hover:opacity-50 cursor-pointer"
      } transition-all`}
    >
      {children}
    </div>
  );
}
