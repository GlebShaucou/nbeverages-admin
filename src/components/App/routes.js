import * as pages from '../../pages';

export default [
	{
		path: '/secret-section',
		exact: true,
		component: pages.AdminPage,
	},
	{
		path: '/catalog',
		exact: true,
		component: pages.CatalogPage,
	},
	{
		path: '/home',
		exact: true,
		component: pages.MainPage,
	},
	{
		path: '/contact',
		exact: true,
		component: pages.ContactPage,
	},
	{
		path: '/login',
		exact: true,
		component: pages.LoginPage,
	},
	{
		path: '/',
		exact: true,
		component: pages.MainPage,
	},
	{
		path: '/',
		component: pages.NotFoundPage,
	},
];
