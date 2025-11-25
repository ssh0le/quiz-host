import { QuizCard } from "./quiz-card.ui";

const quizzes = [
  {
    id: 1,
    title: 'Countries',
    description: 'Test your knowledge of countries',
  },
];

export const QuizList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} {...quiz} />
      ))}
    </div>
  );
};
