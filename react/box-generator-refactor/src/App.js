import React, { useState } from 'react'
import Form from './components/Form';
import BoxDisplay from './components/BoxDisplay';
function App() {
  const [inputStateHistory, setInputStateHistory] = useState([])
  const addToHistory = (data) => {
     setInputStateHistory([...inputStateHistory, data])
  }
  return (
    <div className="container">
      <Form onSubmit={addToHistory}/>
      <BoxDisplay boxStyles={inputStateHistory}/>
    </div>
  );
}
export default App;
