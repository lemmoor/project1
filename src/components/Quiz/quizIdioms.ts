const quizIdiomsEN = [
  {
    id: 110,
    question: 'question EN idiom?',
    answers: [
      {
        id: 10,
        answer: 'text 1',
        isCorrect: false,
      },
      {
        id: 20,
        answer: 'text 2',
        isCorrect: false,
      },
      {
        id: 30,
        answer: 'text 3',
        isCorrect: true,
      },
    ],
  },
  {
    id: 120,
    question: 'question 2 EN Idiom?',
    answers: [
      {
        id: 40,
        answer: 'text 3',
        isCorrect: true,
      },
      {
        id: 50,
        answer: 'text 4',
        isCorrect: false,
      },
      {
        id: 60,
        answer: 'text 6',
        isCorrect: false,
      },
    ],
  },
];

const quizIdiomsPL = [
  {
    id: 110,
    question: 'question PL? idiom',
    answers: [
      {
        id: 10,
        answer: 'text 1',
        isCorrect: false,
      },
      {
        id: 20,
        answer: 'text 2',
        isCorrect: false,
      },
      {
        id: 30,
        answer: 'text 3',
        isCorrect: true,
      },
    ],
  },
  {
    id: 120,
    question: 'question 2 PL? idiom',
    answers: [
      {
        id: 40,
        answer: 'text 3',
        isCorrect: true,
      },
      {
        id: 50,
        answer: 'text 4',
        isCorrect: false,
      },
      {
        id: 60,
        answer: 'text 6',
        isCorrect: false,
      },
    ],
  },
];

export const quizIdioms = {
  en: quizIdiomsEN,
  pl: quizIdiomsPL,
} as {
  [key: string]: typeof quizIdiomsEN;
};
