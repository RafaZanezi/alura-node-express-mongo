import autores from '../models/Autor.js';

class AutorController {

    static listarAutores = async (_, res) => {
        try {
            const result = await autores.find();

            if (!result) {
                res.status(404).send({ message: 'Nenhum autor encontrado' });
            }

            res.status(200).json(result);
        } catch (err) {
            res.status(err.status).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    };

    static obterAutorPorId = async (req, res) => {
        try {
            const result = await autores.findById(req.params.id);

            if (!result) {
                res.status(404).send({ message: 'Autor não encontrado' });
            }

            res.status(200).json(result);
        } catch (err) {
            res.status(err.status || 500).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }

    static cadastrarAutor = async (req, res) => {
        try {
            const autor = new autores(req.body);
            const result = await autor.save();

            res.status(201).json(result);
        } catch (err) {
            res.status(err.status || 500).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }

    static alterarAutor = async (req, res) => {
        try {
            const result = await autores.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

            if (!result) {
                res.status(404).send({ message: 'Autor não encontrado' });
            }

            res.status(200).json(result);   
        } catch (err) {
            res.status(err.status || 500).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }

    static excluirAutor = async (req, res) => {
        try {
            const result = await autores.findByIdAndDelete(req.params.id);

            if (!result) {
                res.status(404).send({ message: 'Autor não encontrado' });
            }

            res.status(200).json({ message: 'Autor removido com sucesso' });
        } catch (err) {
            res.status(err.status || 500).send({ message: `${err.message} - falha ao processar a requisição` });
        }
    }
}

export default AutorController;