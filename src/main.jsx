import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductList from './components/Product/ProductList.jsx'
import Form from './components/Form/Form.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList/>,
  },
  {
    path:"form",
    element:<Form/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
 
)
