import express from 'express';
import AutorController from '../controllers/autoresController.js';

const routerAutores = express.Router();

routerAutores.get('/autores', AutorController.listarAutores);
routerAutores.get('/autores/:id', AutorController.obterAutorPorId);
routerAutores.post('/autores', AutorController.cadastrarAutor);
routerAutores.put('/autores/:id', AutorController.alterarAutor);
routerAutores.delete('/autores/:id', AutorController.excluirAutor);

export default routerAutores;
