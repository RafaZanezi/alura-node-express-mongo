import express from 'express';
import LivroController from '../controllers/livrosController.js';

const routerLivros = express.Router();

routerLivros.get('/livros', LivroController.listarLivros);
routerLivros.get('/livros/busca', LivroController.listarLivrosPorEditora);
routerLivros.get('/livros/:id', LivroController.obterLivroPorId);
routerLivros.post('/livros', LivroController.cadastrarLivro);
routerLivros.put('/livros/:id', LivroController.alterarLivro);
routerLivros.delete('/livros/:id', LivroController.excluirLivro);

export default routerLivros;
