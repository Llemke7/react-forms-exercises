import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [formData, setFormData] = useState({ task: "" });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo({ ...formData, id: uuid() });
    setFormData({ task: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
          id="task"
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
