import { QuizCard } from './quiz-card.ui';
import { quizzesDb } from '@shared/constants';

export const QuizList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {quizzesDb.map((quiz) => (
        <QuizCard key={quiz.id} {...quiz} />
      ))}
    </div>
  );
};
