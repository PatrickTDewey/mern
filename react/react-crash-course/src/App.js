import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctor\'s Appointment',
    day: 'September 10th 4:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Dentist Appointment',
    day: 'September 20th 2:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Chest Workout',
    day: 'Tomorrow 1:30pm',
    reminder: false,
  },
  ])
  // Delete Task
  const onDelete = (e, id) => {
    console.log(e);
    let newTasks = [...tasks]
    setTasks(newTasks.filter((task) => task.id !== id))
  }
  const toggleReminder = (e, id) => {
    let setReminders = [...tasks]

    setTasks(setReminders.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const addTask = (task) => {
      let updatedTasks = [...tasks]
      let newTask = { id: tasks[tasks.length - 1].id + 1, ...task }
      updatedTasks.push(newTask)
      setTasks(updatedTasks)

  }
  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask} />
      {
        tasks.length ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /> : <h3>No Current Tasks.</h3>
      }
    </div>
  );
}

export default App;
