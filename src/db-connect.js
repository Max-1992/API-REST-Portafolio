// Imports
const db = require('mongoose');

const connect = async() => {
    try {
        await db.connect(process.env.URL_DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        console.log(`Data Base Is Connect`)
    } catch (err) {
        console.error(err);
    }
}

module.exports = connect;