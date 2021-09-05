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
  const add = (input) => {
    let {text} = input 
    let item = {
      id: list.length + 1,
      text,
      completed: false
    }
    setList([...list, item])
  }
  const updateItem = (e, id) => {
    let updateList = [...list]
    setList(updateList.map((item) => item.id === id ? {...item, completed: !item.completed }: item))
  }
  const deleteItem = (e, id) => {
    setList([...list].filter((item) => item.id !== id))
  }
  return (
    <div className="container">
      <h1>To Do List</h1>
      <ListContext.Provider value={list}>
        <AddItem add={add}/>
        <List list={list} onUpdate={updateItem} onDelete={deleteItem}/>
      </ListContext.Provider>
    </div>
  );
}

export default App;
