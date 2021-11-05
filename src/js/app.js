const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav__links');
	const navLinks = document.querySelector('.nav__links li');
	// Toggle Nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav__active');
	});
};

navSlide();
