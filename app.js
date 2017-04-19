const express = require('express')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const app = express()
const util = require('util')
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


const scrape = (url) => {
}
app.get('/', (req, res) => {
  const url = 'http://afdah.to/category/hd/'
  request(url, (error, response, html) => {

    if(!error){
      let $ = cheerio.load(html.toString())
      let movies = []

      $('h3.entry-title a').each( (index, element) => {
        movies.push({ title : element.children[0].data, url : element.attribs.href })
      })
      res.render('index', {movies})
    }
  })
})

app.get('/scrape', (req, res) => {

})

app.listen('8081')

module.exports = app
