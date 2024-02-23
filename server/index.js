console.log("hello world");
const express = require("express");
const { connect } = require("http2");
const app = express();
const path = require("path");
const pg = require("pg");

const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_notes_dbclg "
);
// console.log(process.env);

const init = async () => {
  await client.connect();
  const SQL = `
    DROP TABLE IF EXISTS notes;
    CREATE TABLE notes
    (
        id SERIAL PRIMARY KEY,
        txt VARCHAR(255)
        starred BOOLEAN DEFAULT FALSE
        );
        INSERT INTO notes(txt, starred) VALUES('learn express', false);
        INSERT INTO notes(txt, starred) VALUES('write SQL queries', true);
        INSERT INTO notes(txt) VALUES('create routes');
        `
  await client.query(SQL);
  console.log("data seeded");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

init();
