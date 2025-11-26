import { useNavigate } from 'react-router-dom';
import { routes } from '@shared/constants/routes';

interface QuizCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const QuizCard = ({ id, title, description, imageUrl }: QuizCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.dashboardDetail.replace(':id', id.toString()));
  };

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      {/* Picture space */}
      <div className="w-full aspect-video bg-gray-100 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/assets/default-image.jpg"
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Description */}
      <div className="p-4 flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Button with full container width */}
      <button
        onClick={handleClick}
        className="w-full bg-primary-500 hover:bg-primary-700 text-white font-medium py-3 px-4 transition-colors"
      >
        Start Quiz
      </button>
    </div>
  );
};
