
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



// Pages being imported

import Error from './pages/Error';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

 
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: 'about',
        element: <About />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'contact',
        element: <Contact />,
        },
       
      ],
    },
  ]);
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);