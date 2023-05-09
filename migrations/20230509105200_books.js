/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("books", table => {
        table.increments("id").primary();
        table.string("Name").notNullable();
        table.string("author").notNullable();
        table.string("category").notNullable();
        table.integer("price").notNullable();
        table.integer("totalBooks").notNullable();
        table.integer("booktaken").defaultTo(0)
        table.dateTime('created_at').defaultTo(knex.fn.now());
        
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
