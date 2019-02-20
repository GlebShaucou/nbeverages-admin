import {
	AdminPage,
	CatalogPage,
} from '../../pages';

export default [
	{
		path: '/secret-section',
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
		component: null,
	},
	{
		path: '/',
		exact: true,
		component: null,
	},
];
