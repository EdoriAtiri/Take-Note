import React from 'react';
import { IoPencilSharp } from 'react-icons/io5';

function Header() {
  return (
    <header className="h-10 w-full bg-purple-400 flex items-center">
      <div className="flex gap-1 items-center bg-purple-700 h-full p-4 text-2xl font-bold">
        <IoPencilSharp />
        <p>Take Note</p>
      </div>
    </header>
  );
}

export default Header;
