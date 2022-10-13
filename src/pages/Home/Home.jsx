import React, {useEffect} from 'react'
import { HomeContainer } from './HomeStyles';
import { useDispatch } from 'react-redux';
import {getProducts} from '../../redux/actions/products';

import Products from '../../components/Products/Products';
import Form from '../../components/Form/Form';

const Home = () => {
  const dispatch = useDispatch();

  // when the component is mounted we fetch the data of the products to be available in products component
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <HomeContainer>
      <Products/>
      <Form/>
    </HomeContainer>
  )
}

export default Home