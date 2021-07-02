import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CaptainsLog } from "./CaptainsLog";

@Entity()
export class CaptainsLogQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    questionNumber: number;

    @Column()
    question: string;

    @OneToMany(type => CaptainsLog, captainsLog => captainsLog.captainsLogQuestion)
    captainsLogs: CaptainsLog[];
}