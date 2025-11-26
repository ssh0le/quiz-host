type ComplexityModifier = {
  name: 'complexity';
  value: {
    id: number;
    name: string;
    value: number;
  }[];
};

type TimeModifier = {
  name: 'time';
  value: number;
};

export type QuizModifier = ComplexityModifier | TimeModifier;
