
exports.up = function(knex, Promise) {
  return knex.schema.table('actions', tbl => {
    tbl.boolean('complete').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('actions', tbl => {
      tbl.dropColumn('complete');
  })
};
