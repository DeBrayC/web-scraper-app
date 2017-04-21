// const express = require('express')
// const fs = require('fs')
// const request = require('request')
// const cheerio = require('cheerio')
// const app = express()
// const util = require('util')
// const path = require('path')
//
// const imdb = (html) => {
//   let imdbmovies = []
//
//     let url = 'http://afdah.to/top-imdb/'
//
//       if(!error){
//         let $ = cheerio.load(html.toString())
//
//         $('h3.entry-title a').each( (index, element) => {
//           imdbmovies.push({ title : element.children[0].data, url : element.attribs.href })
//         })
//
//     })
//     return imdbmovies
//   })
// }
//
//
// module.exports = imdb
