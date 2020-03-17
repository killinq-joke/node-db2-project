exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .text("name", 24)
      .unique()
      .notNullable();
    table.string("VIN", 17).notNullable();
    table.text("make", 24).notNullable();
    table.text("model", 24).notNullable();
    table.integer("mileage").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
