import { useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import ColorPicker from './Shared/ColorPicker';

function CreateNote({ addNotes }) {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errMessage, setErrMessage] = useState('');

  const [notes, setNotes] = useState({
    title: '',
    content: '',
    theme: 'purple',
  });

  function handleNoteChange(e) {
    // const { name, value } = e.target;
    const value = e.target.value;
    const name = e.target.name;

    setNotes((previousNote) => {
      if (name === 'title') {
        return {
          title: value,
          content: previousNote.content,
          theme: previousNote.theme,
        };
      } else if (name === 'content') {
        return {
          title: previousNote.title,
          content: value,
          theme: previousNote.theme,
        };
      }
    });

    // setNotes((previousNote) => {
    //   return { ...previousNote, [name]: value };
    // });
  }

  function setTheme(theme) {
    setNotes((previousNote) => {
      return {
        title: previousNote.title,
        content: previousNote.content,
        theme: theme,
      };
    });
  }

  return (
    <section className="">
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(notes);
          addNotes(notes);
          setNotes({ title: '', content: '', theme: 'purple' });
        }}
      >
        <label htmlFor="title"></label>
        <input
          className="rounded-md border-b-2 py-2 px-6 transition-colors delay-200 ease-in focus:border-purple-700 focus:outline-none focus:placeholder:text-purple-700"
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleNoteChange}
          value={notes.title}
        />

        <label htmlFor="content"></label>
        <textarea
          className="rounded-md border-b-2 py-2 px-6 transition-colors  delay-200 ease-in focus:border-purple-700 focus:outline-none focus:placeholder:text-purple-700"
          id="content"
          name="content"
          cols="30"
          rows="3"
          placeholder="Enter Your Thoughts"
          onChange={handleNoteChange}
          value={notes.content}
        ></textarea>
        <div className="flex justify-between gap-1">
          <ColorPicker select={setTheme} />
          <button
            type="submit"
            disabled={btnDisabled}
            className="active:scale-95 disabled:scale-100"
          >
            <IoAddCircle
              color={btnDisabled ? 'grey' : 'purple'}
              className="h-10 w-10"
            />
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateNote;
