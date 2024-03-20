
import React from "react";

export function H2({ children, className = "" }) {
    return (
        <h2 className={`text-xl ${className}`}>{children}</h2>
    );
}
