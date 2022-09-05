import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Header from './header/Header';
import reportWebVitals from './reportWebVitals';
import Book from './book/book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/book" element={<Book/>}/>
      </Routes>
    </BrowserRouter>
);


reportWebVitals();
