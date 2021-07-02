import * as express from "express";
import { CustomRepositoryCannotInheritRepositoryError, RepositoryNotFoundError } from "typeorm";
import { WarriorRepository } from './../databaseMethods/WarriorRepository';

export function CaptainsLogController(repository: WarriorRepository)
{
    let router = express.Router();

    router.get('/', async (req, res, next) => {
        console.log(repository.captainsLog.createQueryBuilder()
            .innerJoinAndSelect('captainsLogQuestion.id', 'captainsLogQuestion')
            .getMany());
        res.json(await repository.captainsLog.find({ 
            select: ['date', 'response'],  
            relations: ['captainsLogQuestion.id'] 
        }));
    });

    router.get('/questions', async(req, res, next) => {
        res.json(await repository.captainsLogQuestion.find());
    });

    return router;
}