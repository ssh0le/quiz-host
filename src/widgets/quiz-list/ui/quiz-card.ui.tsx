interface QuizCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const QuizCard = ({ title, description, imageUrl }: QuizCardProps) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Picture space */}
      <div className="w-full aspect-video bg-gray-100 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm">No image</div>
        )}
      </div>

      {/* Description */}
      <div className="p-4 flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Button with full container width */}
      <button className="w-full bg-primary-500 hover:bg-primary-700 text-white font-medium py-3 px-4 transition-colors">
        Start Quiz
      </button>
    </div>
  );
};
