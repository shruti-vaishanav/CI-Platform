/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react'
import { Button, Grid, Paper, Box, TextField, CssBaseline } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import SideImage from '../../components/SideImage';
import { IFormData } from '../../interface/form.interface';


export default class register extends Component {

  render() {
    const handleSubmit = (value: IFormData, onSubmitProps: any) => {
      console.log("value", value)
      onSubmitProps.resetForm()
    }

    const validationSchema = Yup.object({
      firstName: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required(' firstName is Required'),
      lastName: Yup.string().required('Last Name is required'),
      phoneNumber: Yup.number().required('Phone Number is required'),
      email: Yup.string().email('Invalid email address')
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 'Invalid email address')
        .required('Email Address is required'),
      password: Yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    });

    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => {
          console.log("formik", formik);
          return (
            <Grid container component="main" sx={{ height: "100vh", display: 'flex' }} >
              <CssBaseline />
              <SideImage />
              <Grid xs={12} sm={8} md={5} component={Paper} elevation={6}
                sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'
                }}>
                <Box component='form' onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>

                  <label htmlFor="FirstName">FirstName</label>
                  <TextField
                    sx={{ display: 'inline-block', mb: 3 }}
                    id="firstName"
                    name="firstName"
                    placeholder='FirstName'
                    type="text"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                  />

                  <label htmlFor="LastName">LastName</label>
                  <TextField
                    sx={{ display: 'inline-block', mb: 3 }}
                    // fullWidth
                    id="lastName"
                    name="lastName"
                    placeholder='lastName'

                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                  />

                  <label htmlFor="phoneNumber">PhoneNumber</label>
                  <TextField
                    sx={{ display: 'inline-block', mb: 3 }}
                    // fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='Phone Number'
                    type="text"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />

                  <label htmlFor="email">Email</label>
                  <TextField
                    sx={{ display: 'inline-block', mb: 3 }}
                    // fullWidth
                    id="email"
                    placeholder='Email'
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />

                  <label htmlFor="Password">Password</label>
                  <TextField
                    sx={{ display: 'inline-block', mb: 3 }}
                    id="password"
                    name="password"
                    placeholder='Password'
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />

                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <TextField
                    sx={{ display: 'inline-block', mb: 3 }}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder='Confirm Password'
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    sx={{ mt: 3, mb: 2, border: '1px solid rgba(248, 134, 52, 1)', height: '45px', width: '318px', color: ' rgba(248, 134, 52, 1)', borderRadius: '24px' }}
                  >
                    Register
                  </Button>
                  <Grid container sx={{ flexDirection: 'column', alignItems: 'center', }} style={{ color: ' rgba(65, 65, 65, 1)' }}>
                    <Grid item xs>
                      <Link to="/forgotPassword" >
                        Lost your password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/login" >
                        {"Already registered? Login now"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Grid >
            </Grid>
          )
        }
        }
      </Formik >
    );
  }
}





