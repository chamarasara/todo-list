import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);


  const login = (email) => {
    const mockUser = { email: email, name: 'User' };
    setUser(mockUser);
    toast.success('Login Successful!');
    navigate('/todos');
  };


  const register = (name, email) => {
    const newUser = { name, email };
    setUser(newUser);
    toast.success('Registered Successfully!');
    navigate('/todos');
  };


  const logout = () => {
    setUser(null); 
    localStorage.removeItem('user'); 
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
