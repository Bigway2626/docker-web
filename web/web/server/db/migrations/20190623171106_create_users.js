
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function (table) {
        table.charset('utf8mb4');
        table.collate('utf8mb4_unicode_ci');

        table.increments('id').primary();
    table.integer('number');
    table.string('name');
    table.text('content');
    
    
    
  });
};

exports.down = function(knex, Promise) {
  
};
