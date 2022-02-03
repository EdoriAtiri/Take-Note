import { useState } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';
import todaysDate from './data/date.js';

function Main() {
  const [allNotes, setAllNotes] = useState([]);

  function onAdd(item) {
    setAllNotes((prevNote) => {
      return [...prevNote, item];
    });
  }

  function onDelete(id) {
    setAllNotes((prevNote) => {
      return prevNote.filter((note, index) => index !== id);
    });
  }

  return (
    <div className="px-8 flex flex-col gap-8">
      <CreateNote addNotes={onAdd} />
      <div className="grid grid-cols-2 gap-4">
        {allNotes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
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
