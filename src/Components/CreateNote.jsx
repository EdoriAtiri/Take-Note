import { useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import ColorPicker from './Shared/ColorPicker';

function CreateNote({ addNotes }) {
  const [noteTheme, setNoteTheme] = useState('');
  const [notes, setNotes] = useState({
    title: '',
    content: '',
    theme: '',
  });

  function handleNoteChange(e) {
    // const { name, value } = e.target;
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'title') {
      return {
        title: value,
        content: previousNote.content,
        theme: setTheme(),
      };
    } else if (name === 'content') {
      return {
        title: previousNote.title,
        content: value,
        theme: setTheme(),
      };
    }

    // setNotes((previousNote) => {
    //   return { ...previousNote, [name]: value };
    // });
  }

  function setTheme(theme) {
    setNotes((previousNote) => {
      return { ...previousNote, [theme]: theme };
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
          setNotes({ title: '', content: '', theme: '' });
        }}
      >
        <label htmlFor="title"></label>
        <input
          className="border-b-2 py-2 px-6 focus:outline-none focus:border-purple-700 focus:placeholder:text-purple-700 transition-colors delay-200 ease-in rounded-md"
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleNoteChange}
          value={notes.title}
        />

        <label htmlFor="content"></label>
        <textarea
          className="border-b-2 py-2 px-6 focus:outline-none focus:border-purple-700  focus:placeholder:text-purple-700 transition-colors delay-200 ease-in rounded-md"
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
            className="outline-none h-10 w-10 bg-purple-500   rounded-full focus:outline-purple-700"
          >
            <IoAddCircle className="h-10 w-10 text-white active:text-purple-800 ease-linear transition-all duration-150" />
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateNote;
