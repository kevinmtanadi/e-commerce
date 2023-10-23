import React from 'react'
import { SidebarItem } from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

interface Props {
  item: SidebarItem
}

const Item = ({item}: Props) => {
  return (
    <Link to={item.endpoint}>{item.label}</Link>
  )
}

export default Item