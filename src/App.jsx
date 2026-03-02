import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import LetterForm from './components/LetteForm';
import LetterList from './components/LetterList';

function App() {
  const [letters, setLetters] = useState([]);

  useEffect (() => {
    console.log("App mounted - lần render đầu tiên");
  }, []);

  useEffect(() => {
    console.log("Letter updated: ", letters );
  }, [letters]);
  
  const addLetter = (content) => {
    setLetters  ([
      ...letters,
      {
        id: Date.now(),
        content,
      },
    ]);
  };
  return(
  <div>
    <LetterForm onAdd= {addLetter} />
    <LetterList letters= {letters} />
  </div>
)
}

export default App
