import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Works from './component/Works';
import Contact from './component/Contact';
import Home from './component/Home';
import Skills from './component/Skills';
import { useLenis } from './useLenis'; // ✅ Import global Lenis
import Worksection from './component/Worksection';
import Oneplace from './Oneplace';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Oneplace/>
      </div>
    ),
  },
  
  {
    path: '/works',
    element: (
      <div>
        <Navbar />
        <Worksection/>
      </div>
    ),
  },
  {
    path: '/skills',
    element: (
      <div>
        <Navbar />
        <Skills/>
      </div>
    ),
  },

   {
    path: '/contact',
    element: (
      <div>
        <Navbar />
        <Contact/>
      </div>
    ),
  },


]);

const App = () => {
  useLenis(); // ✅ Apply Lenis globally here

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;