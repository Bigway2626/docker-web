const router = require('koa-router')();

const noteController = require('../controller/note');

module.exports = app => {
    router.get('/notes', noteController.getNotes);
    router.get('/notes/:id', noteController.getNoteById);
    router.post('/notes', noteController.addNote);
    router.delete('/notes/:id', noteController.deleteNote);
    router.put('/notes/:id', noteController.updateNote);

    app.use(router.routes(), router.allowedMethods());
};