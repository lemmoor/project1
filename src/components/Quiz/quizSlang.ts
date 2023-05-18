const quizSlangEN = [
  {
    id: 11,
    question: 'question EN?',
    answers: [
      {
        id: 1,
        answer: 'text 1',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'text 2',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'text 3',
        isCorrect: true,
      },
    ],
  },
  {
    id: 12,
    question: 'question 2 EN?',
    answers: [
      {
        id: 4,
        answer: 'text 3',
        isCorrect: true,
      },
      {
        id: 5,
        answer: 'text 4',
        isCorrect: false,
      },
      {
        id: 6,
        answer: 'text 6',
        isCorrect: false,
      },
    ],
  },
];

const quizSlangPL = [
  {
    id: 11,
    question: 'question PL?',
    answers: [
      {
        id: 1,
        answer: 'text 1',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'text 2',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'text 3',
        isCorrect: true,
      },
    ],
  },
  {
    id: 12,
    question: 'question 2 PL?',
    answers: [
      {
        id: 4,
        answer: 'text 3',
        isCorrect: true,
      },
      {
        id: 5,
        answer: 'text 4',
        isCorrect: false,
      },
      {
        id: 6,
        answer: 'text 6',
        isCorrect: false,
      },
    ],
  },
];

export const quizSlang = {
  en: quizSlangEN,
  pl: quizSlangPL,
} as {
  [key: string]: typeof quizSlangEN;
};
