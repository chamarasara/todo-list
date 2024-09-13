import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useTodos } from '../../../contexts/TodoContext';

const AddEditTodoModal = ({ show, handleClose, todoToEdit }) => {
  const { addTodo, updateTodo } = useTodos(); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDescription(todoToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [todoToEdit]);

  const handleSave = () => {
    if (todoToEdit) {
      updateTodo({
        ...todoToEdit,
        title,
        description,
      });
    } else {
      addTodo({
        id: Date.now(),
        title,
        description,
        completed: false,
      });
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{todoToEdit ? 'Edit Todo' : 'Add Todo'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditTodoModal;
