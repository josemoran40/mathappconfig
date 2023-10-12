import React from "react";
import { H1 } from '../../atoms';

export function Navbar({ children, className }) {
    return (
        <div className={`w-screen bg-white p-4`}>
            <H1>Mathapp Config</H1>
        </div>
    );
}
