import * as express from "express";
import { WarriorRepository } from './../databaseMethods/WarriorRepository';

export function lostBattleController(repository: WarriorRepository)
{
    let router = express.Router();

    async function addLostBattle(date: string, type: string) {
        let lostBattleType = await repository.lostBattleType.findOne({ name: type });
        if(await repository.lostBattle.count({ date: date, lostBattleType: lostBattleType }) === 0) {
            await repository.lostBattle.save({ date: date, lostBattleType: lostBattleType });
        }
    }

    async function removeLostBattle(date: string, type: string) {
        let lostBattleType = await repository.lostBattleType.findOne({ name: type });
        let lostBattleToRemove = await repository.lostBattle.findOne({ date: date, lostBattleType: lostBattleType });
        while (lostBattleToRemove) {
            await repository.lostBattle.remove(lostBattleToRemove);
            lostBattleToRemove = await repository.lostBattle.findOne({ date: date, lostBattleType: lostBattleType });
        }
    }

    router.get('/', async (req, res, next) => {
        res.json(await repository.lostBattle.find());
    });

    router.post('/addLostBattle', async (req, res, next) => {
        console.log(req.body);
        await addLostBattle(req.body.date, 'LostBattle');
        res.sendStatus(200);
    });

    router.post('/removeLostBattle', async (req, res, next) => {
        console.log(req.body);
        await removeLostBattle(req.body.date, 'LostBattle');
        res.sendStatus(200);
    });

    router.post('/addCloseCall', async (req, res, next) => {
        console.log(req.body);
        await addLostBattle(req.body.date, 'CloseCall');
        res.sendStatus(200);
    });

    router.post('/removeCloseCall', async (req, res, next) => {
        console.log(req.body);
        await removeLostBattle(req.body.date, 'CloseCall');
        res.sendStatus(200);
    });

    return router;
}