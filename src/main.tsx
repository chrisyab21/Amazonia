import React from 'react'
import ReactDOM from 'react-dom/client'
//import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import { routes } from './router/Routes';
import './index.css'
import { HomePage } from './pages/HomePage'


//const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>,
)
