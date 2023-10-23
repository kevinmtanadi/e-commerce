import { HStack, Icon, Box } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'


interface Props {
    rating: number
}
const Rating = ({rating}: Props) => {
  return (
    <HStack alignContent={'center'}>
        <Icon fontSize={"1.25rem"} as={AiFillStar} color={'orange'}  />
        <Box fontWeight={"bold"}>{rating}</Box>
    </HStack>
    )
}

export default Rating