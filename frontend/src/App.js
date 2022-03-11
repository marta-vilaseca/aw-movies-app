import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

import AuthenticationProvider from "./AuthProvider";
import RequireAuth from "./RequireAuth";

function App() {
    return (
    <>
      <AuthenticationProvider>
        <Router>
          <Header />
          <Navigation />
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />  
           <Route path="/register" element={<Register />} /> 
           <Route
              path="/favorites"
              element={
                <RequireAuth>
                  <Favorites />
                </RequireAuth>
              }
            />
           <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthenticationProvider>
    </>
  )
}

export default App;