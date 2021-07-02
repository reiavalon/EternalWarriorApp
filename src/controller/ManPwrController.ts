import * as express from "express";
import { RepositoryNotFoundError } from "typeorm";
import { WarriorRepository } from './../databaseMethods/WarriorRepository';

export function ManPwrController(repository: WarriorRepository)
{
    let router = express.Router();

    router.get('/', async (req, res, next) => {
        res.json({'NotImplemented': 'NotImplemented'});
    });

    return router;
}