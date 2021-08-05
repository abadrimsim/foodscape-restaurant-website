'use strict';

const ReviewCarousel = (type, category, item, btn) => {
	const slides = document.querySelectorAll(item);
	const arrows = document.querySelectorAll(btn);
	const mobileView = window.matchMedia('(max-width: 768px)');
	let menuCategory = category;
	let carouselCount = 0;
	let max;

	if (type === 'Featured' || type === 'Chef') {
		max = 330;

		if (mobileView.matches) {
			max = 440;
		}
	} else if (type === 'Menu') {
		max = 550;

		if (mobileView.matches) {
			max = 770;

			if (menuCategory == 'Drinks') {
				max = 220;
			} else if (menuCategory == 'Dessert') {
				max = 330;
			}
		}
	} else if (type === 'Review') {
		max = 220;
	} else {
		console.log('Yey');
	}

	arrows[0].style.visibility = 'hidden';
	arrows[1].style.visibility = 'visible';

	arrows[0].addEventListener('click', function (e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount -= 110;
		slider();
	});
	arrows[1].addEventListener('click', sliderEvent);

	function sliderEvent(e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount += 110;
		slider();
	}

	function slider() {
		switch (carouselCount) {
			case 0:
				carouselCount = 0;
				arrows[0].style.visibility = 'hidden';
				arrows[1].style.visibility = 'visible';
				break;
			case max:
				arrows[0].style.visibility = 'visible';
				arrows[1].style.visibility = 'hidden';
				break;
			default:
				arrows[0].style.visibility = 'visible';
				arrows[1].style.visibility = 'visible';
				break;
		}
		console.log(carouselCount);
		for (var i = 0; i < slides.length; i += 1) {
			slides[i].setAttribute(
				'style',
				'transform:translateX(-' + carouselCount + '%)'
			);
		}
	}

	return;
};

export default ReviewCarousel;
