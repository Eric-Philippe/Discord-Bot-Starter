import db from "database";

/**
 * @DATABASE_SCHEMA
 *  - USER_PROFILE
 *      - userid: VARCHAR(20) PRIMARY KEY  |  xp: INTEGER NOT NULL
 */

db.run(/* sql */ `
      CREATE TABLE IF NOT EXISTS USER_PROFILE (
          userid VARCHAR(20) PRIMARY KEY,
          xp INTEGER NOT NULL
      );
  `);

console.log("Table USER_PROFILE created successfully");

/**
 * @DATABASE_DEFAULT_VALUES
 * @description Insert one user with 0 xp
 */

db.run(/* sql */ `
    INSERT INTO USER_PROFILE (userid, xp)
    VALUES ('387291278670430208', 0)
    ON CONFLICT DO NOTHING;
    `);

console.log("Default values inserted successfully");
