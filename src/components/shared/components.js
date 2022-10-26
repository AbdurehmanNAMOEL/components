import styled from "styled-components";

export const View = styled.div`
background-Color:${props=>props.color?props.color:'#121212'};
height:${props=>props.height?props.height:'300px'};
width:${props=>props.width?props.width:'300px'};
color:${props=>props.textColor?props.textColor:'white'};
box-shadow:0px 0px 4px 3px #1212123a;
display:flex;
flex-direction:column;
`

export const Header = styled.nav`
width:100%;
display:flex;
align-items:center;
height:${props=>props.height?props.height:'60px'};
position:${props=>props.position?props.position:'fixed'};
background-Color:${props=>props.color?props.color:'white'};
color:${props=>props.textColor?props.textColor:'white'};
justify-content:${props=>props.justify?props.justify:'space-between'};
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
