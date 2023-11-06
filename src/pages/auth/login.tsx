import React, { Component } from 'react';
import { InputLabel, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import SideImage from '../../components/SideImage/index';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ILogin } from '../../interface/form.interface';

export default class Login extends Component {

  render() {
    const handleSubmit = (value: ILogin, onSubmitProps: any) => {
      console.log("value", value)
      onSubmitProps.resetForm()
    };

    const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email address')
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 'Invalid email address')
        .required('Email Address is required'),
      password: Yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
    });
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
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
                    alignItems: 'center',
                  }}
                >
                  <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <InputLabel size='small' sx={{ fontSize: '16px', color: '#414141', opacity: '1' }}>
                      Email Address
                    </InputLabel>
                    <TextField
                      size='small'
                      sx={{ mt: 3, display: 'inline-block' }}
                      placeholder='Email Address'
                      id="email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <InputLabel size='small' sx={{ fontSize: '16px', color: '#414141', opacity: '1' }}>
                      Password
                    </InputLabel>
                    <TextField
                      sx={{ mt: 3, display: 'inline-block' }}
                      placeholder='Password'
                      name="password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      sx={{
                        mt: 3, mb: 2, border: '1px solid rgba(248, 134, 52, 1)',
                        height: '45px', width: '318px', color: ' rgba(248, 134, 52, 1)', borderRadius: '24px'
                      }}
                    >
                      Login
                    </Button>
                    <Grid container sx={{ flexDirection: 'column', alignItems: 'center', marginTop: '7px' }}
                      style={{ color: ' rgba(65, 65, 65, 1)' }}>
                      <Grid item xs>
                        <Link to="/forgotPassword" className=''>
                          Lost your password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link to="/register" >
                          Don’t have an account? <span>Create an account</span>
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
    )
  }
}



