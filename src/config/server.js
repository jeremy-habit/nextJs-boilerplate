import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import {NextI18NextInstance} from './i18n.js';
import {url} from './url';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();
    server.use(nextI18NextMiddleware(NextI18NextInstance));


    /** ::::::::::::::: ROUTING ::::::::::::::: **/

    server.get(url.root.express.pattern, (req, res) => {
        return app.render(req, res, url.root.express.page);
    });

    server.get(url.login.express.pattern, (req, res) => {
        return app.render(req, res, url.login.express.page);
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console

})();
