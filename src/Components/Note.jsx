import { useState } from 'react';
import { IoArrowForward, IoTrashBin } from 'react-icons/io5';

function Note({ todaysDate, content, title, deleteNote, id }) {
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
      className={`${'relative flex flex-col w-60 h-72 rounded-md shadow-2xl p-6 gap-4 transition-all duration-150 '} ${
        isHover ? 'bg-purple-500 scale-110 text-white' : 'bg-white scale-100'
      }`}
    >
      <div className="heading h-1/3">
        <h2
          className={`${'text-2xl font-bold pb-4 border-b'} ${
            isHover ? 'border-purple-900' : 'border-gray-400'
          }`}
        >
          {title}
        </h2>
        <p className="tracking-widest">{todaysDate}</p>
      </div>

      <div className="content flex flex-col justify-between h-2/3 gap-2">
        <p
          className={`  ease-in-out transform -translate-y-4 transition-all duration-200 delay-100 text-white ${
            isHover ? 'opacity-1 translate-y-0' : 'opacity-0'
          }`}
        >
          {content}
        </p>

        <div className="flex justify-between items-center">
          <a href="" className="">
            <p className="flex items-center font-semibold text-lg gap-2 ">
              See More <IoArrowForward />
            </p>
          </a>
          <IoTrashBin
            onClick={() => deleteNote(id)}
            className={`${'cursor-pointer text-red-500'} ${
              isHover && 'text-red-800'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
Note.defaultProps = {
  title: 'Title',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, totam rem doloribus quo voluptatum iste.',
  todaysDate: '3 February, 3022',
};

export default Note;
