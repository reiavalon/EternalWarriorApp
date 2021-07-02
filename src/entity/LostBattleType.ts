import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { LostBattle } from './LostBattle';

@Entity()
export class LostBattleType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => LostBattle, lostBattle => lostBattle.lostBattleType)
    lostBattles: LostBattle[];
}