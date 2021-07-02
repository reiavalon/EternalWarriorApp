import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ManPwrInstance } from './ManPwrInstance';

@Entity()
export class ManPwrGoal {
    @PrimaryColumn()
    id: number;

    @Column()
    letter: string;

    @Column()
    description: string;

    @OneToMany(type => ManPwrInstance, manPwrInstance => manPwrInstance.manPwrGoal)
    manPwrInstances: ManPwrInstance[];
}