import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import logo from "../../Assets/logo.png"
import "./Home.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Home() {
  return (
    <div>
        <NavBar />
        <Hero />
        <div className='home-logo-container'>
            <img className='home-logo' src={logo} alt='tanzeel-ki-diary'/>
        </div>
        <div className='social-handle-container'>
            <a href='https://www.linkedin.com/in/tanzeel-ansari-2a1327237/' target='_blank'><LinkedInIcon sx={{fontSize: 35}}/></a>
            <a href='https://wa.me/qr/LMAMGKWNO2QEO1' target='_blank'><WhatsAppIcon sx={{fontSize: 35}}/></a>
            <a href='https://www.instagram.com/tanzeel_18.12/' target='_blank'><InstagramIcon sx={{fontSize: 35}}/></a>
            <a href='https://www.facebook.com/shamsh.tanzeel.3' target='_blank'><FacebookIcon sx={{fontSize: 35}}/></a>
        </div>
        <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Connect with me <ArrowUpwardIcon/></p>
    </div>
  )
}

export default Home