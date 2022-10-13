import React from 'react'
import { ProductWrapper, Image, ProductBlock, Name, Description, ProductDetail, Price, Date, DeleteButton, EditButton } from './ProductStyle';

const Product = ({ product }) => {

  const description = product.description.length > 80 ? product.description.slice(0, 80) + '...' : product.description;

  return (
    <ProductWrapper>
      <Image src={product.image} alt="" />
      <ProductBlock>
        <Name>{product.name}</Name>
        <Description>{description}</Description>
      </ProductBlock>
      <ProductDetail>
        <Price>{`$${product.price}`}</Price>
        <Date>{product.date}</Date>
      </ProductDetail>
      <DeleteButton>Delete</DeleteButton>
      <EditButton/>
    </ProductWrapper>
  )
}

export default Product