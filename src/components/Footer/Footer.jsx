import React from 'react';
import styles from './Footer.module.css'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';



const Footer = () => {
    return (
        <div className = {styles.footerStyle}>
        <div >
        <span className = {styles.footerContent}><a href = "#" style={{color:'white'}}>Contact US</a></span>
        <span className = {styles.footerContent}><a href = "#" style={{color:'white'}}>PLAY</a></span>
         </div>
         <div className= {styles.fooerBottom}>
         &copy; we serve the best for you | Designed by Pratik Adagale 
        </div>
        
        </div>
    )
}

export default Footer;