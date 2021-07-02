import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CaptainsLogQuestion } from "./CaptainsLogQuestion";

@Entity()
export class CaptainsLog
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    date: string;

    @Column()
    response: string;

    @ManyToOne(type => CaptainsLogQuestion, captainsLogQuestion => captainsLogQuestion.captainsLogs)
    captainsLogQuestion: CaptainsLogQuestion;
}