import livros from '../models/livro.js';

class LivroController {

    static listarLivros = async (_, res) => {
        try {
            const result = await livros.find().populate('autor', 'nome').exec();

            if (!result) {
                res.status(404).send({ message: 'Nenhum livro encontrado' });
            }

            res.status(200).json(result);
        } catch (err) {
            res.status(err.status).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    };

    static obterLivroPorId = async (req, res) => {
        try {
            const result = await livros.findById(req.params.id);

            if (!result) {
                res.status(404).send({ message: 'Livro não encontrado' });
            }

            res.status(200).json(result);
        } catch (err) {
            res.status(err.status || 500).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }

    static cadastrarLivro = async (req, res) => {
        try {
            const livro = new livros(req.body);
            const result = await livro.save();

            res.status(201).json(result);
        } catch (err) {
            res.status(err.status || 500).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }

    static alterarLivro = async (req, res) => {
        try {
            const result = await livros.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

            if (!result) {
                res.status(404).send({ message: 'Livro não encontrado' });
            }

            res.status(200).json(result);   
        } catch (err) {
            res.status(err.status || 500).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }

    static excluirLivro = async (req, res) => {
        try {
            const result = await livros.findByIdAndDelete(req.params.id);

            if (!result) {
                res.status(404).send({ message: 'Livro não encontrado' });
            }

            res.status(200).json({ message: 'Livro removido com sucesso' });
        } catch (err) {
            res.status(err.status || 500).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }

    static listarLivrosPorEditora = async (req, res) => {
        try {
            const result = await livros.find({ editora: req.query.editora }).populate('autor').exec();

            if (!result) {
                res.status(404).send({ message: 'Nenhum livro encontrado' });
            }

            res.status(200).json(result);
        } catch (err) {
            res.status(err.status).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }   
}

export default LivroController;