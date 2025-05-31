import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        id: 'homeData',
        loader: () => fetch('http://localhost:3000/coffees'),
        element: <Home />
      },
      {
        path: '/addCoffee',
        element: <AddCoffee />,
      },
      {
        path: '/updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <UpdateCoffee />,
      },
      {
        path: 'coffee/:id',
        element: <CoffeeDetails />

      },
      {
        path:'signIn',
        element:<SignIn/>
      },
      {
        path:'signUp',
        element:<SignUp/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
