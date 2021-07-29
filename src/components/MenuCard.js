'use strict';

const MenuCard = (menu, category) => {
	document.getElementById('menu-cards').innerHTML = '';

	for (let i = 0; i < menu.length; i++) {
		if (menu[i].category === category) {
			const template = `
        <div class="menu-card transition2">
			<div class="card-body">
				<img src=${menu[i].foodImg} alt="${menu[i].foodName}" />

				<h3 class="card-title">${menu[i].foodName}</h3>

				<span class="card-rating">
                    <i class='fa fa-star'></i>
				</span>

				<p class="card-desc">
					${menu[i].foodDesc}
				</p>
				<p class="card-price">${menu[i].price}</p>
			</div>
		</div>`;

			document.getElementById('menu-cards').innerHTML += template;
		}
	}

	return;
};

export default MenuCard;
