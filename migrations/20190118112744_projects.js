
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();

      tbl.string('name',128).notNullable();
      tbl.unique('name','uq_projects_name');

      tbl.text('description');
      tbl.boolean('complete').notNullable().defaultTo(false);

      tbl.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
