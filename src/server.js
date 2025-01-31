// Servidor
const express = require('express')
const server = express()

const  {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configurações do servidor
server
// receber os dadod req.body
.use(express.urlencoded({extended: true }))
// configurar arquivos estaticos (css, scripts, images)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5500)