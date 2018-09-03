const axios = require('axios');


let getGif = (searchString) => {
	
	let giphyUrl = `https://api.giphy.com/v1/gifs/translate?api_key=DWFeZJEpRQv9xUqT9KYUF7mNhbT5DZ7G&s=${searchString}`;

	return axios.get(giphyUrl)
		.then((response) => {
			let gifUrl = response.data.data.images.original.url;
			console.log('Success: ', response.data.data.images.fixed_width.url);
			return gifUrl;
		})
		.catch((errObj) => {
			console.log('Error: ', errObj.message);
		});
};

module.exports = {getGif};
