export const dummyCourses = [
  {
    _id: "c1",
    courseTitle: "MERN Full Stack Bootcamp",
    courseThumbnail:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    educator: { name: "Ananya Sharma" },
    coursePrice: 1199,
    discount: 30,
    courseRatings: [{ rating: 5 }, { rating: 4 }, { rating: 5 }, { rating: 4 }],
    courseDescription:
      "Learn to build full-stack web applications using MongoDB, Express, React, and Node.js with real-world projects and deployment.",

    enrolledStudents: [
      { studentId: "u101", name: "Riya Das" },
      { studentId: "u102", name: "Aditya Singh" },
      { studentId: "u103", name: "Kabir Jain" }
    ],

    courseContent: [
      {
        chapterTitle: "Introduction to MERN",
        chapterContent: [
          { lectureTitle: "What is MERN?", lectureDuration: 8 },
          { lectureTitle: "How MERN works", lectureDuration: 10 }
        ]
      },
      {
        chapterTitle: "MongoDB Basics",
        chapterContent: [
          { lectureTitle: "CRUD Operations", lectureDuration: 12 },
          { lectureTitle: "Data Modeling", lectureDuration: 15 }
        ]
      },
      {
        chapterTitle: "React Essentials",
        chapterContent: [
          { lectureTitle: "Components", lectureDuration: 10 },
          { lectureTitle: "Props & State", lectureDuration: 14 },
          { lectureTitle: "Hooks Overview", lectureDuration: 18 }
        ]
      }
    ]
  },

  {
    _id: "c2",
    courseTitle: "Intro to Python + DSA",
    courseThumbnail:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    educator: { name: "Rohit Kumar" },
    coursePrice: 899,
    discount: 20,
    courseRatings: [{ rating: 4 }, { rating: 4 }, { rating: 5 }],
    courseDescription:
      "Master Python fundamentals and essential Data Structures & Algorithms to crack interviews and build strong programming skills.",

    enrolledStudents: [
      { studentId: "u104", name: "Meera Nair" },
      { studentId: "u105", name: "Samar Pal" }
    ],

    courseContent: [
      {
        chapterTitle: "Python Basics",
        chapterContent: [
          { lectureTitle: "Variables & Data Types", lectureDuration: 12 },
          { lectureTitle: "Control Flow", lectureDuration: 15 }
        ]
      },
      {
        chapterTitle: "Data Structures",
        chapterContent: [
          { lectureTitle: "Lists & Tuples", lectureDuration: 14 },
          { lectureTitle: "Dictionaries", lectureDuration: 16 }
        ]
      },
      {
        chapterTitle: "Algorithms",
        chapterContent: [
          { lectureTitle: "Searching Algorithms", lectureDuration: 18 },
          { lectureTitle: "Sorting Algorithms", lectureDuration: 20 }
        ]
      }
    ]
  },

  {
    _id: "c3",
    courseTitle: "AI/ML Beginner to Advanced",
    courseThumbnail:
      "https://images.pexels.com/photos/8294662/pexels-photo-8294662.jpeg",
    educator: { name: "Priya Singh" },
    coursePrice: 1499,
    discount: 40,
    courseRatings: [{ rating: 5 }, { rating: 5 }, { rating: 5 }, { rating: 4 }],
    courseDescription:
      "A complete machine learning track covering supervised, unsupervised, and deep learning with hands-on model training.",

    enrolledStudents: [
      { studentId: "u106", name: "Ishita Rao" },
      { studentId: "u107", name: "Rohit Malhotra" },
      { studentId: "u108", name: "Sara Fernandes" }
    ],

    courseContent: [
      {
        chapterTitle: "Machine Learning Basics",
        chapterContent: [
          { lectureTitle: "What is ML?", lectureDuration: 10 },
          { lectureTitle: "Types of ML", lectureDuration: 12 }
        ]
      },
      {
        chapterTitle: "Supervised Learning",
        chapterContent: [
          { lectureTitle: "Regression", lectureDuration: 15 },
          { lectureTitle: "Classification", lectureDuration: 18 }
        ]
      },
      {
        chapterTitle: "Deep Learning",
        chapterContent: [
          { lectureTitle: "Neural Networks 101", lectureDuration: 20 },
          { lectureTitle: "Training Models", lectureDuration: 25 }
        ]
      }
    ]
  },

  {
    _id: "c4",
    courseTitle: "React + Next.js 14 Mastery",
    courseThumbnail:
      "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    educator: { name: "Kunal Verma" },
    coursePrice: 999,
    discount: 25,
    courseRatings: [{ rating: 3 }, { rating: 4 }],
    courseDescription:
      "Learn modern React, Next.js 14 features, server components, API routes, and build blazing fast production-ready apps.",

    enrolledStudents: [{ studentId: "u109", name: "Vikram Sen" }],

    courseContent: [
      {
        chapterTitle: "React Fundamentals",
        chapterContent: [
          { lectureTitle: "JSX & Components", lectureDuration: 12 },
          { lectureTitle: "Hooks Deep Dive", lectureDuration: 18 }
        ]
      },
      {
        chapterTitle: "Next.js Basics",
        chapterContent: [
          { lectureTitle: "File Routing", lectureDuration: 15 },
          { lectureTitle: "Server Components", lectureDuration: 20 }
        ]
      },
      {
        chapterTitle: "API & Deployment",
        chapterContent: [
          { lectureTitle: "API Routes", lectureDuration: 14 },
          { lectureTitle: "Deploying Next.js", lectureDuration: 16 }
        ]
      }
    ]
  },

  {
    _id: "c5",
    courseTitle: "MongoDB Complete Guide",
    courseThumbnail:
      "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg",
    educator: { name: "Harshit Gupta" },
    coursePrice: 749,
    discount: 15,
    courseRatings: [],
    courseDescription:
      "Understand MongoDB from basics to advanced including CRUD, indexing, aggregation pipelines, and schema design.",

    enrolledStudents: [],

    courseContent: [
      {
        chapterTitle: "Introduction to MongoDB",
        chapterContent: [
          { lectureTitle: "NoSQL Overview", lectureDuration: 8 },
          { lectureTitle: "Collections & Documents", lectureDuration: 12 }
        ]
      },
      {
        chapterTitle: "CRUD Operations",
        chapterContent: [
          { lectureTitle: "Insert & Update", lectureDuration: 14 },
          { lectureTitle: "Delete & Query", lectureDuration: 16 }
        ]
      },
      {
        chapterTitle: "Indexes & Aggregation",
        chapterContent: [
          { lectureTitle: "Indexing Basics", lectureDuration: 14 },
          { lectureTitle: "Aggregation Pipeline", lectureDuration: 20 }
        ]
      }
    ]
  },

  {
    _id: "c6",
    courseTitle: "Node.js APIs & Authentication",
    courseThumbnail:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    educator: { name: "Saniya Mehta" },
    coursePrice: 1099,
    discount: 35,
    courseRatings: [{ rating: 4 }, { rating: 4 }, { rating: 5 }],
    courseDescription:
      "Build secure REST APIs using Node.js, Express, JWT, OAuth, middleware, and best practices for production-ready apps.",

    enrolledStudents: [
      { studentId: "u110", name: "Aayushi Goyal" },
      { studentId: "u111", name: "Harsh Sharma" }
    ],

    courseContent: [
      {
        chapterTitle: "Node.js Basics",
        chapterContent: [
          { lectureTitle: "Intro to Node", lectureDuration: 10 },
          { lectureTitle: "Event Loop", lectureDuration: 14 }
        ]
      },
      {
        chapterTitle: "Building APIs",
        chapterContent: [
          { lectureTitle: "Express Setup", lectureDuration: 16 },
          { lectureTitle: "Middlewares", lectureDuration: 12 }
        ]
      },
      {
        chapterTitle: "Authentication",
        chapterContent: [
          { lectureTitle: "JWT Auth", lectureDuration: 18 },
          { lectureTitle: "OAuth Basics", lectureDuration: 20 }
        ]
      }
    ]
  },

  {
    _id: "c7",
    courseTitle: "JavaScript Zero to Hero",
    courseThumbnail:
      "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg",
    educator: { name: "Arjun Patel" },
    coursePrice: 599,
    discount: 10,
    courseRatings: [{ rating: 5 }, { rating: 3 }, { rating: 4 }, { rating: 4 }],
    courseDescription:
      "Start from absolute basics and master JavaScript through projects, DOM manipulation, ES6+ concepts, and problem solving.",

    enrolledStudents: [
      { studentId: "u112", name: "Nikita Sen" },
      { studentId: "u113", name: "Aman Chaudhary" }
    ],

    courseContent: [
      {
        chapterTitle: "JS Foundations",
        chapterContent: [
          { lectureTitle: "Variables & Scope", lectureDuration: 12 },
          { lectureTitle: "Functions", lectureDuration: 14 }
        ]
      },
      {
        chapterTitle: "DOM Manipulation",
        chapterContent: [
          { lectureTitle: "Selecting Elements", lectureDuration: 16 },
          { lectureTitle: "Events", lectureDuration: 18 }
        ]
      },
      {
        chapterTitle: "ES6+ Features",
        chapterContent: [
          { lectureTitle: "Arrow Functions", lectureDuration: 12 },
          { lectureTitle: "Promises & Async", lectureDuration: 20 }
        ]
      }
    ]
  },

  {
    _id: "c8",
    courseTitle: "Machine Learning with TensorFlow",
    courseThumbnail:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    educator: { name: "Dr. Kavya Iyer" },
    coursePrice: 1699,
    discount: 45,
    courseRatings: [{ rating: 5 }, { rating: 5 }, { rating: 4 }],
    courseDescription:
      "Learn how to build and train neural networks using TensorFlow with practical ML workflows and real-world datasets.",

    enrolledStudents: [{ studentId: "u114", name: "Sandeep Jain" }],

    courseContent: [
      {
        chapterTitle: "TensorFlow Basics",
        chapterContent: [
          { lectureTitle: "Tensors 101", lectureDuration: 10 },
          { lectureTitle: "Building Models", lectureDuration: 14 }
        ]
      },
      {
        chapterTitle: "Training Models",
        chapterContent: [
          { lectureTitle: "Loss & Optimizers", lectureDuration: 16 },
          { lectureTitle: "Training Loops", lectureDuration: 18 }
        ]
      },
      {
        chapterTitle: "Neural Networks",
        chapterContent: [
          { lectureTitle: "Dense Networks", lectureDuration: 20 },
          { lectureTitle: "CNN Basics", lectureDuration: 22 }
        ]
      }
    ]
  }
];


export const dummyTestimonials = [
  {
    name: "Riya Sharma",
    role: "B.Tech Student, CSE",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    feedback:
      "The MERN courses helped me build real-world projects. I landed my first remote internship thanks to these lessons!"
  },
  {
    name: "Arjun Patel",
    role: "Junior Web Developer",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    feedback:
      "The React + Tailwind Mastery course transformed my UI skills. Super easy explanations and practical tasks!"
  },
  {
    name: "Sahana Iyer",
    role: "AI/ML Enthusiast",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    feedback:
      "I had zero ML background, but the AI/ML Foundation course made concepts clear. The projects boosted my confidence."
  },
  {
    name: "Kunal Mehra",
    role: "Freelance Developer",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    feedback:
      "Thanks to the backend course, I now build secure and scalable APIs for clients. One of the best learning platforms!"
  }
];
