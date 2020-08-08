import React, {useState,useEffect} from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Products from '../../components/Products/Products';
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import styles from './Layout.module.css'

const Layout = (props) => {
    const [modalPopUp,setModalPopup] = useState('false');


    // setModalPopup = () => {

    // }
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.contentWrap}>
                <Router>
                    <Header />
                    {/* <Login/> */}

                <Switch>
                    {/* <Route path="/" exact component={Login}/>  */}
                    <Route path="/login" component={Login}/> 
                    <Route path="/registration" component={Register}/> 
                    <Route path="/products" component={Products}/>
                    {/* <Route path="" component={}/>
                    <Route path="" component={}/> */}
                </Switch>
                </Router>
       
            </div>
            <Footer />
        </div>
    )
}

export default Layout;