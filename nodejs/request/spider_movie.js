var request = require('request')
var iconv = require('iconv-lite')
var cheerio = require('cheerio')

var getPage = (url, cb) => {
    const options = {
        url,
        encoding: null,
    }
    request(url, cb)
}

var pageList = Array.from({length: 23}, (v, i) => i+1)
// console.log(pageList)
// pageList.forEach(item => {
//     var url = `https://www.dy2018.com/i/${item}.html`
//     getPage(url, (err, res, page) => {
//         // const html = iconv.decode(page, 'gb2312')
//         const $ = cheerio.load(page)
//         console.log($('.title_all h1').text())
//     })
// })

var url = 'https://movie.douban.com/'

getPage(url, (err, res, page) => {
    // console.log(page)
    // const html = iconv.decode(page, 'gb2312')
    // console.log(html)
    const $ = cheerio.load(page)
    console.log($('img').attr('alt'))
})