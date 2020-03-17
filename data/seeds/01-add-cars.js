
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, name: 'zakcar', VIN: 'AD12ADDZA2', make: 'ferrari', model: 'bw 12', mileage: 10000},
        {id: 2, name: 'eoincar', VIN: 'AD12ADDZA2', make: 'ferrari', model: 'bw 12', mileage: 10000},
        {id: 3, name: 'alicar', VIN: 'AD12ADDZA2', make: 'ferrari', model: 'bw 12', mileage: 10000}
      ]);
    });
};
