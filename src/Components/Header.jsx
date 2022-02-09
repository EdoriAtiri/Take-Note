import React from "react";
import { IoPencilSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="flex h-10 w-full items-center bg-purple-400">
      <div className="flex h-full items-center gap-1 bg-purple-700 p-4 text-2xl font-bold">
        <IoPencilSharp />
        <p>Take Note</p>
      </div>
    </header>
  );
}

export default Header;
