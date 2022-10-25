
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

function App() {
  const [email,setEmail]= useState('')
  return (
    <div className="App">
      <InputField 
       type='email' 
       placeholder={'Enter Email'} 
       title='Email'
       setValue={setEmail}
       value ={email}
       name='email'
       error={'valid email is required'}
       width={'200px'}
       />
    </div>
  );
}

export default App;
