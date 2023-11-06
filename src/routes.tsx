// import Home from './pages/Home';
import LogIn from './pages/auth/login';
import Register from './pages/auth/register';
import ResetPassword from './pages/auth/ResetPassword';
import ForgotPassword from './pages/auth/Forgotpassword';
import { ComponentClass, FC } from "react";
import Dashboard from './pages/Dashboard';

type Route = {
	key: string,
	title: string,
	path: string,
	enabled: boolean,
	component: ComponentClass | FC
}

export const routes: Array<Route> = [
	{
		key: 'login-route',
		title: 'Login',
		path: '/login',
		enabled: true,
		component: LogIn
	},
	{
		key: 'forgotPassword-route',
		title: 'ForgotPassword',
		path: '/forgotPassword',
		enabled: true,
		component: ForgotPassword
	},
	{
		key: 'resetPassword-route',
		title: 'ResetPassword',
		path: '/resetPassword',
		enabled: true,
		component: ResetPassword
	},
	{
		key: 'register-route',
		title: 'Register',
		path: '/register',
		enabled: true,
		component: Register
	},
	{
		key: 'home-route',
		title: 'Home',
		path: '/',
		enabled: true,
		component: Dashboard
	},

	// { 
	// 	key: 'notfound-route',
	// 	title: 'Not Found',
	// 	path: '*', 
	// 	enabled: true,
	// 	component: NotFound
	// }
]