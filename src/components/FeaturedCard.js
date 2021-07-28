'use strict';

const FeaturedCard = (category) => {
	for (let i = 0; i < category.length; i++) {
		if (category[i].isFeatured) {
			const template = `
        <div class="featured-card transition2">
			<div class="card-body">
				<img src=${category[i].foodImg} alt="${category[i].foodName}" />

				<p class="card-title">${category[i].foodName}</p>

				<span class="card-rating">
                    <i class='fa fa-star'></i>
				</span>

				<p class="card-desc">
					${category[i].foodDesc}
				</p>
				<p class="card-price">${category[i].price}</p>
			</div>
		</div>`;

			document.getElementById('featured-cards').innerHTML += template;
		}
	}

	return;
};

export default FeaturedCard;
