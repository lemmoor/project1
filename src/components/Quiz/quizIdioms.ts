const quizIdiomsEN = [
  {
    id: 110,
    question: 'What does "Bob\'s your uncle" mean?',
    answers: [
      {
        id: 20,
        answer: 'Means that everything is going smoothly or according to plan.',
        isCorrect: false,
      },
      {
        id: 10,
        answer: 'Means "and there it is", or "and there you have it"',
        isCorrect: true,
      },
      {
        id: 30,
        answer:
          'A phrase used to express surprise or disbelief in a situation.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 120,
    question: 'What does "get your ducks in a row" mean?',
    answers: [
      {
        id: 60,
        answer: 'To make proper plans, get things in order.',
        isCorrect: true,
      },
      {
        id: 40,
        answer:
          'It refers to organizing a group of ducks in a straight line for a parade.',
        isCorrect: false,
      },
      {
        id: 50,
        answer: 'It means to go for a swim in a rowing boat.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 130,
    question: 'What does "bare bones" mean?',
    answers: [
      {
        id: 70,
        answer: 'A very basic model or version, with no extras or add-ons.',
        isCorrect: true,
      },
      {
        id: 80,
        answer:
          'It refers to a type of fashion style that involves wearing minimalistic clothing.',
        isCorrect: false,
      },
      {
        id: 90,
        answer:
          'It describes a situation where someone is extremely hungry and has no food available.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 140,
    question: 'What does "I haven\'t done/heard that in donkey\'s years" mean?',
    answers: [
      {
        id: 210,
        answer: "It means that someone hasn't seen a donkey in a long time.",
        isCorrect: false,
      },
      {
        id: 230,
        answer: "I heaven't done/heard that in a long time",
        isCorrect: true,
      },
      {
        id: 220,
        answer: 'A popular phrase used to express surprise or disbelief.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 150,
    question: 'What does "Jump on the bandwagon" mean?',
    answers: [
      {
        id: 240,
        answer:
          'It means to quickly jump off a moving vehicle while playing a musical instrument.',
        isCorrect: false,
      },
      {
        id: 260,
        answer: "Means to not come to someone's birthday",
        isCorrect: false,
      },
      {
        id: 250,
        answer: 'It means to do something because everyone is doing it.',
        isCorrect: true,
      },
    ],
  },
];

const quizIdiomsPL = [
  {
    id: 110,
    question: 'Co znaczy "Bob\'s your uncle"?',
    answers: [
      {
        id: 20,
        answer: 'Oznacza, że wszystko idzie gładko lub zgodnie z planem.',
        isCorrect: false,
      },
      {
        id: 10,
        answer: 'Oznacza "załatwione", "po sprawie", "gotowe"',
        isCorrect: true,
      },
      {
        id: 30,
        answer:
          'Wyrażenie używane do wyrażenia zdziwienia lub niedowierzania w jakiejś sytuacji.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 120,
    question: 'Co znaczy "get your ducks in a row"?',
    answers: [
      {
        id: 60,
        answer:
          'Dobrze zorganizować swoje sprawy, dobrze się do czegoś przygotować.',
        isCorrect: true,
      },
      {
        id: 40,
        answer: 'Odnosi się do zorganizowania grupy kaczek w linii prostej.',
        isCorrect: false,
      },
      {
        id: 50,
        answer: 'Oznacza pływanie w łodzi wiosłowej.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 130,
    question: 'Co znaczy "bare bones"?',
    answers: [
      {
        id: 70,
        answer: 'Bardzo podstawowy model lub wersja, bez dodatków.',
        isCorrect: true,
      },
      {
        id: 80,
        answer:
          'Odnosi się do rodzaju stylu, który polega na noszeniu minimalistycznych ubrań.',
        isCorrect: false,
      },
      {
        id: 90,
        answer:
          'Opisuje sytuację, w której ktoś jest bardzo głodny i nie ma dostępnego jedzenia.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 140,
    question: 'Co znaczy "I haven\'t done/heard that in donkey\'s years"?',
    answers: [
      {
        id: 210,
        answer: 'Znaczy, że ktoś dawno nie widział osła.',
        isCorrect: false,
      },
      {
        id: 230,
        answer: 'Oznacza, że coś nie wydarzyło się przez bardzo długi czas.',
        isCorrect: true,
      },
      {
        id: 220,
        answer:
          'Popularne wyrażenie używane do wyrażania zdziwienia lub niedowierzania.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 150,
    question: 'Co znaczy "Jump on the bandwagon"?',
    answers: [
      {
        id: 240,
        answer:
          'Szybkie zeskoczenie z jadącego pojazdu podczas gry na instrumencie muzycznym.',
        isCorrect: false,
      },
      {
        id: 260,
        answer: 'Znaczy nie przyjść na czyjeś urodziny',
        isCorrect: false,
      },
      {
        id: 250,
        answer: 'Zrobić coś ponieważ wszyscy to robią.',
        isCorrect: true,
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
