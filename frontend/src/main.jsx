import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './components/Header/Header.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Hero from './components/heroSection/Hero.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {
      path: "/Home",
      element: [<Header/>,<Hero/>]
      
    },
    {
      path: "/Contacts",
      element: <Contacts/>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
