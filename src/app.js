import page from '//unpkg.com/page/page.mjs';
import { html, render } from '//unpkg.com/lit-html?module';

const options = {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b9d3085a18msh5adb9f4f8ebc979p193186jsna16d9c4f8ee5",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}};

const movieName = encodeURI('q=fast');
const response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?" + movieName, options);
const data = await response.json();
console.log(data.d);


