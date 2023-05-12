/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("bookrent", table => {
        table.increments("id").primary();
        table.integer("bookid").unsigned().references('books.id')
        table.integer("userid").unsigned().references('users.id')
        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('issuedate')
        table.dateTime('returndate')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
