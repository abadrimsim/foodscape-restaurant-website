'use strict';

const FeaturedCard = (category) => {
	for (let i = 0; i < category.length; i++) {
		if (category[i].isFeatured) {
			const template = `
        <div class="item-card transition2">
					<div class="item-card-body">
						<img src=${category[i].foodImg} alt="${category[i].foodName}" />

						<p class="menu-title">${category[i].foodName}</p>

						<span class="menu-rating">
                         <i class='fa fa-star'></i>
						</span>

						<p class="menu-desc">
							${category[i].foodDesc}
						</p>
						<p class="menu-price">${category[i].price}</p>
					</div>
				</div>
        `;

			document.getElementById('featured-cards').innerHTML += template;
		}
	}

	return;
};

export default FeaturedCard;
