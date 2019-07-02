const db = require('../../db/db');

module.exports = {
    getNotes: async (ctx) => {
        try {
            const notes = await db.select().table('notes');

            ctx.status = 200;
            ctx.body = notes;
        } catch (error) {
            ctx.status = 500;
            ctx.body = error;
        }
    },
    getNoteById: async (ctx) => {
        try {
            const { id } = ctx.request.query;

            const notes = await db('notes')
                .where('id', id)
                .first();

            ctx.status = 200;
            ctx.body = notes;
        } catch (error) {
            ctx.status = 500;
            ctx.body = error;
        }
    },
    addNote: async (ctx) => {
        try {
            const { title, content } = ctx.request.body;

            await db('notes').insert({
                title: title,
                content: content
            });

            ctx.status = 200;
            ctx.body = '新增成功!';
        } catch (error) {
            ctx.status = 500;
            ctx.body = error;
        }
    },
    deleteNote: async (ctx) => {
        try {
            const { id } = ctx.request.body;

            await db('notes')
                .where('id', id)
                .del();

            ctx.status = 200;
            ctx.body = '刪除成功!';
        } catch (error) {
            ctx.status = 500;
            ctx.body = error;
        }
    },
    updateNote: async (ctx) => {
        try {
            const { id, title, content } = ctx.request.body;

            await db('notes')
                .where('id', id)
                .update({
                    title: title,
                    content: content
                });

            ctx.status = 200;
            ctx.body = '修改成功!';
        } catch (error) {
            ctx.status = 500;
            ctx.body = error;
        }
    }
};