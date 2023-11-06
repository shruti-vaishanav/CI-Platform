import { useState, ReactElement, FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import {
  Typography,
  Divider,
  InputLabel, TextField,
  Button,
  Snackbar, Alert
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { loginUser } from '../../redux/action/user';

const useStyle: any = makeStyles(() => ({
  listStyle: {
    lineHeight: 22 / 14,
    fontSize: '14px',
  },
  textInputEmail: {
    marginBottom: '20px'
  },
  inputLabel: {
    marginBottom: '10px',
    fontSize: '14px',
  },
  inputStyle: {
    width: '350px'
  },
  buttonSpace: {
    marginTop: '20px'
  },
  loginStyle: {
    height: '45px',
    border: '1px solid rgba(248, 134, 52, 1)'
  }
}));

type authDataType = {
  email: string,
  password: string,
}

const validate = (values: authDataType) => {
  const errors: authDataType = {
    email: '',
    password: '',
  };

  if (!values.email) {
    errors.email = 'Required';
  } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
    errors.email = 'Invalid email format';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5 && values.password.length > 16) {
    errors.password = 'Must be at least more then 8 characters or less then 16 characters';
  }

  return errors;
}

const LoginForm: FC<any> = (): ReactElement => {

  const dispatch: any = useDispatch();
  const classes = useStyle();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const handleClose = () => setAlert(!alert);
  const handleIsSuccess = (flag: boolean) => setIsSuccess(flag);
  const handleLogin = async (values: authDataType) => {
    validate(values);
    const response = await dispatch(loginUser(values));
    if (response) {
      handleIsSuccess(response.success);
      handleClose();
    }
    if (response.success) navigate('/');
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => handleLogin(values),
    // validate: values => validate(values),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.textInputEmail}>
          <InputLabel className={classes.inputLabel}>
            Email Address*
          </InputLabel>
          <TextField
            type='email'
            name='email'
            size="small"
            onChange={formik.handleChange}
            value={formik.values.email}
            variant="outlined"
            className={classes.inputStyle} />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div>
          <InputLabel className={classes.inputLabel}>
            Password*
          </InputLabel>
          <TextField
            type='password'
            name='password'
            size="small"
            onChange={formik.handleChange}
            value={formik.values.password}
            variant="outlined"
            className={classes.inputStyle} />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <div className={classes.buttonSpace}>
          <Button
            variant="contained"
            type="submit"
            className={classes.loginStyle}>
            Login
          </Button>
        </div>
      </form>
      <Snackbar anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
        open={alert} autoHideDuration={2000} onClose={handleClose}
      >
        {isSuccess ?
          <Alert severity="success" sx={{ width: '100%' }}>
            Logged in!
          </Alert>
          :
          <Alert severity="error" sx={{ width: '100%' }}>
            Email or password is wrong!
          </Alert>
        }
      </Snackbar>
    </>
  );
};

export default LoginForm;