import React, { useEffect } from 'react';

import { Input } from '../../components';

const ContactPage = () => {
	useEffect(() => {
		document.title = 'Contacts | Tea City';
	});

	return (
		<div className="page-component page-component--contact">
			<div className="contacts__map-container">
				<iframe
					title="location-map"
					width="100%"
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
			<div className="contacts__info-section">
				<div className="info-section info-section--left">
					<div className="info-section__info-block">
						<div className="info-block__header">
							Адреса:
						</div>
						<ul className="info-block__list">
							<li className="info-block__list-item">
								г. Минск, проспект Газеты Звязда 37, офис 36
							</li>
							<li className="info-block__list-item">
								г. Минск, проспект Дзержинского 119
							</li>
						</ul>
					</div>
					<div className="info-section__info-block">
						<div className="info-block__header">
							Телефоны:
						</div>
						<ul className="info-block__list">
							<li className="info-block__list-item">
								г. Минск, проспект Газеты Звязда 37, офис 36 - +375 29 888 888
							</li>
							<li className="info-block__list-item">
								г. Минск, проспект Дзержинского 119 - +375 29 3738254
							</li>
						</ul>
					</div>
					<div className="info-section__info-block">
						<div className="info-block__header">
							E-mail:
						</div>
						<div className="info-block__text">
							teaDrinker89@teacity.com
						</div>
					</div>
					<div className="info-section__info-block">
						<div className="info-block__header">
							Режим работы:
						</div>
						<div className="info-block__text">
							Понедельник - Пятница с 10:00 до 20:00
						</div>
					</div>
				</div>
				<div className="info-section info-section--center">
					<h3>
						Обратная связь
					</h3>
					<div>
						<div>
							Сообщение
						</div>
						<textarea rows="4" cols="50">

						</textarea>
					</div>
				</div>
				<div className="info-section info-section--right">
					<Input
						label="Ваше имя"
						name="name"
						// value
						onChange={() => {}}
					/>
					<Input
						label="Контактный телефон"
						name="phone"
						// value
						onChange={() => {}}
					/>
					<Input
						label="E-mail"
						name="email"
						// value
						onChange={() => {}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
