
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import SearchInputField from './components/SearchInputField';

function App() {
  const [email,setEmail]= useState('')
  return (
    <div className="App">
      <SearchInputField/>
    </div>
  );
}

export default App;
