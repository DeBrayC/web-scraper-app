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

    url = data.children().first().href()
    title = data.children().last().text()


  })

}

})

})

app.listen('8081')

console.log('Port 8081, where ALL the Magic Happens...')

exports = module exports = app
