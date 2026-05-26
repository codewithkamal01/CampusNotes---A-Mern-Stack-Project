const quizData = [
  // =========================
  // OPERATING SYSTEM
  // =========================

  {
    id: 1,
    category: "Operating System",
    question: "What is the main purpose of an Operating System?",
    options: [
      "Compile programs",
      "Manage computer resources",
      "Design websites",
      "Create databases",
    ],
    answer: "Manage computer resources",
  },

  {
    id: 2,
    category: "Operating System",
    question: "Which scheduling algorithm uses time slices?",
    options: ["FCFS", "Round Robin", "SJF", "Priority Scheduling"],
    answer: "Round Robin",
  },

  {
    id: 3,
    category: "Operating System",
    question: "Deadlock occurs when?",
    options: [
      "CPU is idle",
      "Processes wait forever for resources",
      "RAM is full",
      "File is deleted",
    ],
    answer: "Processes wait forever for resources",
  },

  // =========================
  // DBMS
  // =========================

  {
    id: 4,
    category: "DBMS",
    question: "What does DBMS stand for?",
    options: [
      "Data Backup Management System",
      "Database Management System",
      "Digital Base Management System",
      "Data Building Management System",
    ],
    answer: "Database Management System",
  },

  {
    id: 5,
    category: "DBMS",
    question: "Which language is used to query databases?",
    options: ["HTML", "CSS", "SQL", "Python"],
    answer: "SQL",
  },

  {
    id: 6,
    category: "DBMS",
    question: "Primary key is used to?",
    options: [
      "Delete tables",
      "Uniquely identify records",
      "Store images",
      "Create backups",
    ],
    answer: "Uniquely identify records",
  },

  // =========================
  // SOFTWARE ENGINEERING
  // =========================

  {
    id: 7,
    category: "Software Engineering",
    question: "What does SDLC stand for?",
    options: [
      "Software Development Life Cycle",
      "System Data Life Cycle",
      "Software Design Logic Cycle",
      "System Development Link Cycle",
    ],
    answer: "Software Development Life Cycle",
  },

  {
    id: 8,
    category: "Software Engineering",
    question: "Which model follows a sequential approach?",
    options: [
      "Agile Model",
      "Spiral Model",
      "Waterfall Model",
      "Prototype Model",
    ],
    answer: "Waterfall Model",
  },

  {
    id: 9,
    category: "Software Engineering",
    question: "Agile development focuses on?",
    options: [
      "Rigid planning",
      "Customer collaboration",
      "Long documentation",
      "No testing",
    ],
    answer: "Customer collaboration",
  },

  // =========================
  // PYTHON
  // =========================

  {
    id: 10,
    category: "Python",
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "function", "define", "def"],
    answer: "def",
  },

  {
    id: 11,
    category: "Python",
    question: "Which data type is immutable in Python?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: "Tuple",
  },

  {
    id: 12,
    category: "Python",
    question: "What is the output type of input() in Python?",
    options: ["int", "float", "string", "boolean"],
    answer: "string",
  },

  // =========================
  // JAVASCRIPT
  // =========================

  {
    id: 13,
    category: "JavaScript",
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Meta"],
    answer: "Netscape",
  },

  {
    id: 14,
    category: "JavaScript",
    question: "Which keyword declares a block scoped variable?",
    options: ["var", "let", "define", "int"],
    answer: "let",
  },

  {
    id: 15,
    category: "JavaScript",
    question: "Which method converts JSON to object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.convert()",
    ],
    answer: "JSON.parse()",
  },

  // =========================
  // HTML
  // =========================

  {
    id: 16,
    category: "HTML",
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },

  {
    id: 17,
    category: "HTML",
    question: "Which tag is used for hyperlinks?",
    options: ["<a>", "<p>", "<link>", "<h1>"],
    answer: "<a>",
  },

  {
    id: 18,
    category: "HTML",
    question: "Which HTML tag is used to display images?",
    options: ["<image>", "<img>", "<src>", "<pic>"],
    answer: "<img>",
  },

  // =========================
  // CSS
  // =========================

  {
    id: 19,
    category: "CSS",
    question: "Which property changes text color?",
    options: ["font-color", "text-color", "color", "background"],
    answer: "color",
  },

  {
    id: 20,
    category: "CSS",
    question: "Which CSS property controls spacing inside elements?",
    options: ["margin", "padding", "border", "gap"],
    answer: "padding",
  },

  {
    id: 21,
    category: "CSS",
    question: "Which unit is relative in CSS?",
    options: ["px", "cm", "em", "mm"],
    answer: "em",
  },

  // =========================
  // COMPUTER NETWORKING
  // =========================

  {
    id: 22,
    category: "Computer Networking",
    question: "What does IP stand for?",
    options: [
      "Internet Protocol",
      "Internal Process",
      "Integrated Program",
      "Internet Process",
    ],
    answer: "Internet Protocol",
  },

  {
    id: 23,
    category: "Computer Networking",
    question: "Which device connects multiple networks?",
    options: ["Switch", "Hub", "Router", "Repeater"],
    answer: "Router",
  },

  {
    id: 24,
    category: "Computer Networking",
    question: "HTTP works on which layer?",
    options: [
      "Transport Layer",
      "Application Layer",
      "Network Layer",
      "Physical Layer",
    ],
    answer: "Application Layer",
  },

  // =========================
  // REACT
  // =========================

  {
    id: 25,
    category: "React",
    question: "Which hook is used for state management?",
    options: ["useEffect", "useRef", "useState", "useMemo"],
    answer: "useState",
  },

  {
    id: 26,
    category: "React",
    question: "React is mainly used for?",
    options: [
      "Backend Development",
      "Database Design",
      "Building User Interfaces",
      "Operating Systems",
    ],
    answer: "Building User Interfaces",
  },

  {
    id: 27,
    category: "React",
    question: "Which prop is mandatory while rendering lists?",
    options: ["id", "value", "key", "index"],
    answer: "key",
  },

  // =========================
  // DATA STRUCTURE
  // =========================

  {
    id: 28,
    category: "Data Structure",
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
  },

  {
    id: 29,
    category: "Data Structure",
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    answer: "Stack",
  },

  {
    id: 30,
    category: "Data Structure",
    question: "Binary Search works on?",
    options: ["Unsorted Array", "Sorted Array", "Queue", "Stack"],
    answer: "Sorted Array",
  },
];

export default quizData;
