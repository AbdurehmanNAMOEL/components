import React, { useState } from 'react'
import { Icons } from '../utils/iconsList'
import { IconsContainer, Text, View } from './shared/components'
import './styles/sidebar.css'
 let isNavBarClicked=false
export const SideBar = ({bgColor}) => {

  const [width,setWidth]=useState(50)
 
  const handleNavBar=()=>{
    isNavBarClicked=!isNavBarClicked
    if(isNavBarClicked){
      setWidth(150)
    }else setWidth(50)
  }
  return (
    <View 
     className='side-bar-container' 
     color={bgColor==='white'?'#121212':bgColor} 
     width={`${width}px`} 
     height={'410px'}
     flexDirection={'column'}
     >
    {
      Icons.map(data=>
        <IconsContainer 
          className='side-bar-icons' 
          onClick={data.title==='All'?handleNavBar:null}  
          color={bgColor} 
          textColor={bgColor==='white'?'#121212':'white'}
          flexPosition={`${width===50?'center':'flex-start'}`} 
          width={`${width}px`} 
          height='50px' 
          style={{gap:'10px'}}>
          {data.icons}
          {width===150?<Text color={bgColor==='white'?'#121212':'white'}>{data.title}</Text>:''}
        </IconsContainer>
      )
    }
    </View>
  )
}
