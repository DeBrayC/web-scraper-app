const express = require('express')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const app = express()
const util = require('util')
const path = require('path')
const cinema = require('./cinema')
const imdb = require('./imdb')
const rp = require('request-promise')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


let url1 = 'http://afdah.to/category/hd/'
let url2 = 'http://afdah.to/category/cinema/'
let url3 = 'http://afdah.to/top-imdb/'

app.get('/', (req, res) => {
  Promise.all([rp(url1), rp(url2), rp(url3)])
    .then(function([html1, html2, html3]) {
      rp(function(error, response, html) {
        if(!error){
          let $ = cheerio.load(html.toString())
          let movies = []
          $('h3.entry-title a').each( (index, element) => {
            movies.push({ title : element.children[0].data, url : element.attribs.href })
          })
          res.render('index')
        }
      })
    })
  })
app.listen('8081')

module.exports = app
