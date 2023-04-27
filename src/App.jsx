
import { useEffect, useState } from 'react';
import './App.css';
import {Button, display, Header, IconsContainer, Text, View} from './components/shared/components';
import SearchInputField from './components/SearchInputField'
import InputField from './components/InputField'
import { Style } from './components/shared/components';
import { cardData, Icons, Icons2 } from './utils/iconsList';
import { Cart } from './components/Cart';
import {FaShoppingCart,FaHome,FaWheelchair, FaAmazon, FaAngular} from 'react-icons/fa'
import Selector from './components/Selector';
import ClayCalculator from './components/ClayCalculator';
import AnimatedNavBar from './components/AnimatedNavBar';
import { SideBar } from './components/SideBar';
import earth from './assets/shortVideos/earth.mp4'
import Card from './components/Card';
 let radius=0
function App() {
  const [range,setRange] = useState(0)
  const [width,setWidth] = useState(0)
  const [height,setHeight] = useState(0)
  let [count,setCount] = useState(470)
  const [angle,setAngle]=useState(0)
  const [bgColor,setBgColor]=useState('white')
 

  const handleRadial=(e)=>{
    console.log(e.clientY,e.clientX);
    if(e.clientY>=295 && e.clientX===399) {
      setAngle(0)
      setCount(470)
     }else if(e.clientY===297 || e.clientX===411){
      setAngle(10)
      setCount(452)
    }else if(e.clientY===303 || e.clientX===421){
      setAngle(20)
      setCount(432)
    }else if(e.clientY===308 || e.clientX===434 ){
      setAngle(30)
      setCount(422)
    }else if(e.clientY===321 || e.clientX===447 ){
      setAngle(50)
      setCount(412)
    }else if(e.clientY===333 || e.clientX===453 ){
      setAngle(70)
      setCount(392)
    }else if(e.clientY===352 || e.clientX===456 ){
      setAngle(90)
      setCount(365)
    }
     
    
      
    //  setInterval(()=>{
    //    if(count>=12){
    //     setCount(count=count-10)}
    
    // },500)
  
  }


  const handleMouse=(e)=>{
    console.log('hello');
    setAngle(e.target.value)
   
  }
  
  var time;
  const handleInterval=()=>{
  if(radius<4000){
    console.log(radius);
    time=setInterval(handleBbColor,100)
  }else if(radius>4000){
      clearInterval(time)
      radius=0;
      setWidth(0)
      setHeight(0)
    }
  }
  const handleBbColor=()=>{
     setWidth(radius)
     setHeight(radius) 
    radius+=200
  }
 
 useEffect(()=>{
  if(radius===3200){
  if(bgColor==='#121212'){
      setBgColor('white')
    }else setBgColor('#121212')
  }
 },[radius])
  return (
  <View width={'100%'} height={'200vh'} style={{display:'flex',gap:'20px',zIndex:1000}} color={bgColor}>
   <Header textColor='#121212'>
      <Text fontSize={'xx-large'} color={'#121212'} className='logo'>Ethio<em>Graphics</em></Text>
        <Selector style={{border:"none"}}/>
      {/* <SearchInputField/> */}
         {
          Icons2.map(data=>
            <IconsContainer width={'150px'} style={{border:'none',gap:'10px'}}>
             {data.icons}
            <Text color={'#121212'}>{data.title}</Text>
          </IconsContainer>)
         }
         <Cart/>
     </Header>
   
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
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{strokeDasharray:'472',strokeDashoffset:`${count}`}}>
          
         </circle>
 </svg>
<div onMouseMove={handleRadial} className='btn4'>
  <div className="radius" style={{transform:`rotateZ(${angle}deg)`}}></div>
</div>
      
     </div>
     </div>
     <div className='input'>
      <div className='bar'></div>
     </div>
      <div className='icon5'>F</div>
   </div> 
   <div className="range-input-container">
    
  <input  
   type={'range'} 
   value={range}
   onChange={(e)=>{setRange(e.target.value)}}/>
   <div 
     className="value-display" 
     style={{marginLeft: `${range}px`,display:`${range> 0 ?'flex':'none'}`}}>{range}</div>
   </div>
 


  <div className="circle" 
  style={{height:`${height}px`,width:`${width}px`,backgroundColor:'orange',borderRadius:'10px'}}>
    
  </div>

  <ClayCalculator/>

  <AnimatedNavBar/> */}
  <View 
   className='background-convertor'
   width={`${width}px`} 
   height={`${height}px`} 
   
   style={
  {
    position:'absolute',
    zIndex:10,
    borderRadius:'100%',
    marginLeft:`-${width/2}px`,
    marginTop:`-${width/2}px`,
    backgroundColor:`${bgColor==='#121212'?'white':"#121212"}`,
    display:`${width>=3000?'none':'block'}`
  
  }} 
   />
    <IconsContainer 
      onClick={handleInterval} 
      style={
        {
          justifyContent:'center',
          borderRadius:'100%',
          zIndex:200,
          marginTop:'600px',
          position:'fixed'
        }}>
     <FaShoppingCart/>
    </IconsContainer>
<View width='50px' style={{marginTop:'100px',marginLeft:'10px',position:'fixed'}}>
<SideBar className='nav-bar' bgColor={bgColor}/>
</View>

{/* <SideBar bgColor={bgColor}/>
<SideBar/> */}


<div className='bg-card-container'>
{
  cardData.map(data=>
  <Card 
   bgColor={bgColor}
   key={data.id}
   videoSource={data.src}
   title={data.title}
   id={data.id}
   />
  )
}
</div>
</View>
  );
}

export default App;
