let url = document.getElementById("url");
let name = document.getElementById("name");
let year = document.getElementById("year");
let button = document.getElementById("button");

button.onclick = function () {
	let nameValue = "?name="name.textContent;
	let yearValue = year.textContent;
	
	let urlValue = url.textContent;
	url.textContent = urlValue+nameValue;
}
