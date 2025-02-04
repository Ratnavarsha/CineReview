import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import CreateReview from './components/CreateReview';
import LogIn from './components/LogIn';
import Register from './components/Register'
import Home from './components/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const routes=createBrowserRouter([{
  path: '/',
  element: <LogIn/>
},
{
  path:'/Register',
  element: <Register/>

},
{
  path:'/Home',
  element:<Home />
},
{
  path:'/post',
  element:<CreateReview />
},
])
const App = () => {
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App