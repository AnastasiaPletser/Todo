import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoAddForm from './components/TodoAddForm';
import './App.css';

interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <div className='Container'>
      <TodoAddForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
    </div>
  );
};

export default App;
