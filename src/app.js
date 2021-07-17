import './scss/app.scss';
// import FoodMenu from './components/FoodMenu';

// FoodMenu.map((food) => console.log(food));

const arrowButton = document.getElementsByClassName('arrow-btn');
const itemCard = document.getElementsByClassName('item-card');
const itemPage = Math.ceil(itemCard.length / 4);

let l = 0;
let move = 50;
let maxMove = 150;

//Mobile view

const mobileView = window.matchMedia('(max-width: 768px');

if (mobileView.matches) {
	move = 90;
	maxMove = 750;
}

const moveRight = () => {
	l = l + move;
	if (itemCard == 1) l = 0;

	for (let i of itemCard) {
		if (l > maxMove) l = l - move;
		i.style.left = '-' + l + '%';
	}
};

const moveLeft = () => {
	l = l - move;
	if (l <= 0) l = 0;

	for (let i of itemCard) {
		if (itemPage > 1) i.style.left = '-' + l + '%';
	}
};

arrowButton[1].onclick = () => {
	moveRight();
};

arrowButton[0].onclick = () => {
	moveLeft();
};
