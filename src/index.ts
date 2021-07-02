import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import * as express from "express";
import { WarriorRepository } from './databaseMethods/WarriorRepository';
import { seedDatabase } from "./databaseMethods/seedDatabase";
import { lostBattleController } from "./controller/LostBattleController";

createConnection().then(async (connection: Connection) => {
    let repository: WarriorRepository = new WarriorRepository(connection);
    await seedDatabase(repository);

    // create express app
    const app = express();
    app.use(express.json());
    app.use('/lostbattle', lostBattleController(repository));
    app.listen(3000);

    console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));
