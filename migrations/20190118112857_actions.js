
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments();

      tbl.string('task',255).notNullable();
      tbl.text('notes');

      tbl.integer('project_id').unsigned().references('id').inTable('projects').notNullable();

      tbl.unique(['task','project_id'],'uq_actions_composite_task_project_id');

      tbl.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
