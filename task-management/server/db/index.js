/**
 * Connect to the Database with Mongoose here
 */

const mongoose = require('mongoose');

main().catch(err => console.log(err));

// open a connection to the test database on our locally running instance of MongoDB.
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}


import seeder from "mongoose-seed";
import dummy_data from "./dummy_data";

const db = 'mongodb://localhost:27017/test';

seeder.connect(db, function () {
    seeder.loadModels(modelpaths: [
        "task-management\server\models\Task.js"
    ]);
    seeder.clearModels(models: ["task-management\server\models\Task.js"]);
    seeder.populateModels(dummy_data, cb: function(err,done) {
        if(err) {
            return console.log("seed err", err)
        }
        if(done) {
            return console.log("seed done", done);
        }

        seeder.disconnect()
    })
})