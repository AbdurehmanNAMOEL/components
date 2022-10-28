
import { useState } from 'react';
import './App.css';
import {Button, display, Header, IconsContainer, Text, View} from './components/shared/components';
import SearchInputField from './components/SearchInputField'
import InputField from './components/InputField'
import { Style } from './components/shared/components';
import { Icons } from './utils/iconsList';
import { Cart } from './components/Cart';
import {FaShoppingCart} from 'react-icons/fa'
import Selector from './components/Selector';
function App() {

  return (
  <View width={'100%'} height={'100vh'}>
 <Header textColor='#121212'>
      <Selector/>
      <div>Logo</div>
      <Cart/>
      <SearchInputField/>
         {
          Icons.map(data=>
            <IconsContainer width={'150px'} style={{border:'none',gap:'10px'}}>
             {data.icons}
            <Text color={'#121212'}>{data.title}</Text>
          </IconsContainer>)
         }
      </Header>
    
    <View 
     width={'100%'} 
     color={'white'} 
     height={'960px'} 
     style={display}>
     <View 
      color='white' 
      textColor={'#121212'} 
      style={Style}
      width={'350px'}
      height={'350px'}
       flexDirection={'column'}
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
