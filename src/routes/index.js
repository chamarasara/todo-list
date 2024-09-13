import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import NoUserLayout from '../layouts/no_user_layout';
import '../assets/stylesheets/no_user_layout.css';
import '../assets/stylesheets/user_layout.css'; 
import Login from '../pages/login';
import Register from '../pages/register';
import TodoList from '../pages/todo';
import UserLayout from '../layouts/user_layout';
import PrivateRoute from './private_route';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/" element={<NoUserLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/" element={<UserLayout />}>
        <Route path="todos" element={<PrivateRoute element={<TodoList />} />} />
      </Route>
    </Routes>
  );
};

const AppRoutesWithAuth = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default AppRoutesWithAuth;
