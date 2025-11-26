import countriesImage from '../../../public/assets/countries.jpg';

export const quizzesDb = [
  {
    id: 1,
    title: 'Countries',
    description: 'Test your knowledge of countries',
    imageUrl: countriesImage,
    modifiers: [
      {
        name: 'complexity',
        value: [
          {
            id: 1,
            name: 'Easy',
            value: 1,
          },
          {
            id: 2,
            name: 'Medium',
            value: 2,
          },
          {
            id: 3,
            name: 'Hard',
            value: 3,
          },
        ],
      },
    ],
  },
];
