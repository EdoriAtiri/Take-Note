import { createContext, useState } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Test Note',
      content: 'this is a test note',
      theme: 'purple',
    },
  ]);
};

export default NoteContext;
