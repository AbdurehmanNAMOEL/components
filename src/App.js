
import { useState } from 'react';
import './App.css';
import {Button, display, Header, Text, View} from './components/shared/components';
import SearchInputField from './components/SearchInputField'
import InputField from './components/InputField'
import { Style } from './components/shared/components';
function App() {
  return (
    <View width={'100%'} height={'100vh'}>
      <Header textColor='#121212'>
       <div>Logo</div>
        <SearchInputField/>
        <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        </ul>
      </Header>
    <View 
     width={'100%'} 
     color={'red'} 
     height={'960px'} 
     style={display}>
     <View 
      color='white' 
      textColor={'#121212'} 
      style={Style}
      width={'350px'}
      height={'350px'}
      >
      <Text color={'white'} fontSize={'16px'}>LogIn</Text>
      <InputField 
        type={'text'} 
        title={'Email'}
        name={'email'} 
        width={'250px'} 
        placeholder={'Enter your Email'}
      />
      <InputField 
        type={'password'} 
        title={'Password'} 
        width={'250px'} 
        placeholder={'Enter your password'}
      />
       <Button 
        width={'200px'} 
        height={'35px'} >Hello</Button>
     </View>
   
   </View>
</View>
  );
}

export default App;
