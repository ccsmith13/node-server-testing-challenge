exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('cookies')
      .truncate()
      .then(function() {
        return knex('cookies').insert([
          { name: 'chocolate chip' },
          { name: 'sugar' },
          { name: 'snickerdoodle' },
          { name: 'peanut butter' },
        ]);
      });
  };