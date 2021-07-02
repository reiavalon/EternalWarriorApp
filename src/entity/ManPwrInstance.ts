import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ManPwrGoal } from './ManPwrGoal';

@Entity()
export class ManPwrInstance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    date: string;

    @ManyToOne(type => ManPwrGoal, manPwrGoal => manPwrGoal.manPwrInstances)
    manPwrGoal: ManPwrGoal;
}