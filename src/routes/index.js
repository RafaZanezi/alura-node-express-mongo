import express from 'express';
import routerLivros from './livrosRoutes.js';
import routerAutores from './autoresRoutes.js';

const routes = (app) => {
    app.route('/').get((_, res) => {
        res.status(200).send({ title: 'Curso de Node' });
    });

    app.use(
        express.json(),
        routerLivros,
        routerAutores,
    );
}

export default routes;