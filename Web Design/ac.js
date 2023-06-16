'use strict';

document.addEventListener('DOMContentLoaded', function () {
	// This part is for the mobile version of ACs
	let homeCirc = document.getElementById('mob-circle1');
	let artistsCirc = document.getElementById('mob-circle2');
	let aboutCirc = document.getElementById('mob-circle3');

	let homeText = document.getElementById('h2-1');
	let artistText = document.getElementById('h2-2');
	let aboutText = document.getElementById('h2-3');

	let mobImg = document.querySelector('.mob-img');
	homeCirc.addEventListener('click', function () {
		artistsCirc.classList.remove('mob-circle');
		aboutCirc.classList.remove('mob-circle');

		artistText.style.color = '#db0047';
		aboutText.style.color = '#db0047';
		homeText.style.color = '#f28531';
		homeCirc.classList.add('mob-circle');

		mobImg.src = '../Images/A&C website/A&C home page.jpg';
	});
	artistsCirc.addEventListener('click', function () {
		aboutCirc.classList.remove('mob-circle');
		homeCirc.classList.remove('mob-circle');

		artistText.style.color = '#f28531';
		aboutText.style.color = '#db0047';
		homeText.style.color = '#db0047';

		artistsCirc.classList.add('mob-circle');

		mobImg.src = '../Images/A&C website/A&C artists page.jpg';
	});
	aboutCirc.addEventListener('click', function () {
		artistsCirc.classList.remove('mob-circle');
		homeCirc.classList.remove('mob-circle');

		artistText.style.color = '#db0047';
		aboutText.style.color = '#f28531';
		homeText.style.color = '#db0047';

		aboutCirc.classList.add('mob-circle');

		mobImg.src = '../Images/A&C website/A&C about.png';
	});
});
