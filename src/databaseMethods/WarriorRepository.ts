import { Connection, Repository } from "typeorm";
import { CaptainsLog } from "../entity/CaptainsLog";
import { CaptainsLogQuestion } from "../entity/CaptainsLogQuestion";
import { LostBattle } from '../entity/LostBattle';
import { LostBattleType } from '../entity/LostBattleType';

export class WarriorRepository {
    captainsLog: Repository<CaptainsLog>;
    captainsLogQuestion: Repository<CaptainsLogQuestion>;
    lostBattle: Repository<LostBattle>;
    lostBattleType: Repository<LostBattleType>;

    constructor(connection: Connection) {
        this.captainsLog = connection.getRepository(CaptainsLog);
        this.captainsLogQuestion = connection.getRepository(CaptainsLogQuestion);
        this.lostBattle = connection.getRepository(LostBattle);
        this.lostBattleType = connection.getRepository(LostBattleType);
    }
}