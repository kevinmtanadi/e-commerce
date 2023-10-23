import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Product from './Pages/Product/Product'
import Store from './Pages/Store/Store'
import Navbar from './Components/Navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div />,
  },
  {
    path:"/product/:product_id",
    element: <Product />,
  },
  {
    path:"/store/:store_id",
    element: <Store />,
  },
])

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
