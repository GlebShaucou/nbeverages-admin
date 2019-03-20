import React, { useEffect } from 'react';

const ContactPage = () => {
	useEffect(() => {
		document.title = 'Contacts | Tea City';
	});

	return (
		<div className="page-component page-component--contact">
			Contact
		</div>
	);
};

export default ContactPage;
