window.addEventListener("keydown", function(e) {
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; //zmáčknutí neasociované klávesy přeruší funkci
	audio.currentTime = 0; // přetočit na začátek
	audio.play();
	key.classList.add("playing");
});

let removeTransition = function(e) {
	if(e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));