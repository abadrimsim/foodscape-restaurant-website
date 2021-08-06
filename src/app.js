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

	// GSAP Animation
	gsap.registerPlugin(ScrollTrigger);
	const tl = gsap.timeline();

	tl.from('.hero-content', {
		y: '-30%',
		opacity: 0,
		duration: 1.5,
		ease: Power4.easeOut,
	});

	tl.from(
		'.stagger1',
		{
			opacity: 0,
			y: -50,
			stagger: 0.3,
			ease: Power4.easeOut,
			duration: 2,
		},
		'-=1.5'
	);

	gsap.from('.hero-anim', {
		stagger: 0.2,
		scale: 0.1,
		duration: 1,
		ease: Back.easeOut.config(1.7),
	});

	gsap.from('.transition1', {
		y: 50,
		opacity: 0,
		duration: 1.2,
		stagger: 0.3,
	});

	gsap.from('.transition2', {
		scrollTrigger: {
			trigger: '.transition2',
			start: 'top center',
			end: '+=500',
		},
		y: 50,
		opacity: 0,
		duration: 1.2,
		stagger: 0.3,
	});

	gsap.from('.transition3', {
		scrollTrigger: {
			trigger: '.transition3',
			start: 'top center',
			end: '+=500',
		},
		y: 50,
		opacity: 0,
		duration: 1.2,
		stagger: 0.6,
	});

	gsap.from('.transition4', {
		scrollTrigger: {
			trigger: '.transition4',
			start: 'top center',
		},
		scale: 0.1,
		duration: 1,
		ease: Back.easeOut.config(1.7),
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
