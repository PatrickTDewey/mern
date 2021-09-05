import React, { useState, useEffect, useReducer } from 'react'
import AddItem from './components/AddItem'
import List from './components/List'
import ListContext from './context/ListContext';
const initialState = [{
  id: 1,
  text: 'Take out the trash.',
  completed: false
},{
  id: 2,
  text: 'Do the dishes.',
  completed: false
},{
  id: 3,
  text: 'Clean room.',
  completed: false
},
]
function App() {
  const localData = localStorage.getItem('list');
  const [list, setList] = useState(localData ? JSON.parse(localData) : initialState)
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])
  
  return (
    <div className="container">
      <h1>To Do List</h1>
      <ListContext.Provider value={{list , setList}}>
        <AddItem />
        <List />
      </ListContext.Provider>
    </div>
  );
}

export default App;
