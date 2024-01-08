import React from "react";
import { Navbar } from '../molecules';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export function Layout({ children, className }) {
  return (
    <>
    <div className={`w-max-screen min-h-screen bg-gray-primary relative`}>
      <Navbar />
      <div className={` max-w-5xl mx-auto px-2 py-8 ${className} flex flex-col justify-center items-center min-h-full`}>{children} </div>
    </div>
      <ToastContainer theme="colored" />
    </>
  );
}
