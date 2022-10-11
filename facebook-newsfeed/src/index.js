import React from 'react';
import ReactDOM from 'react-dom/client';
import Post from './components/post.component';
import "bootstrap/dist/css/bootstrap.css";
import './post.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Post />
  </React.StrictMode>
);

