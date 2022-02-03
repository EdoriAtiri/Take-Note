import { useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';

function CreateNote({ addNotes }) {
  const [notes, setNotes] = useState({
    title: '',
    content: '',
  });

  function handleNoteChange(e) {
    // const { name, value } = e.target;
    const value = e.target.value;
    const name = e.target.name;

    setNotes((previousNote) => {
      return { ...previousNote, [name]: value };
    });
  }

  return (
    <section className="">
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          addNotes(notes);
          setNotes({ title: '', content: '' });
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

        <button
          type="submit"
          className="outline-none focus:outline-purple-700 w-fit self-end"
        >
          <IoAddCircle className="h-10 w-10 text-purple-700 active:text-purple-800 ease-linear transition-all duration-150" />
        </button>
      </form>
    </section>
  );
}

export default CreateNote;
