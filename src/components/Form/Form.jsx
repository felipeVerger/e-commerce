import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import FileBase from 'react-file-base64';
import { FormContainer, FormWrapper, Title,FormCom, Label, Input, Button } from './FormStyles';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    date: '',
    image: ''
  })
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    clear();
  }

  const clear = () => {
    setFormData({name: '', description: '', price: '', date: '', image: ''})
  }

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Register your product</Title>
        <FormCom onSubmit={handleSubmit}>
          <Label htmlFor="name">
            Name
            <Input type="text" id='name' name='name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
          </Label>
          <Label htmlFor="description">
            Description
            <Input type="text" id='description' name='description' value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}/>
          </Label>
          <Label htmlFor="price">
            Price
            <Input type="number" id='price' name='price' value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})}/>
          </Label>
          <Label htmlFor="date">
            Date 
            <Input type="date" id='date' name='date' value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}/>
          </Label>
          <FileBase type='file' multiple={false} value={formData.image} onDone={({base64}) => setFormData({...formData, image: base64 })}/>
          <Button type='submit'>Submit</Button>
          <Button onClick={clear}>Clear</Button>
        </FormCom>
      </FormWrapper>
    </FormContainer>
  )
}

export default Form