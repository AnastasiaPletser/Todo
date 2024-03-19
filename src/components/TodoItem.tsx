import React, { useState } from 'react';
import './todoItem.css';

interface Todo {
  id: number;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void; // Добавим функцию для редактирования задачи
  onSave: (id: number, newText: string) => void; // Добавим функцию для сохранения изменений
  isEditing: boolean; // Добавим состояние редактирования
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit, onSave, isEditing }) => {
  const [text, setText] = useState(todo.text);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    onSave(todo.id, text);
  };

  return (
    <div className="todo-item"> 
    <li>
      {isEditing ? (
        <>
          <input type="text" value={text} onChange={handleChange} />
          <button className='Button' onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input type="checkbox" />
          <span>{todo.text}</span>
          <button className='Button' onClick={() => onDelete(todo.id)}>Delete</button>
          <button className='Button' onClick={() => onEdit(todo.id)}>Edit</button>
        </>
      )}
    </li>
    </div>
  );
};

export default TodoItem;
