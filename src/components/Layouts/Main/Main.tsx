import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navigation/Navbar";
import { getToken } from '../../../utils/common';

const useStyles = makeStyles((theme: any) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    // height: '100vh',
    overflow: 'auto',
    paddingTop: 110,
    textAlign: 'center'

  },
  container: {
    // paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
  }
}));

const MainLayout = ({ children }: any) => {
  console.log('children: ', children);
  const classes = useStyles();
  const navigate = useNavigate();
  const address = ["/login", "/register", '/resetPassword', '/forgotPassword'].includes(window.location.pathname);

  // const userToken = getToken();
  // if (!userToken) {
  //   navigate('/login');
  // }
  return (
    <>
      {!address ? (
        <>
          <Navbar />
          <Container maxWidth='lg'  >
            <main className={classes.content}>
              {/* <div className={classes.appBarSpacer} /> */}
              {children}
            </main>
          </Container>

        </>
      ) : (
        <>
          {children}
        </>
      )}
    </>
  );
};

export default MainLayout;