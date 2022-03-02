import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const Card = (props: any) => {
  const { imageUrl, name, price, handleAddToCart } = props;
  
  return (
    <Box maxW="sm" maxH="sm" borderRadius="lg" borderWidth="1px" className="container-product">
      <Image className="image-product" src={imageUrl} alt="imageProduct" />
      <Box p="4">
        <Text>{name}</Text>
        <Text>Rp.{price}</Text>
        <Button colorScheme='blue' onClick={handleAddToCart}>Add to cart</Button>
      </Box>
    </Box>
  )
}

export default Card