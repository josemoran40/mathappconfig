
import React from "react";

export function Container({ children, className }) {
    return (
        <div className={`rounded-md shadow-black border-1 border-gray-300 bg-gray-secondary ${className} `}>
            {children}
        </div>
    );
}
