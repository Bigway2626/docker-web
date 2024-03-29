exports.up = function (knex, Promise) {
  return knex.schema.createTable('notes', function (table) {
    table.charset('utf8mb4');
    table.collate('utf8mb4_unicode_ci');
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('content').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('notes');
};
