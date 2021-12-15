exports.up = function(knex) {
    return knex.schema
    .createTable('profile', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.string('description', 255).notNullable();
       table.string('specialty', 255).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("profile");
};

