/**
const fs = require('fs')
const util = require('util')
const readDir = util.promisify(fs.readdir).bind(fs)
const path = require('path')
const mongoose = require('mongoose')
import dummy_data from './dummy_data'

function toTitleCase (str) {
  return str.replace(/\w\S/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

async function seedDatabase (runSaveMiddleware = false) {
  const dir = await readDir(__dirname)
  const seedFiles = dir.filter(f => f.endsWith('.seed.js'))

  for (const file of seedFiles) {
    const fileName = file.split('.seed.js')[0]
    const modelName = toTitleCase(fileName)
    const model = mongoose.models[modelName]

    if (!model) throw new Error(`Cannot find Model '${modelName}'`)
    const fileContents = require(path.join(__dirname, dummy_data.js))

    runSaveMiddleware
      ? await model.create(fileContents)
      : await model.insertMany(fileContents)
  }
}
*/

/** 
import { Seeder } from 'mongoose-data-seed';
import { Task } from '../server/models';
import dummy_data from './dummy_data';

class TaskSeeder extends Seeder {
  async shouldRun() {
    return Task.countDocuments()
      .exec()
      .then(count => count === 0);
  }

  async run() {
    return Task.create(dummy_data);
  }
}

export default TaskSeeder;
*/

/*
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
})*/