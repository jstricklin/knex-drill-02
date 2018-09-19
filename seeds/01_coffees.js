
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('coffee').insert([
          {
              name: "Black and Tan",
              roaster: "Ink",
              aroma: 3
          },
          {
              name: "Holiday Roast",
              roaster: "Starbucks",
              aroma: 9
          },
          {
              name: "House Quake",
              roaster: "Denver Coffee",
              aroma: 6
          },
      ]);
    });
};
