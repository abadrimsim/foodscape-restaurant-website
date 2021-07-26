'use strict';

import mainDish from '../foodMenu';

const MenuCard = () => {
	for (let i = 0; i < mainDish.length; i++) {
		const template = `
        <div class="item-card transition2">
					<div class="item-card-body">
						<img src=${mainDish[i].foodImg} alt="${mainDish[i].foodName}" />

						<p class="menu-title">${mainDish[i].foodName}</p>

						<span class="menu-rating">
                         <i class='fa fa-star'></i>
						</span>

						<p class="menu-desc">
							${mainDish[i].foodDesc}
						</p>
						<p class="menu-price">${mainDish[i].price}</p>
					</div>
				</div>
        `;

		document.getElementById('featured-cards').innerHTML += template;
	}

	return;
};

export default MenuCard;
