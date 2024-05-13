import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import Login from './components/Login';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <RouterProvider router={router}>
        <App />
        <Login />
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
