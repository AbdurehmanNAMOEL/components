import './styles/search.css'
import {FaSearch} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import { useState,useEffect } from 'react';
const SearchInputField = () => {
  const [isSearching,setSearch]=useState(false)
  const [width,setWidth]=useState(30)
  
  useEffect(()=>{
    if(isSearching){
        setWidth(400)
    }else setWidth(30)
  },[width,isSearching])
  return (
    <div style={{width:`${width}px`,transition:'all 0.5s'}} className='search-container'>
     {isSearching ? 
      <input 
      type="text"
      autoFocus 
      placeholder={'Enter your search word here'} />:''
      }
     {isSearching ?
      <FaTimes className='icon' onClick={()=>setSearch(false)}/>:
      <FaSearch className='icon' onClick={()=>setSearch(true)}/>}
    </div>
  )
}

export default SearchInputField