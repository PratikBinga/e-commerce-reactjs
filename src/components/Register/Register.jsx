import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import styles from './Register.module.css'

const Register = () => {

    const [username, setUsername] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, confirmSetPassword] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const setUsernameHandler = event => {
        setUsername(event.target.value)
    }
    const setEmailHandler = event => {
        setEmailId(event.target.value)
    }
    const setPasswordHandler = event => {
        setPassword(event.target.value);
    }
    const setconfirmPasswordHandler = event => {
        confirmSetPassword(event.target.value);
    }

    const registerUser = () => {
        if (username === "pratik" && password === "password") {
            setOpen(true);
            setMessage("You have successfully Registered In!")
        } else {
            setOpen(true);
            setMessage("You have successfully Registered In!")
            // setMessage("Incorrect Username or Password!");
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerContent}>
                <TextField
                    required
                    margin="normal"
                    variant="standard"
                    onChange={setUsernameHandler}
                    placeholder="UserName"
                    value={username}

                />
                <TextField
                    required
                    margin="normal"
                    variant="standard"
                    onChange={setEmailHandler}
                    placeholder="EmailId"
                    value={emailId}

                />
                <TextField
                    required
                    margin="normal"
                    variant="standard"
                    onChange={setPasswordHandler}
                    placeholder="Password"
                    value={password}
                    type="password"

                />
                <TextField
                    required
                    margin="normal"
                    variant="standard"
                    onChange={setconfirmPasswordHandler}
                    placeholder="ConfirmPassword"
                    value={confirmPassword}
                    type="password"

                />
                <div className={styles.buttonRegister}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick = {registerUser}
                    >
                        Register
                    </Button>
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
    )
}

export default Register;