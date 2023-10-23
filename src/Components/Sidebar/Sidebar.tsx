import { VStack } from '@chakra-ui/react';
import React from 'react'
import { IconType } from 'react-icons'
import Item from './Item';

export interface SidebarItem {
  label: string;
  endpoint: string;
  icon?: IconType; 
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Home",
    endpoint: "/"
  },
  {
    label: "Product",
    endpoint: "/product"
  },
  {
    label: "Store",
    endpoint: "/store"
  }
]

const Sidebar = () => {
  return (
  <VStack alignItems={'start'} maxW={"150px"}>
    {sidebarItems.map((item, index) => (
        <Item key={index} item={item} />
    ))}
  </VStack>
  )
}

export default Sidebar