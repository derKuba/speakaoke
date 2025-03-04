const dotenv = require('dotenv');
dotenv.config();

const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateSchema = {
    body: {
        type: 'object',
        required: ['keyword'],
        properties: {
            keyword: { type: 'string', minLength: 2, maxLength: 50 },
        },
    },
};

module.exports = async function (fastify) {
    fastify.setErrorHandler(function (error, request, reply) {
        if (error.validation) {
            reply.status(422).send(new Error('validation failed'));
        }
    });

    fastify.post('/', { schema: generateSchema }, async (request, reply) => {
        const { keyword } = request.body;
        if (!keyword) {
            return reply.status(400).send({ error: 'Keyword ist erforderlich' });
        }

        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'user',
                        content: `
                        Erstelle eine kurze Präsentation über ${keyword}.
                        Erzeuge zuerst ein Deckblatt als separate Folie, 
                        dann 5 inhaltliche Folien zu dem Thema.
                        Trenne jede Folie mit einer Zeile, in der nur "---" steht.
                        Kennzeichne jede Folienüberschrift mit ###, ohne das Wort „Folie“ oder „Präsentation“.
                        Bitte fasse dich kurz und verwende bei Bedarf Stichpunkte.
                        Die letzte Folie enthält die Worte "Ende - noch fragen?"
                        `,
                    },
                ],
                max_tokens: 500,
            });
            console.log(response);
            const slides = response.choices[0].message.content
                .split('\n')
                .filter((line) => line.trim());

            return reply.send({ keyword, slides });
        } catch (error) {
            fastify.log.error(error);
            return reply.status(500).send({ error: 'Fehler bei der OpenAI-Anfrage' });
        }
    });
};
