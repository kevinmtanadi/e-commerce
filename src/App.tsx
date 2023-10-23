import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Product from './Pages/Product/Product'
import Store from './Pages/Store/Store'
import Navbar from './Components/Navbar'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Sidebar from './Components/Sidebar/Sidebar'
import Layout from './Layout'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="product" element={<Product />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
