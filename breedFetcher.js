const request = require('request')
//var args = process.argv.slice(2);
//const breed = args[0]

const fetchBreedDescription = function(breedName, callback) {
  const URL =  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  request(URL, (error, response, body) => {
    if (error){
      callback(`URL not found ${error}`, null);
      return;
    }
    const data = JSON.parse(body)
    if (!data[0]) {
      callback(`Breed not found!`, null)
      return;
    }
    callback(null, data[0].description)
  })
}
module.exports = {fetchBreedDescription}