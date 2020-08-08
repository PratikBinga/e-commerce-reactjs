import React, { useState,useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import styles from './Login.module.css'

const Login = () =>  {
    

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const [open,setOpen] = useState(false);
  
   const setUsernameHandler = event => {
        setUsername(event.target.value)
    }
    const setPasswordHandler = event => {
        setPassword(event.target.value);
    }
  
    const signIn = () => {
      if (username === "pratik" && password === "password") {
          setOpen(true);
          setMessage( "You have successfully Logged In!")
      } else {
        setOpen(true);
        setMessage( "Incorrect Username or Password!");
      }
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  
    
      return (
        <div className={styles.App}>
          <div className={styles.Appheader}>
            <div className={styles.Login}>
              <TextField
                variant="standard"
                placeholder="Username"
                margin="normal"
                required
                onChange={setUsernameHandler}
                value={username}
              />
              <TextField
                variant="standard"
                placeholder="Password"
                margin="normal"
                required
                type="password"
                onChange={setPasswordHandler}
                value={password}
              />
  
              <div className={styles.Button}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    signIn();
                  }}
                >
                  Log In
                </Button>
              </div>
                <div>
                    <Typography>
                              <Link href="#"  variant="body2">
                                  {'Forgot password'}
                              </Link>
                    </Typography>
                </div>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Okay
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      );
    
  }
  
  export default Login;