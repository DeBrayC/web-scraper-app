const express = require('express')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const app = express()

app.get('/scrape', (req, res) => {

url = 'http://afdah.to/category/hd/'

request(url, (error, response, html) => {

if(!error){
  let $ = cheerio.load(html)

  let title, url
  let json = { title : "", url : "" }

  $('.entry-title').filter( () => {

    let data = $(this)

    title = data.children().last().text()
    url = data.children().first().href()

    json.title = title
    json.release = release

  })

}

fs.writeFile('output.json', JSON.stringify(json, null, 2), (err) => {

console.log('Yo! The Mothership is Scrapin... - Check the output.json');

})

res.send('Check your console!')

  })

})

app.listen('8081')

console.log('Port 8081, where ALL the Magic Happens...')

module.exports = app
