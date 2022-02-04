import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div className="bg-gray-100 grid auto-rows-auto gap-12 min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
