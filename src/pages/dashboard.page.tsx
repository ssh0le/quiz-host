import { QuizList } from '@widgets/quiz-list';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Pick a quiz to start</h1>
      <QuizList />
    </div>
  );
};

export default Dashboard;
