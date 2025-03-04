'use strict';

require('dotenv').config();

const Fastify = require('fastify');

const closeWithGrace = require('close-with-grace');

const app = Fastify({
    logger: {
        level: 'info',
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
            },
        },
    },
});

const appService = require('./app.js');
app.register(appService);

const closeListeners = closeWithGrace(
    { delay: 500 },
    // eslint-disable-next-line no-unused-vars
    async function ({ signal, err, manual }) {
        if (err) {
            app.log.error(err);
        }
        await app.close();
    }
);

app.addHook('onClose', async (instance, done) => {
    closeListeners.uninstall();
    done();
});

app.listen({ host: process.env.HOST || '127.0.0.1', port: process.env.PORT || 3000 }, (err) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});

process.once('SIGINT', closeWithGrace);
process.once('SIGTERM', closeWithGrace);
