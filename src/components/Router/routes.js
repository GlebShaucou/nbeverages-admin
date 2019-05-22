import * as pages from '../../pages';
import * as constants from '../../constants';

export default [
	{
		path: `${constants.PAGE_ADMIN_ORDERS}/:orderId`,
		exact: true,
		component: pages.OrderItemPage,
	},
	{
		path: constants.PAGE_ADMIN,
		exact: true,
		component: pages.AdminPage,
	},
	{
		path: '/catalog/:beverageId',
		exact: true,
		component: pages.CatalogItemPage,
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
		path: '/shopping-cart',
		exact: true,
		component: pages.CartPage,
	},
	{
		path: '/payment-details',
		exact: true,
		component: pages.PaymentDetailsPage,
	},
	{
		path: '/delivery-details',
		exact: true,
		component: pages.DeliveryDetailsPage,
	},
	{
		path: constants.PAGE_REGISTRATION,
		exact: true,
		component: pages.RegistrationPage,
	},
	{
		path: constants.PAGE_USER_ACCOUNT,
		exact: true,
		component: pages.UserAccountPage,
	},
	{
		path: constants.PAGE_ORDER,
		exact: true,
		component: pages.OrderPage,
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
