
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        {id: 1, name: 'ana', email:'email@email.jp', message:'message'}
      ]);
    });
};
