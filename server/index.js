
const express = require('express');//1
const app = express();//1
const path = require('path');//1
const pg = require('pg');//1
const { CLIENT_RENEG_LIMIT } = require('tls');

console.log("hello world");

const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_notes_db')

const init = async() => {
await client.connect();

const SQL =`

`;
await client.query(SQL);
console.log('data seeded');

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`listening on port ${port}`)
})

}

init()
