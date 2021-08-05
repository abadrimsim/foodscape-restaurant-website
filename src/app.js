'use strict';

import './scss/app.scss';
import { foodMenu, chefs } from './content';
import ChefCard from './components/ChefCard';
import FeaturedCard from './components/FeaturedCard';
import MenuCard from './components/MenuCard';
import Carousel from './components/Carousel';

document.addEventListener('DOMContentLoaded', (e) => {
	// Navbar
	let hamburger = document.querySelector('.hamburger-menu');
	let menu = document.querySelector('.navbar');

	let menuC = document.querySelector('.menu-c');

	const foodCategory = document.getElementById('menu-category');

	// Hamburger Menu
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('isactive');
		menu.classList.toggle('active');
	});

	// Category Select
	foodCategory.addEventListener('change', (e) => {
		const category = e.target.value;

		switch (category) {
			case 'Main Dishes':
				MenuCard(foodMenu, 'Main Dish');
				break;
			case 'Drinks':
				MenuCard(foodMenu, 'Drink');
				break;
			case 'Dessert':
				MenuCard(foodMenu, 'Dessert');
				break;
			default:
				break;
		}

		Carousel('Menu', category, '.menu-card', '.menu-button');
	});

	FeaturedCard(foodMenu);
	MenuCard(foodMenu, 'Main Dish');
	ChefCard(chefs);

	Carousel('Review', '', '.review-item', '.review-button');
	Carousel('Featured', '', '.featured-card', '.featured-button');
	Carousel('Menu', '', '.menu-card', '.menu-button');
	Carousel('Chef', '', '.chef-card', '.chef-button');
});
