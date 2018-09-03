//moved from node_modules to libs folder
const moment = require('../../public/js/libs/moment');
var colors = ['blue', 'green', 'red', 'yellow', 'pink', 'cyan'];

let generateMessage = (from, text) => {
	var randColor = colors[Math.floor(Math.random() * colors.length)];
	return {
		from,
		text,
		randColor,
		createdAt: moment().valueOf() //returns current timestamp
	};
};

let generateGif = (from, url) => {
	var randColour = colors[Math.floor(Math.random() * colors.length)];
	return {
		from,
		url,
		randColour,
		createdAt: moment().valueOf()
	}
};


module.exports = {generateMessage, generateGif};

// let generateLocation = (from, lat, long) => {
// 	return {
// 		from,
// 		url: `https://www.google.com/maps?q=${lat},${long}`,
// 		createdAt: moment().valueOf()
// 	};
// };