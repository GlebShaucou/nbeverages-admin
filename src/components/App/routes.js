import {
	AdminPage,
	CatalogPage,
	MainPage,
	NotFoundPage,
	ContactPage,
} from '../../pages';

export default [
	{
		path: '/secret-section',
		exact: true,
		component: AdminPage,
	},
	{
		path: '/catalog',
		exact: true,
		component: CatalogPage,
	},
	{
		path: '/home',
		exact: true,
		component: MainPage,
	},
	{
		path: '/contact',
		exact: true,
		component: ContactPage,
	},
	{
		path: '/',
		exact: true,
		component: MainPage,
	},
	{
		path: '/',
		component: NotFoundPage,
	},
];
