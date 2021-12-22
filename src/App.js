import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react';


const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        // Can use Context API or redux instead for state, in order to easily pull state from
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5 at 1:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'do ye mum',
            day: 'dec 24 at 10:00pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'feb 7 at 12:00pm',
            reminder: false,
        },
        {
            id: 4,
            text: 'Meeting at School',
            day: 'june 23 at 9:00am',
            reminder: false,
        },
    ]);
    // Add Tasks to
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    // toggle reminder button
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }


    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
            
        </div>
  );
}

export default App;
 