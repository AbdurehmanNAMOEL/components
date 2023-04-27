import styled from "styled-components";

export const View = styled.div`
background-Color:${props=>props.color?props.color:'#121212'};
height:${props=>props.height?props.height:'300px'};
width:${props=>props.width?props.width:'300px'};
color:${props=>props.textColor?props.textColor:'white'};
box-shadow:0px 0px 4px 3px #1212123a;
display:${props=>props.display?props.display:'flex'};
flex-direction:${props=>props.flexDirection?props.flexDirection:'row'};;
`

export const Header = styled.nav`
width:100%;
display:flex;
align-items:center;
height:${props=>props.height?props.height:'60px'};
position:${props=>props.position?props.position:'fixed'};
background-Color:${props=>props.color?props.color:'white'};
color:${props=>props.textColor?props.textColor:'white'};
justify-content:${props=>props.justify?props.justify:'space-around'};
box-shadow:0px 0px 4px 3px #1212123a;
`


export const Text=styled.p`
font-size:${props=>props.fontSize?props.fontSize:'16px'};
color:${props=>props.color?props.color:'white'};;
`

export const Button = styled.button`
border:none;
width:${props=>props.width?props.width:'120px'};
height:${props=>props.height?props.height:'30px'};
border-Radius:5px;
cursor:pointer;
background-Color:${props=>props.color?props.color:'orange'};
font-size:12px;
font-weight:bolder;
color:white;
margin-top:20px;
`


export const Style={
 marginTop:"70px",
 backgroundColor:"#121212",
 alignItems:"center",
 color:"white",
 justifyContent:"center",
 borderRadius:'5px'
}


export const display={
 display:"flex",
 flexDirection:"row",
 gap:"30px",
}




export const IconsContainer=styled.div`
width:${props=>props.width?props.width:'40px'};
height:${props=>props.height?props.height:'40px'};
background-Color:${props=>props.color?props.color:'white'};
display:flex;
align-items:center;
justify-content:flex-start;
color:${props=>props.textColor?props.textColor:'#121212'};
cursor:pointer;
border:solid 1px  #12121241;

&:hover{
    background-color:${props=>props.hoverColor?props.hoverColor:'#333333'};
}

`

export const Before=styled.div`

&:before{
    content:attr(title);
    width:20px;
    height:20px;
    background-Color:red;
    color:white;
    font-weight:bolder;
    display:flex;
    justify-content:center;
    align-item:center;
    border-Radius:100%;
    z-index:200;
    position:absolute;
    margin-left:5px;
    margin-top:-25px;
};
`

export const Image=styled.img`
position:absolute;
width:${props=>props.width?props.width:'40px'};
height:${props=>props.height?props.height:'40px'};
`
export const IconStyle={
width:'15px',
height:'15px',
marginLeft:'20px'
}



export const ClayButton=styled(View)`
    width: ${props=>props.width?props.width:'50px'};
    height: ${props=>props.height?props.height:'50px'};
    box-shadow: 3px 3px 3px black , 
    -1px -1px 1px rgba(255, 255, 255, 0.26),
    inset 20px 20px 20px rgba(20, 20, 20, 0.692),
    inset -10px -10px 10px rgba(17, 17, 17, 0.692) ;
    border-radius: 10px;
    display: flex;
    align-items:center;
    justify-content: center;
    color: aqua;
    cursor: pointer;
 
    `