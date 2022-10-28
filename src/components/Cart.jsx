import React from 'react'
import {View} from './shared/components'
import { IconsContainer,Before } from './shared/components'
import {FaShoppingCart} from 'react-icons/fa'
export const Cart = () => {

 const cartIconStyle={
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

 }

  return (
   <IconsContainer style={cartIconStyle} >
        <FaShoppingCart width={'25px'} height={'25px'}/>
        <Before title={'0'}/>
   </IconsContainer>
      
  )
}
