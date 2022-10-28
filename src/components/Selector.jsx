import React from 'react'
import { View,IconsContainer,Text } from './shared/components'
import { Icons } from '../utils/iconsList'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
const Selector = () => {
  const [isListed,setList] = useState(false)
  const handleList=()=>{
    setList(!isListed)
  }

  return (
    <View 
    width={'150px'} 
    height={`${isListed?'250px':'40px'}`} 
    color={'white'}
    style={{marginTop:'200px',overflow:`${isListed?'':'hidden'}`,transition:'all 0.5s'}}
    flexDirection={'column'}
    >
    <IconsContainer 
    width={'150px'} 
    style={{border:'none',gap:'20px'}}
    onClick={handleList}
    >
    <FaBars style={{marginLeft:'30px'}}/>
    <Text color='#121212'>List</Text>
    </IconsContainer>
   {  Icons.map(data=>
            <IconsContainer 
             width={'150px'} 
             style={{border:'none',gap:'20px'}}>
             {data.icons}
            <Text color={'#121212'}>{data.title}</Text>
          </IconsContainer>)
  }
    </View>
  )
}

export default Selector