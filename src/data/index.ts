export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const MCQQues: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote the novel '1984'?",
    options: [
      "George Orwell",
      "J.K. Rowling",
      "Mark Twain",
      "Ernest Hemingway",
    ],
    correctAnswer: "George Orwell",
  },
  {
    id: 4,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
    correctAnswer: "Oxygen",
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 6,
    question: "Which programming language is known for its snake logo?",
    options: ["Java", "Python", "Ruby", "C++"],
    correctAnswer: "Python",
  },
  {
    id: 7,
    question: "What is the speed of light in a vacuum?",
    options: ["299,792 km/s", "150,000 km/s", "100,000 km/s", "1,000,000 km/s"],
    correctAnswer: "299,792 km/s",
  },
  {
    id: 8,
    question: "Who is the author of 'Pride and Prejudice'?",
    options: ["Jane Austen", "Charles Dickens", "Emily Brontë", "Oscar Wilde"],
    correctAnswer: "Jane Austen",
  },
  {
    id: 9,
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Elbrus"],
    correctAnswer: "Mount Everest",
  },
  {
    id: 10,
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "Japan", "Germany"],
    correctAnswer: "Brazil",
  },
  {
    id: 11,
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    id: 12,
    question:
      "Which organ in the human body is primarily responsible for filtering blood?",
    options: ["Lungs", "Heart", "Kidneys", "Liver"],
    correctAnswer: "Kidneys",
  },
  {
    id: 13,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["South Korea", "India", "China", "Japan"],
    correctAnswer: "Japan",
  },
  {
    id: 14,
    question: "What is the chemical formula of water?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    id: 15,
    question: "In which year did World War II end?",
    options: ["1945", "1939", "1918", "1965"],
    correctAnswer: "1945",
  },
];
