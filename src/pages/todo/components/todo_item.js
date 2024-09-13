import React from 'react';

const TodoItem = ({ todo, toggleCompletion, handleShowModal, deleteTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-start p-3 mb-2 shadow-sm ${todo.completed ? 'list-group-item-success' : 'list-group-item-light'
        }`}
      style={{ borderRadius: '8px', transition: 'all 0.3s ease' }}
    >
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="form-check-input me-3"
          checked={todo.completed}
          onChange={() => toggleCompletion(todo.id)}
        />
        <div>
          <h5
            className={`mb-1 ${todo.completed ? 'text-decoration-line-through' : ''}`}
            style={{ color: todo.completed ? '#6c757d' : '#212529' }}
          >
            {todo.title}
          </h5>
          <p
            className={`mb-1 ${todo.completed ? 'text-decoration-line-through' : ''}`}
            style={{ color: '#6c757d', fontSize: '0.9rem' }}
          >
            {todo.description}
          </p>
        </div>
      </div>
      <div className='mt-2'>
        <button onClick={() => handleShowModal(todo)} className="btn btn-sm btn-secondary me-2">
          <span className='bi bi-pencil-square'></span>
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-sm btn-danger">
          <span className='bi bi-trash3-fill'></span>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
