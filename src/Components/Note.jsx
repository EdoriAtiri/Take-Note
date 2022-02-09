import { useState } from "react";
import { IoArrowForward, IoTrashBin } from "react-icons/io5";

function Note({ todaysDate, content, title, deleteNote, id, color }) {
  const [isHover, setHover] = useState(false);

  function onNoteHover(e) {
    const mouseHover = e.type;
    if (mouseHover === "mouseover") {
      setHover(true);
    } else if (mouseHover === "mouseout") {
      setHover(false);
    }
  }

  return (
    <div
      onMouseOver={onNoteHover}
      onMouseOut={onNoteHover}
      className={`${"relative flex h-72 w-60 flex-col gap-4 rounded-md p-6 shadow-2xl transition-all duration-150 "} ${
        isHover ? `bg-${color}-500 scale-110 text-white` : "scale-100 bg-white"
      }`}
    >
      <div className="heading h-1/3">
        <h2
          className={`${"border-b pb-4 text-xl font-bold uppercase"} ${
            isHover ? `border-${color}-900` : "border-gray-400"
          }`}
        >
          {title.length <= 16 ? title : title.substring(0, 14) + "..."}
        </h2>
        <p className="tracking-widest">{todaysDate}</p>
      </div>

      <div className="content flex h-2/3 flex-col justify-between gap-2">
        <p
          className={` -translate-y-4 transform text-white transition-all delay-100 duration-200 ease-in-out ${
            isHover ? "opacity-1 translate-y-0" : "opacity-0"
          }`}
        >
          {content.length <= 110 ? content : content.substring(0, 110) + "..."}
        </p>

        <div className="flex items-center justify-between">
          <a href="" className="">
            <p className="flex items-center gap-2 text-lg font-semibold ">
              See More <IoArrowForward />
            </p>
          </a>
          <IoTrashBin
            onClick={() => deleteNote(id)}
            className={`${"cursor-pointer text-red-500"} ${
              isHover && "text-red-800"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
Note.defaultProps = {
  title: "Title",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, totam rem doloribus quo voluptatum iste.",
  todaysDate: "3 February, 3022",
};

export default Note;
