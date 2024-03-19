import React, { useState } from 'react';
import './todoAddForm.css';

interface TodoAddFormProps {
  onAdd: (text: string) => void;
}

const TodoAddForm: React.FC<TodoAddFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='Input' type="text" value={text} onChange={handleChange} />
      <button className='Button' type="submit">Add Todo</button>
    </form>
  );
};

export default TodoAddForm;
