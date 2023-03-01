import React from 'react'
import { Box, Button, Container, Grid, TextField, FormControl } from '@mui/material'
import LoginAppBar from '../features/bar/LoginAppBar'
import { useDispatch } from 'react-redux'
import { userLogin } from '../features/login/loginSlice'
import { useNavigate } from "react-router-dom";

import { USERS } from '../data/users'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    // auth function, checks if user exists in database users.js
    const auth = (obj) => {
        const data = USERS.find(({email}) => email === obj.email)
        if (data && data.password === obj.password) {
            dispatch(userLogin(data))
            return true
        } else {
          return false
        }
    }
    
    // handle submit function, gets data from form and sends it to auth function redirecting to user page if auth is true
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log(data)
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        auth(object)? navigate('/user'): alert('Usuario o contraseña incorrectos')
    };

    return (
    <>
        <LoginAppBar />
        <Container maxWidth="sm" sx={{
            paddingtop: '2rem', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100vh',
        }}>

            <Box
            component="form"
            onSubmit={handleSubmit}
            // onSubmit={handleSubmit(submitForm)}
            border={1} borderColor="primary.main" borderRadius={8} padding={1} >
                <Box borderColor="primary.main">
                    <FormControl>
                        <Grid container spacing={3} padding={5}>
                            <Grid item xs={12}>
                                <h2>Login</h2>
                            </Grid>


                            <Grid item xs={12}>
                                <TextField id="email" name='email' label="E-mail" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField  id="password" name="password" label="Contraseña" variant="outlined" type='password' fullWidth  required/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                type='submit'
                                variant="contained" color="primary">
                                    Log in
                                </Button>
                            </Grid>
                            {/* <Grid item xs={12}>
                                <a href="/">Olvidé mi contraseña</a>
                            </Grid> */}
                            {/* <Grid item xs={12}>
                                <a href="/">Registrarme</a>
                            </Grid> */}
                        </Grid>
                    </FormControl>
                </Box>
            </Box>
        </Container>
    </>
    )
}

export default Login