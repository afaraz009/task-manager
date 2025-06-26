import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    if (text.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Task Manager
        </h1>
        
        <AddTask onAddTask={addTask} />
        
        <FilterButtons
          currentFilter={filter}
          onFilterChange={setFilter}
          taskCounts={taskCounts}
        />
        
        <TaskList
          tasks={getFilteredTasks()}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
        
        {tasks.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <p className="text-lg">No tasks yet!</p>
            <p className="text-sm">Add a task above to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;