const checkboxes = document.querySelectorAll(`[type="checkbox"]`);

let lastChecked;

function handleCheck (e) {
	let inBetween = false;
	if(e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			if(checkbox.checked && inBetween === true) {
				inBetween = false;
			} else if(checkbox.checked){
				inBetween = true;
			} else if (inBetween === true && !checkbox.checked) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));