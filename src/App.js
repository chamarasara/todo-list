import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TodoProvider } from './contexts/TodoContext';
import AppRoutesWithAuth from './routes';

const App = () => {
  return (
    <Router>
      <ToastContainer
        transition={Slide}
        hideProgressBar={true}
        autoClose={5000}
        limit={3}
      />
      <TodoProvider>
        <AppRoutesWithAuth />
      </TodoProvider>
    </Router>
  );
};

export default App;
