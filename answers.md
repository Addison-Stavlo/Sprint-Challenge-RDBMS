1. Explain the difference between `RDBMS` and `SQL`.

    RDBMS is a relationsl database management system.  this is like knex, which allows us to use javascript to write commands which are converted to SQL to run commands on the database to retrieve/add/modify information.
    SQL is the type of relational database that our RDBMS is acting on.

1. Why do tables need a `primary key`?

    for quick indexing and relations to other data tables.  the primary key is a unique value that is used by the system to map one table to another based on the other tables connected foreign key.

1. What is the name given to a table column that references the primary key on another table.

    this is called a foreign key.

1. What do we need in order to have a _many to many_ relationship between two tables.

    we need a 'middleman' table to act as an intermediary between the two tables.  the middleman table will have 2 foreign keys, one for each of the 2 tables that is being connected.  this middleman system allows us to imlement a many-to-many relation without compromising our normalization.