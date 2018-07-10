
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('default').del()
    .then(function () {
      // Inserts seed entries
      return knex('default').insert([
        {id: 1, name: 'name 1'},
        {id: 2, name: 'name 2'},
        {id: 3, name: 'name 3'}
      ])
    })
}
