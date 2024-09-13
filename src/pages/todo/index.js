import React, { useState } from 'react';
import { useTodos } from '../../contexts/TodoContext';
import AddEditTodoModal from './components/add_todo';
import { Button } from 'react-bootstrap';
import TodoItem from './components/todo_item';

const TodoList = () => {
    const { todos, deleteTodo, toggleCompletion } = useTodos();
    const [showModal, setShowModal] = useState(false);
    const [todoToEdit, setTodoToEdit] = useState(null);

    const handleCloseModal = () => {
        setShowModal(false);
        setTodoToEdit(null);
    };

    const handleShowModal = (todo) => {
        setTodoToEdit(todo);
        setShowModal(true);
    };

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center">
                <div></div>
                <Button onClick={() => handleShowModal(null)} className="float-end mb-3">
                    Add Todo
                </Button>
            </div>
            {todos.length === 0 ? (
                <p>No todos available. Please add some!</p>
            ) : (
                <ul className="list-group">
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleCompletion={toggleCompletion}
                            handleShowModal={handleShowModal}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </ul>

            )}

            <AddEditTodoModal
                show={showModal}
                handleClose={handleCloseModal}
                todoToEdit={todoToEdit}
            />
        </div>
    );
};

export default TodoList;
