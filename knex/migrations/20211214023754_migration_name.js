
exports.up = function(knex) {
    return knex.schema
    .dropTable('users', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.string('email', 255).notNullable();
       table.string('message', 255).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("users");
};
