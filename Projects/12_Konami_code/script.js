const pressed = [];
const winCode = "win";

window.addEventListener("keyup", (e) => {
	pressed.push(e.key);
	pressed.splice(-winCode.length - 1, pressed.length - winCode.length);
	console.log(pressed);
	if(pressed.join("").includes(winCode)) {
		console.log("You win!");
	}
});
