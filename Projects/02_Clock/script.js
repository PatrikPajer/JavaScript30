const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes/60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	let hours = now.getHours();
	if(hours > 12) {
		hours -= 12;
	};
	const hoursDegrees = ((hours * 30) + 90);
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	console.log(hours);
};

setInterval(setDate, 1000);