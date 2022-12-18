import React from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const Bot = () => {
  return (
    <a href="https://wa.me/6285925000662" target="_blank">
      <div className="fixed bottom-5 right-4 z-[999] flex h-16 w-16 animate-bounce cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-4xl text-white sm:right-8">
        <IoChatbubbleEllipsesSharp />
      </div>
    </a>
  );
};

export default Bot;
