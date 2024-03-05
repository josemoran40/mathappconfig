import React from "react";
import { H1 } from '../../atoms';

export function Navbar({ children, className }) {
    return (
        <div className={`w-max-screen bg-white p-4`}>
            <H1>FactorXpert Config</H1>
        </div>
    );
}
