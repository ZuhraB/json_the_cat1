const request = require('request')
var args = process.argv.slice(2);
const breedName = args[0]
const URL =  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

request(URL, (error, response, body) => {
  if (error){
    console.log(`URL not found ${error}`, null);
  }
  const data = JSON.parse(body)
  if (!data[0]) {
    console.log(`Bread not found!`, null)
  }
  console.log(data[0].description)
})