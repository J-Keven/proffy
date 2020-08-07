import Knex from 'knex'


export async function up(knex: Knex) {
  return knex.schema.createTable("connection", table => {
    table.increments('id').primary();

    table.integer('user_id')
      .notNullable()
      .references("id")
      .inTable('user')
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("created_at")
      .defaultTo("now()")
      .notNullable();

  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable("connection");
};
