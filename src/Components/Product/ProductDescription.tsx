import { Button, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

interface Props {
    description: string,
    length: number
}

const ProductDescription = ({description, length}: Props) => {

    const [isShorten, setIsShorten] = useState(true);

    const shortenString = (str: string, num: number) => {
      if (str.length > num) {
        return str.slice(0, num) + '...';
      }
      return str;
    }

    const text = isShorten ? shortenString(description, length) : description;
    const lines = text.split('\n');
    

    return (
        <VStack alignItems={'start'}>
            {lines.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    {index !== lines.length - 1 && <br />
                    }
                </React.Fragment>
            ))}
            <Button onClick={() => setIsShorten(!isShorten)}>{isShorten ? 'Read More' : 'Read Less'}</Button>
        </VStack>
    )
}

export default ProductDescription