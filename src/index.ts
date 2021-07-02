import "reflect-metadata";
import {Connection, createConnection, createQueryBuilder, Db, getManager} from "typeorm";
import * as express from "express";
import { WarriorRepository } from './databaseMethods/WarriorRepository';
import { seedDatabase } from "./databaseMethods/seedDatabase";
import { LostBattleController } from "./controller/LostBattleController";
import { CaptainsLogController } from './controller/CaptainsLogController';
import { ManPwrController } from './controller/ManPwrController';

createConnection().then(async (connection: Connection) => {
    let repository: WarriorRepository = new WarriorRepository(connection);
    await seedDatabase(repository);

    // create express app
    const app = express();
    app.use(express.json());
    app.use('/lostbattle', LostBattleController(repository));
    app.use('/captainslog', CaptainsLogController(repository));
    app.use('/manpwr', ManPwrController(repository));
    app.use(express.static('./static'));
    app.listen(3000);

    console.log("Express server has started on port 3000.");

    console.log(await repository.captainsLog.createQueryBuilder('cl')
        .select(['cl', 'clq.id'])
        .innerJoin('cl.captainsLogQuestion', 'clq')
        .getMany());

    console.log(await getManager().query(`
        SELECT cl.date, cl.response, clq.id AS questionNumber
        FROM captains_log cl
        JOIN captains_log_question clq ON cl.captainsLogQuestionId=clq.id;
    `))
}).catch(error => console.log(error));
