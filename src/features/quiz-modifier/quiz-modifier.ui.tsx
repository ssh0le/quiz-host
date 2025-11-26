import { useState } from 'react';
import { QuizModifier } from '../../entities';

const ComplexityModifier = ({ modifier }: { modifier: QuizModifier }) => {
  // Type guard to check if modifier is ComplexityModifier
  if (modifier.name !== 'complexity') {
    return null;
  }

  const [selectedComplexity, setSelectedComplexity] = useState<number>(
    modifier.value[0]?.id || 0
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComplexity(Number(e.target.value));
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{modifier.name}</h3>
      <select
        value={selectedComplexity}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {modifier.value.map((complexity) => (
          <option key={complexity.id} value={complexity.id}>
            {complexity.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const TimeModifier = ({ modifier }: { modifier: QuizModifier }) => {
  return (
    <div>
      <h3>{modifier.name}</h3>
    </div>
  );
};

export const QuizModifier2 = ({ modifiers }: { modifiers: QuizModifier[] }) => {
  return (
    <div>
      {modifiers.map((modifier) => (
        <div key={modifier.name}>
          {modifier.name === 'complexity' ? (
            <ComplexityModifier modifier={modifier} />
          ) : (
            <TimeModifier modifier={modifier} />
          )}
        </div>
      ))}
    </div>
  );
};
