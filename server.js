const express = require('express')
const { append } = require('express/lib/response')

const server = express(),
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

server.get('/portfolio', (req, res) => {
    res.render('portfolio', {
        title: 'Personalizado de ponta a ponta em cada projeto',
        headerWhite: false
    })
})

server.get('/sobre', (req, res) => {
    res.render('sobre', {
        title: 'Projetando e conectando ideias é a nossa essência',
        headerWhite: false
    })
})

server.get('/servicos', (req, res) => {
    res.render('servicos', {
        title: 'A melhor solução pra você',
        headerWhite: true
    })
})

server.get('/contato', (req, res) => {
    res.render('contato', {
        title: 'Tire suas dúvidas ou fale com a gente!',
        headerWhite: false
    })
})

server.get('/orcamento', (req, res) => {
    res.render('orcamento', {
        title: 'Vamos criar algo incrível jusnto!',
        headerWhite: false
    })
})

server.use((req, res) => {
    res.status(404).render('404', {
        title: '404',
        headerWhite: true
    })
})