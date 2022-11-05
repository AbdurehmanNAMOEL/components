import React from 'react'
import { ClayButton, View } from './shared/components'
import './styles/claycal.css'
const ClayCalculator = () => {
  const array=['/','C','CE','+','7','8','9','*','6','5','5','-','3','2','1','+','0','.','=','/']
  return (
   <div className='cal-container'>
    <View  className='val-display'
    width={'100%'} 
    height={'150px'} 
    color={'white'} 
   
  />
    <View className='button-container'
    display={'grid'}
    width={'100%'} 
    height={'450px'}>{
        array.map(name=><ClayButton className='clay-btn' width={'70px'} height={'70px'}>{name}</ClayButton>)
    }
       
    </View>
   </div>
  )
}

export default ClayCalculator