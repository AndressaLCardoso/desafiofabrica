import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import ZooPage from './routes/Zoo.page';
import ZooGaleryPage from './routes/ZooGalery.page';
import Navbar from './components/Navbar';
import HomePage from './routes/Home.page';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <ZooPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/animals",
        element: <ZooGaleryPage />
      }
    ],
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
