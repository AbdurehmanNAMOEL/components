import React from 'react'
import { Text, View } from './shared/components'
import './styles/card.css'
import Website from '../assets/shortVideos/earth.mp4'
import { FaFolderPlus,FaHeart,FaEye } from 'react-icons/fa'

import { useState } from 'react'
import user from '../assets/user.png'
const Card = ({videoSource,title,id,bgColor}) => {
   
  return (
    <View 
     className='card-container'
     width={'350px'} 
     height={'280px'} 
     color={'#12121200'}
     flexDirection='column'
     >
    <View 
     width='350px'
     height='239px' 
     color='#12121200'
     style={{boxShadow:'none'}}
     >
     
    
      <video 
       src={videoSource} 
       id={id}
       muted='muted' 
       width='350px'
       type="video/mp4"></video>
  

     <div className='card-top' onMouseOver={()=>document.getElementById(id).play()}>
        <span className='title'>{title}</span>
        <FaFolderPlus 
         style={
          {
            width:'25px',
            height:'25px', 
            marginRight:'30px',
            marginBottom:'50px'
            }}/>
        <FaHeart 
         style={{width:'25px',height:'25px', marginRight:'20px' ,marginBottom:'50px'}}/>
     </div>
    </View>
    
    <View 
     className='designer-label'
     width='100%'
     height='60px' 
     color='#12121200'
     style={{boxShadow:'none'}}
     >
      <div className='designer'>
        <img src={user} alt='' width={'100%'} height={'100%'}/>
      </div>
      <Text className='designer-name' color='#121212' style={{color:`${bgColor==='white'?'#121212':'white'}`}}>Abdurehman</Text>
      <div className='like'>
        <FaHeart className='icon' style={{color:`${bgColor==='white'?'#121212':'white'}`}}/>
        <span style={{color:`${bgColor==='white'?'#121212':'white'}`}}>12</span>
      </div>
      <div className='seen'>
        <FaEye className='icon' style={{color:`${bgColor==='white'?'#121212':'white'}`}}/>
         <span style={{color:`${bgColor==='white'?'#121212':'white'}`}}>1.2k</span>
      </div>
    </View>
    </View>
  )
}

export default Card