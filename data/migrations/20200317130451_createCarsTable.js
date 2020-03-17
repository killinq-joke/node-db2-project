exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .text("name", 24)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
