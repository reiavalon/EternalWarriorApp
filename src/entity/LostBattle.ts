import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LostBattleType } from './LostBattleType';

@Entity()
export class LostBattle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    date: string;

    @ManyToOne(type => LostBattleType, LostBattleType => LostBattleType.lostBattles)
    lostBattleType: LostBattleType;
}