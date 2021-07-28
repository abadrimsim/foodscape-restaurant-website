'use strict';

const ChefCard = (chef) => {
	for (let i = 0; i < chef.length; i++) {
		const template = `<div class='chef-card transition2'>
					<div class='card-body'>
						<img src=${chef[i].chefImg} alt='${chef[i].chefName}' />

						<p class='card-title'>${chef[i].chefName}</p>
					</div>
				</div>`;

		document.getElementById('chef-cards').innerHTML += template;
	}

	return;
};

export default ChefCard;
