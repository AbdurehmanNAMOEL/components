import React from 'react'
import { View,IconsContainer,Text } from './shared/components'
import { Icons } from '../utils/iconsList'
import {FaBars,FaGreaterThan} from 'react-icons/fa'
import { useState } from 'react'
import {IconStyle }from './shared/components'

const Selector = () => {
  const [isListed,setList] = useState(false)
  const [angle,setAngle]=useState(270)
  const [opition,setOpition] =useState([{"title":"All","icons":<FaBars style={IconStyle}/>}])

const handleList=()=>{
    setList(!isListed)
    setAngle(90)
}

const handleListClicked=(e)=>{
 setOpition(Icons.filter(item=>item.title === e.target.outerText))
 setList(false)
}


  return (
    <View 
    width={'200px'} 
    height='40px' 
    color={'white'}
    style={{
        transition:'all 0.5s',
        boxShadow:'none',
        border:'solid 2px #1212123f',
        borderRadius:'20px'
    }}
    flexDirection={'column'}
    >
    {opition.map(data=>
    <IconsContainer 
    width={'200px'} 
    style={{border:'none',gap:'20px',borderRadius:'20px'}}
    onClick={handleList}
    >
    {data?.icons}
    <Text color='#121212'>{data.title?data.title:'List'}</Text>
    <FaGreaterThan style={{transform:`rotateZ(${isListed?90:270}deg)`,color:'#12121273'}}/>
    </IconsContainer>)}
    <View 
     width={'auto'} 
     height={'auto'} 
     style={{marginTop:'10px', display:`${isListed?'block':'none'}` }} 
     flexDirection={'column'}
     >
     { Icons.map(data=>
            <IconsContainer 
             key={data.title}
             onClick={handleListClicked}
             name={data.title}
             width={'200px'} 
             style={{border:'none',gap:'20px'}}>
             {data.icons}
            <Text color={'#121212'}>{data.title}</Text>
          </IconsContainer>)
  }
  </View>
    </View>
  )
}

export default Selector