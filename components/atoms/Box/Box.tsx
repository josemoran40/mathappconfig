
import React from "react";

export function Box({ children, className = "", hover = true }) {
    return (
        <div className={`bg-white flex p-5 flex-1 rounded-md ${className} ${hover && "hover:opacity-50 "} transition-all`}>
            {children}
        </div>
    );
}
