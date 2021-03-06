const hero = document.querySelector(".hero");
const text = document.querySelector("h1");

function shadow (e) {
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;
	let x = e.offsetX;
	let y = e.offsetY;
	let walk = 100;

	if(this != e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / width * walk) - (walk / 2));

	text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;

}

addEventListener("mousemove", shadow);