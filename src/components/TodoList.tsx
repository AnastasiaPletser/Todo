import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './todoList.css';


interface Todo {
    id: number;
    text: string;
  }
  
  interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void; // Добавим функцию обновления задачи
  }
  
  const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onUpdate }) => {
    const [editingId, setEditingId] = useState<number | null>(null);
  
    const handleEdit = (id: number) => {
      setEditingId(id);
    };
  
    const handleSave = (id: number, newText: string) => {
      onUpdate(id, newText);
      setEditingId(null);
    };
  
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onEdit={handleEdit}
              onSave={handleSave}
              isEditing={editingId === todo.id}
            />
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;
