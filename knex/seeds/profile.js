
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {id: 1, 
          name: 'Julia Ivan', 
          description: 'Julia is a licensed Family Therapist in London. She has been working in the mental health field for over ten years, and has experience working with adults, children and families who have experienced trauma.', 
          specialty: 'Family Therapy, Counseling and Psychotherapy'},
      ]);
    });
};
