/**
 * @module app
 * @author Joeverton Bento de Sousa
 * @description Este módulo inicializa e configura o servidor da API Express.
 */

// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

// Dependências
const express = require("express");
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bodyParser = require("body-parser");

// Cria uma instância do aplicativo Express
const app = express();

// Importa as rotas de leads
const leadRoutes = require('./routes/leadRoutes');

/**
 * @constant {Array} whitelist - Lista de domínios permitidos para acessar a API.
 */
const whitelist = ['http://localhost:3000', 'http://127.0.0.1:5500/testeserv.html', 'http://127.0.0.1:5500'];

/**
 * @constant {Object} corsOptions - Opções para o middleware CORS.
 */
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  }
}

/**
 * @constant {Object} apiLimiter - Middleware para limitação de taxa.
 */
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

// Utiliza o middleware helmet para definir vários cabeçalhos HTTP
app.use(helmet());

// Analisa os corpos das requisições recebidas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve arquivos estáticos do diretório 'public' (se houver)
app.use(express.static('public'));

// Habilita o CORS com as opções fornecidas
app.use(cors(corsOptions));

// Utiliza o middleware de limitação de taxa em rotas específicas, neste caso, a rota de lead
app.use("/consultar", apiLimiter);
app.use("/criar", apiLimiter);

// Utiliza as rotas de lead
app.use("/leads", leadRoutes);

// Inicia o servidor Express na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

/**
 * @exports app - Exporta o aplicativo Express configurado para uso em outros módulos.
 */
module.exports = app;
