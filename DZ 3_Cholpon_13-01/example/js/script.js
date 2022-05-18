const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

let slideIndex = 0;
function currentSlide(n) {
  showSlides(slideIndex = n);
}

	function showSlides(n) {
		let slides = document.querySelectorAll(".tabheader__item");
		let slides1 = document.querySelectorAll(".tabcontent");
		 if (n > slides.length && n > slides1.length) {
				slideIndex += 1;
		}
		if (n < 0) {
			slideIndex = slides.length && slideIndex == slides1.length;
		}
		for (let slide of slides) {
			slide.classList.remove("tabheader__item_active");
		}
			slides[n].classList.add("tabheader__item_active");
			
			for (let slide of slides1) {
        slide.style.display = "none";
		}
		slides1[slideIndex].style.display = "block";
	}

let timer = 0;
	 makeTimer(); 
	 function makeTimer(){
		clearInterval(timer)
		timer = setInterval(function(){
			slideIndex++; {
				if (slideIndex >=4) {
					slideIndex = 0;
				}
			}
			showSlides(slideIndex);
			},2000);
		}


const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

console.log(modal, "modal");
console.log(modalTrigger, " modalTrigger");
console.log(closeModalBtn, " closeModalBtn");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
    console.log(event.target);
  }
});
closeModalBtn.addEventListener("click", closeModal);
