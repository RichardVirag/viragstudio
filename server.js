const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

// Server config
    const server = express(),
        port = process.env.PORT || 5000;

    server.listen(port);
    server.use(express.static(path.join(__dirname, 'assets')));

    server.set('view engine', 'handlebars');
    server.engine('handlebars', handlebars.engine({
        defaultLayout: 'main'
    }));

// Funções e models

    function renderPortfolio(res) {
        res.render("portfolio", {
            title: "Personalizado de ponta a ponta em cada projeto"
        });
    }
    function renderPortfolioBranding(res) {
        res.render("portfolio", {
            title: "Personalizado de ponta a ponta em cada projeto",
            brandingActive: true
        });
    }
    function renderPortfolioWebDevelopment(res) {
        res.render("portfolio", {
            title: "Personalizado de ponta a ponta em cada projeto",
            webdevelopmentActive: true
        });
    }
    function renderPortfolioSistemasWeb(res) {
        res.render("portfolio", {
            title: "Personalizado de ponta a ponta em cada projeto",
            sistemasActive: true
        });
    }

    function renderServicos(res) {
        res.render("servicos", {
            title: "A melhor solução pra você",
            headerClass: 'white-header'
        });
    }
    function renderServicosBranding(res) {
        res.render("branding", {
            title: "A construção e gestão da marca da sua empresa",
            brandingActive: true
        });
    }
    function renderServicosWebDevelopment(res) {
        res.render("webdevelopment", {
            title: "Marque presença na web agora mesmo",
            webdevelopmentActive: true
        });
    }
    function renderServicosSistemasWeb(res) {
        res.render("sistemasweb", {
            title: "Funcionais e otimizados com a sua necessidade",
            sistemasActive: true
        });
    }
    function renderServicosDigitalStrategy(res) {
        res.render("digitalstrategy", {
            title: "Alinhando propósito a estratégia certa",
            strategyActive: true
        });
    }

    const tiposPortfolio = {
        branding: renderPortfolioBranding,
        webdevelopment: renderPortfolioWebDevelopment,
        sistemasweb: renderPortfolioSistemasWeb
    }

    const tiposServicos = {
        branding: renderServicosBranding,
        webdevelopment: renderServicosWebDevelopment,
        sistemasweb: renderServicosSistemasWeb,
        digitalstrategy: renderServicosDigitalStrategy
    }

// Rotas

    server.get("/", (req, res) => {
        res.render("index", {
            title: "Além do desenvolvimento, uma experiência em design",
            headerClass: 'white-header'
        });
    });

    server.get("/portfolio/:tipo?", (req, res) => {
        if (!req.params.tipo) {
            renderPortfolio(res);
            return;
        }

        if (tiposPortfolio[req.params.tipo]) {
            tiposPortfolio[req.params.tipo](res);
        }
    });
    
    server.get("/sobre", (req, res) => {
        res.render("sobre", {
            title: "Projetando e conectando ideias é a nossa essência"
        });
    });

    server.get("/contato", (req, res) => {
        res.render("contato", {
            title: "Tire suas dúvidas ou fale com a gente!"
        });
    });

    server.get("/servicos/:tipo?", (req, res) => {
        if (!req.params.tipo) {
            renderServicos(res);
            return;
        }

        if (tiposServicos[req.params.tipo]) {
            tiposServicos[req.params.tipo](res);
        }
    });

    server.get("/orcamento", (req, res) => {
        res.render("orcamento", {
            title: "Vamos criar algo incrível jusnto!"
        });
    });

    server.use((req, res) => {
        res.status(404).render("404", {
            title: "404",
            headerClass: 'white-header'
        });
    });