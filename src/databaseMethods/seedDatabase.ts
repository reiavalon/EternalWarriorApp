import { WarriorRepository } from './WarriorRepository';

export async function seedDatabase(repository: WarriorRepository) {
    // Seed the lostBattleTypeRepository database if needed
    if(await repository.lostBattleType.count() === 0) {
        await repository.lostBattleType.save({ name: 'LostBattle' });
        await repository.lostBattleType.save({ name: 'CloseCall' });
    }

    // Seed the captainsLogQuestionRepository database if needed
    if(await repository.captainsLogQuestion.count() === 0) { 
        await repository.captainsLogQuestion.save({ 
            id: 1,
            question: `"Why are you fighting?" "Why don’t you just give up?"`
        });
        await repository.captainsLogQuestion.save({ 
            id: 2,
            question: `"How did you win your most difficult recent battle?” "What have you been doing right when you win?”`
        });
        await repository.captainsLogQuestion.save({ 
            id: 3,
            question: `"What are you doing to help pay for your work in this program?” "Are you marking all squares of your MAN PWR calendar every day?” ”Do you keep your calendar in a location where someone important to you can see and comment on it every day?” "Do you think about these things when temptation is knocking at the door?”`
        });
        await repository.captainsLogQuestion.save({ 
            id: 4,
            question: `"What are you doing for Border Patrol activities?” "Do you have meaningful rituals in place? (MAN PWR calendar)” "Are the demands of your squares sufficient?” "What is your Flag Pole/Passion Project?” "How is your Border Patrol system different from those with more than 8 weeks?”`
        });
        await repository.captainsLogQuestion.save({ 
            id: 5,
            question: `"When you lost, what technique did the enemy use to defeat you?” "Is there a pattern?” "If you could replay the event, what could you have done to beat him?” "What drills can you do to make sure you win next time if he tries something similar?”`
        });
        await repository.captainsLogQuestion.save({ 
            id: 6,
            question: `"What might the enemy try in the future?” "What do you need to do to be prepared for such an attack?”`
        });
    }
}