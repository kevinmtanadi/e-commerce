import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar'

const Layout = () => {
  return (
    <Grid templateAreas={`"nav nav" "side main"`}>
        <GridItem area={"nav"}>
            <Navbar />
        </GridItem>
        <GridItem area={"side"}>
            <Sidebar />
        </GridItem>
        <GridItem area={"main"}>
            <Outlet />
        </GridItem>
    </Grid>
  )
}

export default Layout