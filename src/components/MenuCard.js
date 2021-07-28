'use strict';

const MenuCard = (menu, category) => {
	document.getElementById('menu-cards').innerHTML = '';

	for (let i = 0; i < menu.length; i++) {
		if (menu[i].category === category) {
			const template = `
        <div class="item-card transition2">
					<div class="item-card-body">
						<img src=${menu[i].foodImg} alt="${menu[i].foodName}" />

						<p class="menu-title">${menu[i].foodName}</p>

						<span class="menu-rating">
                         <i class='fa fa-star'></i>
						</span>

						<p class="menu-desc">
							${menu[i].foodDesc}
						</p>
						<p class="menu-price">${menu[i].price}</p>
					</div>
				</div>
        `;

			document.getElementById('menu-cards').innerHTML += template;
		}
	}

	return;
};

export default MenuCard;
