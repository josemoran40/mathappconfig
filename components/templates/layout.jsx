import React from "react";
import { Navbar } from '../molecules';

export function Layout({ children, className }) {
  return (
    <div className={`w-screen min-h-screen bg-gray-primary`}>
      <Navbar />
      <div className={`container mx-auto px-2 py-8 ${className} flex flex-col justify-center items-center min-h-full`}>{children} </div>
    </div>
  );
}
