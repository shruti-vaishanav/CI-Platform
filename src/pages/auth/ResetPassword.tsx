import { Component } from 'react';
import { Link, } from 'react-router-dom';
import { Button, TextField, Paper, Box, Grid, Typography, InputLabel } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import SideImage from '../../components/SideImage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IResetPassword } from '../../interface/form.interface';

export default class ResetPassword extends Component {

    render() {
        const handleSubmit = (value: IResetPassword, onSubmitProps: any) => {
            console.log("reset pass", value)
            onSubmitProps.resetForm()
        };

        const validationSchema = Yup.object({
            password: Yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Confirm Password is required'),
        });
        return (
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {formik => {
                    return (
                        <Grid container component="main" sx={{ height: '100vh', display: 'flex' }}>
                            <CssBaseline />
                            <SideImage />
                            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} sx={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'
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

                                    <Typography component="h5" sx={{ fontSize: '20px', mb: 0 }}>
                                        New Password
                                    </Typography>
                                    <p style={{ textAlign: 'center', fontSize: '14px' }}>Please enter a new password in the fields below.</p>
                                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', }}>
                                        <InputLabel size='small' sx={{ fontSize: '16px', color: '#414141', opacity: '1' }}>
                                            Password
                                        </InputLabel>
                                        <TextField
                                            sx={{ display: 'inline-block', mt: 3 }}
                                            name="password"
                                            type="password"
                                            id="password"
                                            placeholder='Password'
                                            autoComplete="current-password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                        />
                                        <InputLabel size='small' sx={{ fontSize: '16px', color: '#414141', opacity: '1' }}>
                                            Confirm  Password
                                        </InputLabel>
                                        <TextField
                                            sx={{ mt: 3, display: 'inline-block' }}
                                            placeholder=' Confirm Password'
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            autoFocus
                                            value={formik.values.confirmPassword}
                                            onChange={formik.handleChange}
                                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        />

                                        <Button
                                            type="submit"
                                            fullWidth
                                            sx={{
                                                mt: 3, mb: 2, border: '1px solid rgba(248, 134, 52, 1)',
                                                height: '45px', width: '318px', color: ' rgba(248, 134, 52, 1)', borderRadius: '24px'
                                            }}
                                        >
                                            Change Password
                                        </Button>
                                        <Grid container sx={{ flexDirection: 'column', alignItems: 'center', }} style={{ color: ' #0f0f0f' }}>
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