
exports.up = function(knex, Promise) {
    return knex.schema.createTable('coffee', (coffeeBean)=>{
        coffeeBean.increments('id')
        coffeeBean.string('name')
        coffeeBean.string('roaster')
        coffeeBean.integer('aroma')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('coffee')
};
