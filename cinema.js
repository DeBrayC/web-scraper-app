// const express = require('express')
// const fs = require('fs')
// const request = require('request')
// const cheerio = require('cheerio')
// const app = express()
// const util = require('util')
// const path = require('path')
//
//
// const cinema = (html) => {
//   let url = 'http://afdah.to/category/cinema/'
//   let cinemamovies = []
//
//
//       if(!error){
//         let $ = cheerio.load(html.toString())
//
//         $('h3.entry-title a').each( (index, element) => {
//           cinemamovies.push({ title : element.children[0].data, url : element.attribs.href })
//         })
//     })
//     return cinemamovies
//   })
//
//
// module.exports = cinema
