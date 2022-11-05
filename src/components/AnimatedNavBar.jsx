
import { useState } from 'react'
import './styles/animatedbar.css'
import {FaHome,FaPlus,FaUser} from 'react-icons/fa'
function AnimatedNavBar() {
    const [position,setPosition]=useState(-200)
     const [icon,setIcon]=useState(<FaHome/>)
    const handleTransition=(e)=>{
        e.stopPropagation()
        console.log(e.target);
      if(e.target.name==='home'){
        setPosition(-200)
        setIcon(<FaHome/>)
      }else if(e.target.name==='plus'){
        setPosition(10)
        setIcon(<FaPlus/>)
      }else if(e.target.name==='user'){
        setPosition(200)
        setIcon(<FaUser/>)
      }
    }
   
  return (
    <div className='anime-container'>
        <div style={{marginLeft:`${position}px`}} className="box" id='top-circle'>
            <div className="box" id='bottom'>{icon}</div>
        </div> 
        <button onClick={handleTransition} name='home' className="box">
            <FaHome/>
        </button>
        <button onClick={handleTransition} name='plus' className="box">
            <FaPlus/>
        </button>
        <button onClick={handleTransition} name='user' className="box">
            <FaUser/>
        </button>
    </div>
  )
}

export default AnimatedNavBar