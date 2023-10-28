import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import Home from './pages/home/';
import Contact from './pages/contact/';
import NotFound from './pages/not_found/';
import News from './pages/news/';
import Post from './pages/post/';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<Post />} />
        <Route path='*' element={<NotFound />} />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

