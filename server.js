const express = require('express')
const { append } = require('express/lib/response')

const server = express()
    port = process.env.PORT || 5000

server.set('view engine', 'ejs')
server.listen(port)
server.use(express.static('assets'))

server.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})

server.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

server.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' })
})

server.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})