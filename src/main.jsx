import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import FeedBack from './components/FeedBack/FeedBack.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: () => fetch('/gadgetsData.json')
      },
      {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgetsData.json')
      },
      {
        path: 'feedback',
        element: <FeedBack></FeedBack>

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </StrictMode>,
)
