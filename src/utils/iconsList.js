import {FaShoppingCart,FaHome,FaUserFriends,FaBars} from 'react-icons/fa'
import { IconStyle } from '../components/shared/components'
import ThreeDMax from '../assets/icons/3dmax.png'
import Illustrator from '../assets/icons/adobe-illustrator.png'
import Blender from '../assets/icons/blender.png'
import PhotoShop from '../assets/icons/Photoshop.png'
import Revit from '../assets/icons/revit.png'
import Sketch from '../assets/icons/Sketch.png'
import Vray from '../assets/icons/Vray.png'
import earth from '../assets/shortVideos/earth.mp4'
import earth2 from '../assets/shortVideos/earth2.mp4'
import website1 from '../assets/shortVideos/webstite1.mp4'
import website2 from '../assets/shortVideos/website2.mp4'
import website3 from '../assets/shortVideos/website3.mp4'
import website4 from '../assets/shortVideos/website4.mp4'
import website5 from '../assets/shortVideos/website5.mp4'
import website6 from '../assets/shortVideos/website3.mp4'
import mobile1 from '../assets/shortVideos/mobile1.mp4';
export const Icons=[
    {"title":"All","icons":<FaBars style={IconStyle}/>},
    {"title":"Home","icons":<FaHome style={IconStyle}/>},
    {"title":"AboutUs","icons":<FaUserFriends style={IconStyle}/>},
    {"title":"shopping","icons":<FaShoppingCart style={IconStyle}/>},
    {"title":"ContactUs","icons":<FaShoppingCart style={IconStyle}/>},
    {"title":"Home","icons":<FaHome style={IconStyle}/>},
    {"title":"AboutUs","icons":<FaUserFriends style={IconStyle}/>},
    {"title":"shopping","icons":<FaShoppingCart style={IconStyle}/>},
  
]

export const Icons2=[
    {"title":"Home","icons":<FaHome style={IconStyle}/>},
    {"title":"AboutUs","icons":<FaUserFriends style={IconStyle}/>},
    {"title":"shopping","icons":<FaShoppingCart style={IconStyle}/>},  
]


export const Icons3=[
    {"title":"Illustrator","icons":<img src={Illustrator} style={IconStyle} alt=''/>},
    {"title":"PhotoShop","icons":<img src={PhotoShop} style={IconStyle} alt=''/>},
    {"title":"Blender","icons":<img src={Blender} style={IconStyle} alt=''/>},
    {"title":"3DMax","icons":<img src={ThreeDMax} style={IconStyle} alt=''/>},  
]

export const cardData=[
    {'id':'1','title':'SolarSystem','src':earth},
    {'id':'2','title':'FirstWebsite','src':website1},
    {'id':'3','title':'SecondWebsite','src':website2},
    {'id':'4','title':'ThirdWebsite','src':website3},
    {'id':'5','title':'FourthWebsite','src':website4},
    {'id':'6','title':'Mobile Design','src':mobile1},
    {'id':'7','title':'Solar system','src':earth2},
    {'id':'8','title':'FifthWebsite','src':website5},
    {'id':'9','title':'SixthWebsite','src':website6},
    
]