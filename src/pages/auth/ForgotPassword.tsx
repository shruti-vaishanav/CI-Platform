import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Paper, Box, Grid, Typography, InputLabel } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import SideImage from '../../components/SideImage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IForgotPassword } from '../../interface/form.interface';

export default class ForgotPassword extends Component {
    render() {
        const handleSubmit = (value: IForgotPassword, onSubmitProps: any) => {
            console.log("reset pass", value)
            onSubmitProps.resetForm()
        };
        const validationSchema = Yup.object({
            email: Yup.string().email('Invalid email address')
                .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 'Invalid email address')
                .required('Email Address is required'),
        });
        return (
            <Formik
                initialValues={{
                    email: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {formik => {
                    return (
                        <Grid container component="main" sx={{ height: '100vh', }}>
                            <CssBaseline />
                            <SideImage />
                            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} sx={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Box
                                    sx={{
                                        my: 8,
                                        mx: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >

                                    <Typography component="h5" sx={{ fontSize: '20px' }}>
                                        Forgot Password
                                    </Typography>
                                    <p style={{ textAlign: 'center', width: '60%', fontSize: '14px', color: '#414141' }}>Enter your email address you've using for your account below and we will send you a password reset link</p>
                                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                                        <InputLabel size='small' sx={{ fontSize: '16px', color: '#414141', opacity: '1' }}>
                                            Email Address
                                        </InputLabel>
                                        <TextField
                                            placeholder='Email Address'
                                            sx={{ display: 'inline-block', mt: 3 }}
                                            size='small'
                                            required
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                        />

                                        <Link to='/resetPassword'>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                sx={{
                                                    mt: 3, mb: 2, border: '1px solid rgba(248, 134, 52, 1)',
                                                    height: '45px', width: '318px', color: ' rgba(248, 134, 52, 1)', borderRadius: '24px'
                                                }}
                                            >
                                                Reset My Password
                                            </Button>
                                        </Link>
                                        <Grid container sx={{ flexDirection: 'column', alignItems: 'center' }}>
                                            <Grid item xs>
                                                <Link to="/login" >
                                                    Login
                                                </Link>
                                            </Grid>
                                        </Grid>
                                        {/* <Copyright sx={{ mt: 5 }} /> */}
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid >
                    )
                }}
            </Formik>
        );
    }

}