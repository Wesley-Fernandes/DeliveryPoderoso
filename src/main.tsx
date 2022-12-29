import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import {routes} from "./Router"
import React from 'react'
import './main.sass'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)
