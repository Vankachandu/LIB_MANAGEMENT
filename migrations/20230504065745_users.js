/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.string("Name", 10).notNullable();
        table.string("Email", 50).notNullable();
        table.string("password").notNullable();
        table.string("role").defaultTo('user').notNullable();
        table.boolean('type').defaultTo(true);
        table.string("Address", 100).notNullable();
        table.bigInteger("phoneNumber",10).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('upadted_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};