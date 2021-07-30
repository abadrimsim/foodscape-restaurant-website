'use strict';

import './scss/app.scss';
import { foodMenu, reviews, chefs } from './content';
import ChefCard from './components/ChefCard';
import FeaturedCard from './components/FeaturedCard';
import MenuCard from './components/MenuCard';

document.addEventListener('DOMContentLoaded', (e) => {
	// Navbar
	let hamburger = document.querySelector('.hamburger-menu');
	let menu = document.querySelector('.navbar');

	// Menu Cards
	const fleftArrow = document.getElementById('fleft-arrow');
	const frightArrow = document.getElementById('fright-arrow');
	const rleftArrow = document.getElementById('rleft-arrow');
	const rrightArrow = document.getElementById('rright-arrow');

	const featuredCard = document.getElementsByClassName('featured-card');
	const menuCard = document.getElementsByClassName('menu-card');

	const foodCategory = document.getElementById('menu-category');

	let featuredArr = [];
	let featuredPage;

	let menuArr = [];
	let menuPage;

	let l = 0;
	let move = 25.34;
	let maxMove = 203;

	const mobileView = window.matchMedia('(max-width: 768px)');

	FeaturedCard(foodMenu);
	MenuCard(foodMenu, 'Main Dish');
	ChefCard(chefs);
	// ReviewCard(reviews);

	// Hamburger Menu
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('isactive');
		menu.classList.toggle('active');
	});

	// Category Select
	foodCategory.addEventListener('change', (e) => {
		const category = e.target.value;

		if (category === 'Main Dishes') {
			MenuCard(foodMenu, 'Main Dish');
		} else if (category === 'Drinks') {
			MenuCard(foodMenu, 'Drink');
		} else if (category === 'Dessert') {
			MenuCard(foodMenu, 'Dessert');
		}
	});

	// Arrow Buttons Functionality
	setTimeout(() => {
		featuredArr = [...featuredCard];
		featuredPage = Math.ceil(featuredArr.length / 4);

		menuArr = [...menuCard];
		menuPage = Math.ceil(menuArr.length / 4);

		if (mobileView.matches) {
			move = 50.36;
			maxMove = 504;
		}

		handleFBtns();
		handleMBtns();
	}, 500);

	const handleFBtns = () => {
		const moveRight = () => {
			l = l + move;

			if (featuredCard === 1) l = 0;
			for (const i of featuredCard) {
				if (l > maxMove) l = l - move;

				i.style.left = '-' + l + '%';
			}
		};

		const moveLeft = () => {
			l = l - move;

			if (l <= 0) l = 0;
			for (const i of featuredCard) {
				if (featuredPage > 1) i.style.left = '-' + l + '%';
			}
		};

		frightArrow.onclick = () => {
			moveRight();
		};

		fleftArrow.onclick = () => {
			moveLeft();
		};
	};

	const handleMBtns = () => {
		const moveRight = () => {
			l = l + move;

			if (menuCard === 1) l = 0;
			for (const i of menuCard) {
				if (l > maxMove) l = l - move;

				i.style.left = '-' + l + '%';
			}
		};

		const moveLeft = () => {
			l = l - move;

			if (l <= 0) l = 0;
			for (const i of menuCard) {
				if (menuPage > 1) i.style.left = '-' + l + '%';
			}
		};

		rrightArrow.onclick = () => {
			moveRight();
		};

		rleftArrow.onclick = () => {
			moveLeft();
		};
	};
});
