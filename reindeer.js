/* 
Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.
 */

var hohohoElement = []

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"]; 

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


for (var name = 0; name < reindeer.length; name++) {
	hohohoElement.push(" " + colors[name] + " " + reindeer[name]);
	}
	console.log(hohohoElement)
	document.getElementById("coloredReindeer").innerHTML = hohohoElement;

