/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Finetable", table => {
        table.increments("id").primary();
        table.integer("bookid").unsigned().references('books.id')
        table.integer("userid").unsigned().references('users.id')
       
        table.integer('fineamount')
       
    });
};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
