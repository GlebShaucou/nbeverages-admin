import React, { useEffect } from 'react';

const ContactPage = () => {
	useEffect(() => {
		document.title = 'Contacts | Tea City';
	});

	return (
		<div className="page-component page-component--contact">
			<div className="contacts__map-container">
				<iframe
					title="location-map"
					width="425"
					height="350"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
					src="https://www.openstreetmap.org/export/embed.html?bbox=27.46491372585297%2C53.86074660766081%2C27.471994757652286%2C53.863536866547484&amp;layer=mapnik"
					style={{
						border: '1px solid black',
					}}
				/>
				<br />
				<small>
					<a href="https://www.openstreetmap.org/#map=18/53.86214/27.46845&amp;layers=N">
						Посмотреть более крупную карту
					</a>
				</small>
			</div>
		</div>
	);
};

export default ContactPage;
