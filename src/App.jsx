
import { useState } from 'react';
import './App.css';
import {Button, display, Header, IconsContainer, Text, View} from './components/shared/components';
import SearchInputField from './components/SearchInputField'
import InputField from './components/InputField'
import { Style } from './components/shared/components';
import { Icons } from './utils/iconsList';
import { Cart } from './components/Cart';
import {FaShoppingCart,FaHome,FaWheelchair, FaAmazon, FaAngular} from 'react-icons/fa'
import Selector from './components/Selector';

function App() {
  const [range,setRange] = useState(0)

  return (
  <View width={'100%'} height={'100vh'} style={{display:'flex',gap:'20px'}}>
 {/* <Header textColor='#121212'> */}
      {/* <Selector/>
  
      {/* <Cart/> */}
      {/* <SearchInputField/> */}
         {
          // Icons.map(data=>
          //   <IconsContainer width={'150px'} style={{border:'none',gap:'10px'}}>
          //    {data.icons}
          //   <Text color={'#121212'}>{data.title}</Text>
          // </IconsContainer>)
         }
      {/* </Header> */} 
    
    {/* <View 
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
     </View>  */}
   
   {/* </View> */}

   {/* <div className='container'>
    <div className='icon1'>
      <FaHome style={{color:'cyan'}}/>
    </div>
     <div className='btn1'>
       <FaShoppingCart style={{color:'cyan'}}/>
     </div>
     <div className='btn2'>
       <FaWheelchair style={{color:'cyan'}}/>
     </div>

    
      <div className='icon3'>
     <div className='icon2'>
      <div className='btn4'>
        <FaAmazon/>
      </div>
     </div>
     </div>
     <div className='input'>
      <div className='bar'></div>
     </div>
      <div className='icon5'>
        <FaAngular/>
      </div>
   </div> */}

 {/* <div className='container'>
    <div className='icon1'>H</div>
     <div className='btn1'>B</div>
     <div className='btn2'>C</div>

    
      <div className='icon3'>
     <div className='icon2'>
      <div className='btn4'>B</div>
     </div>
     </div>
     <div className='input'>
      <div className='bar'></div>
     </div>
      <div className='icon5'>F</div>
   </div> */}
   <div className="range-input-container">
    
  <input  
   type={'range'} 
   value={range}
   onChange={(e)=>{setRange(e.target.value)}}/>
   <div 
     className="value-display" 
     style={{marginLeft: `${range}px`,display:`${range> 0 ?'flex':'none'}`}}>{range}</div>
   </div>
 
</View>
  );
}

export default App;
