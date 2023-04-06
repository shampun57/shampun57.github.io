//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/

//========================УБИРАЕМ=PLACEHOLDER=У=INPUT========================================================================================================================
const inputs = document.getElementsByName("input");
if (inputs.length > 0) {
	for (let index = 0; index < inputs.length; index++) {
		const element = inputs[index];
		let inputPlaceholder = element.placeholder;
		element.addEventListener("focusin", function (e) {
			element.classList.add("active")
			element.placeholder = '';
		})
		element.addEventListener("focusout", function (e) {
			element.classList.remove("active")
			element.placeholder = inputPlaceholder;
		})
	}
}
//=============================HEADER==============================================================================================================================================


//Бургер для первой страницы

const burgerOne = document.querySelector(".header__burger");
if (burgerOne) {
	burgerOne.addEventListener("click", function (e) {
		burgerOne.classList.toggle("active");
		document.querySelector(".burger-menu").classList.toggle("active")
		document.body.classList.toggle("scroll-lock")
	})
}

//Делаем табы

const tabs = document.querySelectorAll(".burger-menu__tab");


if (tabs.length > 0) {
	tabs.forEach((item) => {
		item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs.length; index++) {
				const element = tabs[index];
				element.classList.remove("active--tab")
			}
			e.target.classList.add("active--tab")
		})
	})
}

//Делаем слайдер игр

if (window.innerWidth <= 900) {
	if (document.querySelector(".games__columns")) {
		document.querySelector(".games__columns").classList.add("swiper-container")
	}
	if (document.querySelector(".games__wrapper")) {
		document.querySelector(".games__wrapper").classList.add("swiper-wrapper")
	}
	if (document.querySelectorAll(".games__column")) {
		document.querySelectorAll(".games__column").forEach((item) => {
			item.classList.add("swiper-slide");

		})
	}


	new Swiper(".games__columns", {

		watchOverflow: true,
		autoHeight: true,
		spaceBetween: 30,
		breakpoints: {
			500: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			}
		},
		navigation: {
			prevEl: ".games-arrow-left",
			nextEl: ".games-arrow-right"
		},
	})
}
//Делаем навигацию по сайту в бургере



//Слайдер зон

new Swiper(".zones__items", {
	watchOverflow: true,
	slidesPerView: 1,
	spaceBetween: 204,
	dynamicBullets: true,
	pagination: {
		el: ".zones-dotts",
		clickable: true,
	},
})

//Делаем слайдер событий


if (document.querySelectorAll(".events__column").length > 2) {
	document.querySelector(".events__columns").classList.add("swiper-container")
	document.querySelector(".events__wrapper").classList.add("swiper-wrapper")
	document.querySelectorAll(".events__column").forEach((item) => {

		item.classList.add("swiper-slide");

	})
	new Swiper(".events__columns", {

		watchOverflow: true,
		autoHeight: true,
		spaceBetween: 30,
		autoHeight: true,
		breakpoints: {
			1440: {
				slidesPerView: 2
			},
			320: {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: ".events-arrow-left",
			nextEl: ".events-arrow-right"
		},
	})
	document.querySelector(".events__arrows").style.display = "grid";
}

if (window.innerWidth <= 1440) {

	if (document.querySelector(".events__columns")) {
		document.querySelector(".events__columns").classList.add("swiper-container")

	}
	if (document.querySelector(".events__wrapper")) {
		document.querySelector(".events__wrapper").classList.add("swiper-wrapper")
	}
	document.querySelectorAll(".events__column").forEach((item) => {
		if (document.querySelectorAll(".events__column")) {
			item.classList.add("swiper-slide");
		}
	})
	new Swiper(".events__columns", {

		watchOverflow: true,
		autoHeight: true,
		spaceBetween: 30,
		autoHeight: true,
		breakpoints: {
			1440: {
				slidesPerView: 2
			},
			1024: {
				slidesPerView: 1
			},
			862: {
				//centeredSlides: true,
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			}
		},
		navigation: {
			prevEl: ".events-arrow-left",
			nextEl: ".events-arrow-right"
		},
	})
	if (document.querySelector(".events__arrows")) {
		document.querySelector(".events__arrows").style.display = "flex";
	}
}


//Новый слайдер уже в баре

new Swiper(".photos-bar__image-slider", {
	slidesPerView: 1,
	watchOverflow: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	}
})


//========ОЧЕНЬ-СЛОЖНЫЙ-СЛАЙДЕР=======================================================================================================================================================================================================================================================================================
new Swiper(".main-slider__container", {
	watchOverflow: true,
	spaceBetween: 24,
	autoHeight: true,
	pagination: {
		el: ".swiper-pagination.main-slider__dotts",
		clickable: true,
	},
	navigation: {
		prevEl: ".main-slider-arrow-prev",
		nextEl: ".main-slider-arrow-next",
	},
})
if (document.getElementById("aboutlink")) {
	document.getElementById("aboutlink").addEventListener("click", function (e) {
		document.getElementById("about").scrollIntoView(top)
		document.querySelector(".burger-menu").classList.remove("active")
		document.body.classList.toggle("scroll-lock")
		burgerOne.classList.remove("active")

	})
	document.getElementById("placeslink").addEventListener("click", function (e) {
		document.getElementById("places").scrollIntoView(top)
		document.querySelector(".burger-menu").classList.remove("active")
		document.body.classList.toggle("scroll-lock")
		burgerOne.classList.remove("active")
	})
	document.getElementById("barhoukahlink").addEventListener("click", function (e) {
		document.getElementById("barhoukah").scrollIntoView(top)
		document.querySelector(".burger-menu").classList.remove("active")
		document.body.classList.toggle("scroll-lock")
		burgerOne.classList.remove("active")
	})
	document.getElementById("serviceslink").addEventListener("click", function (e) {
		document.getElementById("services").scrollIntoView(top)
		document.querySelector(".burger-menu").classList.remove("active")
		document.body.classList.toggle("scroll-lock")
		burgerOne.classList.remove("active")
	})
}

