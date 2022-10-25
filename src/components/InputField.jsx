import { useState } from 'react'
import './styles/inputField.css'
import { pattern } from '../utils/verifier'
const InputField = ({title,type,placeholder,error,setValue,value,name,id,width}) => {

const [isValid,setValid] = useState(false)
const [isEmpity,setEmpty] = useState()

const validate = (field,regex)=>{
      let inputValue = field.value
      if(!regex.test(inputValue)){
      if(inputValue !== ''){setEmpty(error)
      }else if(inputValue===''){setEmpty('input is required')}
      setValid(true)
   }else setValid(false)
  }
  
const handleInput =(e)=>{
    validate(e.target,pattern[e.target.attributes.name.value])
    setValue(e.target.value)
        
}
  return (
    <div  className='input-field-Container'  style={{width:width}}>
        <span className='input-title'>{title}</span>
        <input 
        type={type} 
        placeholder={placeholder}
        onChange={handleInput}
        value={value}  
        name={name}
        id={id}
          />
        {isValid ?<span className='input-error'>{isEmpity}</span>:''} 
    </div>
  )
}

export default InputField