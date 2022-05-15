const express = require('express')
const { append } = require('express/lib/response')

const server = express()
    port = process.env.PORT || 5000

server.set('view engine', 'ejs')
server.listen(port)
server.use(express.static('assets'))

server.get('/', (req, res) => {
    res.render('index', {
        title: 'Além do desenvolvimento, uma experiência em design',
        headerWhite: true
    })
})

server.get('/sobre', (req, res) => {
    res.render('sobre', {
        title: 'Um pouco da nossa trajetória',
        headerWhite: false
    })
})

server.get('/contato', (req, res) => {
    res.render('contato', {
        title: 'Tire suas dúvidas ou fale com a gente!',
        headerWhite: false
    })
})

server.use((req, res) => {
    res.status(404).render('404', {
        title: '404',
        headerWhite: false
    })
})