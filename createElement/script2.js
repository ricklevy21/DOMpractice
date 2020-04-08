//Creating Elements through the DOM

var h1EL = document.createElement("h1");
var h2EL = document.createElement("h2");
var imgEL = document.createElement("img");
var linkEL = document.createElement("a");


h1EL.textContent = "This is an h1 tag";
document.body.appendChild(h1EL);

h2EL.textContent = "This is an h2 tag";
h2EL.style.color = "blue";
document.body.appendChild(h2EL);

imgEL.setAttribute("src", "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg");
imgEL.setAttribute("width", "304");
imgEL.setAttribute("height", "228");
imgEL.setAttribute("alt", "A stock photo");
document.body.appendChild(imgEL);


linkEL.setAttribute("href", "https://github.com");
linkEL.textContent = "Check out my github";
document.body.appendChild(linkEL);

