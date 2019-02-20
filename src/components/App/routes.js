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
		path: '/',
		component: CatalogPage,
	},
];
