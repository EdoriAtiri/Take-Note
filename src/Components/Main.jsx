import { useState } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';
import todaysDate from './data/date.js';

function Main() {
  const [allNotes, setAllNotes] = useState([]);

  function onAdd(item) {
    setAllNotes((prevNote) => {
      return [item, ...prevNote];
    });
    console.log(allNotes);
  }

  function onDelete(id) {
    setAllNotes((prevNote) => {
      return prevNote.filter((note, index) => index !== id);
    });
  }
  //
  return (
    <div className="flex flex-col gap-8 px-8 md:px-16 lg:px-36">
      <CreateNote addNotes={onAdd} />
      <div className="grid grid-cols-1 m-auto sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 md:gap-x-10 gap-y-10 md:gap-y-4">
        {allNotes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              color={note.color}
              todaysDate={todaysDate}
              deleteNote={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
