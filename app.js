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


app.get('/', (req, res) => {
  const url = 'http://afdah.to/category/hd/'
  request(url, (error, response, html) => {

    if(!error){
      let $ = cheerio.load(html.toString())
      let hdmovies = []

      $('h3.entry-title a').each( (index, element) => {
        hdmovies.push({ title : element.children[0].data, url : element.attribs.href })
      })
      res.render('index', {hdmovies})
    }
  })
})
app.get('/imdb', (req, res) => {
  const url = 'http://afdah.to/top-imdb/'
  request(url, (error, response, html) => {

    if(!error){
      let $ = cheerio.load(html.toString())
      let imdbmovies = []

      $('h3.entry-title a').each( (index, element) => {
        imdbmovies.push({ title : element.children[0].data, url : element.attribs.href })
      })
      res.render('imdb', {imdbmovies})
    }
  })
})
app.get('/cinema', (req, res) => {
  const url = 'http://afdah.to/category/cinema/'
  request(url, (error, response, html) => {

    if(!error){
      let $ = cheerio.load(html.toString())
      let cinemamovies = []

      $('h3.entry-title a').each( (index, element) => {
        cinemamovies.push({ title : element.children[0].data, url : element.attribs.href })
      })
      res.render('cinema', {cinemamovies})
    }
  })
})

app.listen('8081')

module.exports = app
