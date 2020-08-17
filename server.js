// OLD WAY OF SERVERS! DO NOT USE THIS METHOD! 

const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/movies':
            fs.readFile('movies.html', 'utf8', (err, html) => {
                if (err) { console.log(err) }
                res.end(html)
            })
            break
        case '/songs':
            fs.readFile('songs.html', 'utf8', (err, html) => {
                if (err) { console.log(err) }
                res.end(html)
            })
            break
        case '/food':
            fs.readFile('food.html', 'utf8', (err, html) => {
                if (err) { console.log(err) }
                res.end(html)
            })
            break
        case '/games':
            fs.readFile('games.html', 'utf8', (err, html) => {
                if (err) { console.log(err) }
                res.end(html)
            })
            break
    }

})