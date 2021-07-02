import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CaptainsLog } from "./CaptainsLog";

@Entity()
export class CaptainsLogQuestion {
    @PrimaryColumn()
    id: number;

    @Column()
    question: string;

    @OneToMany(type => CaptainsLog, captainsLog => captainsLog.captainsLogQuestion)
    captainsLogs: CaptainsLog[];
}