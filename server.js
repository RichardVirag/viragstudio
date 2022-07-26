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

// Rotas

    server.get("/", (req, res) => {
        res.render("index", {
            title: "Além do desenvolvimento, uma experiência em design",
            headerClass: 'white-header'
        });
    });

    server.get("/portfolio", (req, res) => {
        res.render("portfolio", {
            title: "Personalizado de ponta a ponta em cada projeto"
        });
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

    server.get("/servicos", (req, res) => {
        res.render("servicos", {
            title: "A melhor solução pra você",
            headerClass: 'white-header'
        });
    });

    server.get("/servicos/:tipo", (req, res) => {
        switch (req.params.tipo) {
            case "branding":
                res.render("branding", {
                    title: "A construção e gestão da marca da sua empresa",
                    brandingActive: true
                });
            case "web-development":
                res.render("webdevelopment", {
                    title: "Marque presença na web agora mesmo",
                    webdevelopmentActive: true
                });
                break;
            case "sistemas-web":
                res.render("sistemasweb", {
                    title: "Funcionais e otimizados com a sua necessidade",
                    webdevelopmentActive: true
                });
                break;
            case "digital-strategy":
                res.render("digitalstrategy", {
                    title: "Alinhando propósito a estratégia certa",
                    webdevelopmentActive: true
                });
                break;
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