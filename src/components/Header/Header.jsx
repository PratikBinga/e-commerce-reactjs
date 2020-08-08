import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import style from './Header.module.css';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';



const Footer = () => {
  const [openLoginModal,setopenLoginModal] = useState('false');
    const openLoginModalPopUp = () => {
        alert('login button clicked');
        
        setopenLoginModal('true');
        
    }

    console.log(openLoginModal,'openLoginModal outside')

    return (
        <div className={style.headerContainer}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant = "h5">
                    <Link to = "/">
                        Your Store.
                    </Link>
                    </Typography>
                   
                    <div className={style.loginRegisterLink}>
                        <ul>
                            <li>
                                <Link to="/Login">
                                    Login.
                                </Link>
                            </li>
                            <li>
                                <Link to="/registration">
                                    Register.
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* </Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer;