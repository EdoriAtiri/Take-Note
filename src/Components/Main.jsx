import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';
import todaysDate from './data/date.js';

function Main() {
  const [allNotes, setAllNotes] = useState([]);

  function onAdd(item) {
    item.id = uuidv4();

    setAllNotes((prevNote) => {
      return [item, ...prevNote];
    });
    console.log(allNotes);
  }

  function onDelete(id) {
    setAllNotes((prevNote) => {
      return prevNote.filter((note) => note.id !== id);
    });
  }
  //
  return (
    <div className="flex flex-col gap-16 px-8 md:px-16 lg:px-36">
      <CreateNote addNotes={onAdd} />
      <div className="m-auto grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 md:gap-x-10 md:gap-y-4 lg:grid-cols-4 xl:grid-cols-4">
        {allNotes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              color={note.theme}
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
