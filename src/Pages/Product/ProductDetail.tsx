import { VStack, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import asus from "../../assets/rog_strix.jpeg"
import Rating from '../../Components/Rating'
import Money from '../../Components/Money'
import ProductDescription from '../../Components/Product/ProductDescription'

interface Props {
    product: any
}

const ProductDetail = ({product}: Props) => {
  return (
    <VStack alignItems={'start'}>
        <Image src={asus} />
        <Heading>{product.name}</Heading>
        <Rating rating={product.rating} />
        <Money value={product.price} />
        <ProductDescription description={product.description} length={200}/>
    </VStack>
  )
}

export default ProductDetail