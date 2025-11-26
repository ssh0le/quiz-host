import { useParams, useNavigate } from 'react-router-dom';
import { routes, quizzesDb } from '@shared/constants';

const DashboardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const quiz = quizzesDb.find((q) => q.id === Number(id));

  if (!quiz) {
    return (
      <div className="p-8">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold mb-4">Quiz not found</h1>
          <p className="text-gray-600 mb-4">
            The quiz you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate(routes.dashboard)}
            className="bg-primary-500 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(routes.dashboard)}
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
        >
          <span>←</span>
          <span>Back to Dashboard</span>
        </button>

        {/* Quiz Image */}
        <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-6 flex items-center justify-center opacity-50">
          {quiz.imageUrl ? (
            <img
              src={quiz.imageUrl}
              alt={quiz.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="/assets/default-image.jpg"
              alt={quiz.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Quiz Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{quiz.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-primary-500 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Start Quiz
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors">
              View Instructions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetail;
