const quizSlangEN = [
  {
    id: 11,
    question: 'What does Gutted mean?',
    answers: [
      {
        id: 1,
        answer: 'Extremely disappointed or upset.',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'Feeling happy and content',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'Physically full or satisfied after a meal',
        isCorrect: false,
      },
    ],
  },
  {
    id: 12,
    question: 'What does Dodgy mean?',
    answers: [
      {
        id: 4,
        answer: 'Very trustworthy or reliable.',
        isCorrect: false,
      },
      {
        id: 5,
        answer: 'Signifying something of high quality or excellence.',
        isCorrect: false,
      },
      {
        id: 6,
        answer:
          "Anything that's low-quality, potentially dangerous or unreliable.",
        isCorrect: true,
      },
    ],
  },
  {
    id: 13,
    question: 'What does "Go Dutch" mean?',
    answers: [
      {
        id: 7,
        answer: 'Every person pays for their own food/drinks.',
        isCorrect: true,
      },
      {
        id: 8,
        answer: 'To travel to the Netherlands.',
        isCorrect: false,
      },
      {
        id: 9,
        answer: 'To go for a walk together.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    question: 'What does "to have dibs on smth" mean?',
    answers: [
      {
        id: 21,
        answer:
          'To acquire a new skill to help you find a job or otherwise succeed in life.',
        isCorrect: false,
      },
      {
        id: 22,
        answer: 'To possess a large quantity of something.',
        isCorrect: false,
      },
      {
        id: 23,
        answer:
          'A right to have or get something from someone, or to use something.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 15,
    question: 'What does Bodged mean?',
    answers: [
      {
        id: 24,
        answer: 'To create a piece of artwork of the highest quality.',
        isCorrect: false,
      },
      {
        id: 25,
        answer: 'A job, that is done badly.',
        isCorrect: true,
      },
      {
        id: 26,
        answer: 'To clean or tidy up thoroughly.',
        isCorrect: false,
      },
    ],
  },
];

const quizSlangPL = [
  {
    id: 11,
    question: 'Co znaczy Gutted?',
    answers: [
      {
        id: 1,
        answer: 'Bardzo rozczarowany lub zmartwiony',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'Poczucie szczęścia i zadowolenia',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'Syty lub zadowolony po posiłku.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 12,
    question: 'Co znaczy Dodgy?',
    answers: [
      {
        id: 4,
        answer: 'Godny zaufania lub niezawodny.',
        isCorrect: false,
      },
      {
        id: 5,
        answer: 'Coś wysokiej jakości lub doskonałości.',
        isCorrect: false,
      },
      {
        id: 6,
        answer:
          'Coś, co jest niskiej jakości, potencjalnie niebezpieczne lub niewiarygodne.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 13,
    question: 'Co znaczy "Go Dutch"?',
    answers: [
      {
        id: 7,
        answer: 'Każda osoba płaci za swoje jedzenie/napoje.',
        isCorrect: true,
      },
      {
        id: 8,
        answer: 'Podróżować do Holandii.',
        isCorrect: false,
      },
      {
        id: 9,
        answer: 'Wyjscie na wspólny spacer.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    question: 'Co znaczy "to have dibs on smth"?',
    answers: [
      {
        id: 21,
        answer:
          'Nabyć nową umiejętność, która pomoże znaleźć pracę lub odnieść sukces w życiu.',
        isCorrect: false,
      },
      {
        id: 22,
        answer: 'Posiadać dużą ilość czegoś.',
        isCorrect: false,
      },
      {
        id: 23,
        answer:
          'Mieć prawo do posiadania lub otrzymania czegoś, zaklepać coś sobie.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 15,
    question: 'Co znaczy Bodged?',
    answers: [
      {
        id: 24,
        answer: 'Stworzyć dzieło sztuki najwyższej jakości.',
        isCorrect: false,
      },
      {
        id: 25,
        answer:
          'Używane do opisania czegoś, zwykle pracy, która jest wykonana źle.',
        isCorrect: true,
      },
      {
        id: 26,
        answer: 'Bardzo dokładnie posprzątać.',
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
