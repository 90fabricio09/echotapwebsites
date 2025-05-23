import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import FabricioBettarello from './pages/FabricioBettarello.jsx';
import DanielFilgueira from './pages/DanielFilgueira.jsx';
import HbFretamento from './pages/HbFretamento.jsx';
import NotFound from './pages/NotFound.jsx'

import './css/home.css';
import './css/notfound.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {path:"/fabriciobettarello", element: <FabricioBettarello /> },
      {path:"/danielfilgueira", element: <DanielFilgueira /> },
      {path:"/hbfretamento", element: <HbFretamento /> },
      {path:"*",
        element: <NotFound />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);