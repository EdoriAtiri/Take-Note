import { useState } from 'react';
import CreateNote from './Components/CreateNote';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <CreateNote />
      <Footer />
    </div>
  );
}

export default App;
