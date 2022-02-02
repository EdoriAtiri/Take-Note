import { useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';

function Note(props) {
  const [isHover, setHover] = useState(false);

  function onNoteHover(e) {
    const mouseHover = e.type;

    if (mouseHover === 'mouseover') {
      setHover(true);
    } else if (mouseHover === 'mouseout') {
      setHover(false);
    }
  }

  return (
    <div
      onMouseOver={onNoteHover}
      onMouseOut={onNoteHover}
      className={`${'flex flex-col w-60 h-72 rounded-md shadow-2xl p-6 justify-between transition-all duration-150 '} ${
        isHover ? 'bg-purple-500 scale-110 text-white' : 'bg-white scale-100'
      }`}
    >
      <div className="heading">
        <h2
          className={`${'text-2xl font-bold pb-4 border-b'}${
            isHover ? 'border-purple-900' : 'border-gray-400'
          }`}
        >
          Note Title
        </h2>
        <p className="tracking-widest">{props.todaysDate}</p>
      </div>

      <div className="content flex flex-col justify-between gap-2">
        <p
          className={`${
            isHover ? 'opacity-1 translate-y-0' : 'opacity-0'
          }  ease-in-out transform -translate-y-4 transition-all duration-200 delay-100 text-white`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          totam rem doloribus quo voluptatum iste.
        </p>

        <a href="" className="">
          <p className="flex items-center font-semibold text-lg gap-2 ">
            See More <IoArrowForward />
          </p>
        </a>
      </div>
    </div>
  );
}

export default Note;
