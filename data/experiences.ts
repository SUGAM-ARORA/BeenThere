import { Experience } from '@/types/company';

export const companyExperiences: Record<string, Experience[]> = {
  '1': [
    // Google
    {
      id: '1',
      studentName: 'Rahul S.',
      batch: '2023',
      college: 'IIT Delhi',
      role: 'SDE-1',
      package: '₹45 LPA',
      experienceType: 'Full-time',
      difficulty: 'Hard',
      difficultyNote:
        'Difficulty is subjective and varies by individual preparation and background',
      process: [
        'Online Assessment (90 mins)',
        'Technical Phone Screen (45 mins)',
        'Virtual Onsite - Coding (45 mins)',
        'Virtual Onsite - System Design (45 mins)',
        'Virtual Onsite - Behavioral (30 mins)',
        'Team Matching (30 mins)',
      ],
      requirements: [
        {
          category: 'Technical Skills',
          details: [
            'Master Data Structures & Algorithms',
            'System Design fundamentals',
            'Proficiency in Python/Java/C++',
            'Understanding of time/space complexity',
            'Knowledge of design patterns',
          ],
        },
        {
          category: 'Academic Requirements',
          details: [
            'CGPA > 8.0 (preferred)',
            'No active backlogs',
            'Computer Science or related field',
            'Strong mathematical foundation',
          ],
        },
        {
          category: 'Experience & Projects',
          details: [
            '2+ significant projects',
            'Open source contributions (GitHub)',
            'Internship experience preferred',
            'Competitive programming background',
          ],
        },
      ],
      topics: [
        {
          subject: 'Data Structures & Algorithms',
          importance: 'High',
          resources: [
            'LeetCode (500+ problems)',
            'TakeUForward (Striver A2Z DSA)',
            'GeeksforGeeks DSA Course',
            'Cracking the Coding Interview',
            'Elements of Programming Interviews',
          ],
        },
        {
          subject: 'System Design',
          importance: 'High',
          resources: [
            'Grokking System Design Interview',
            'System Design Primer (GitHub)',
            'Designing Data-Intensive Applications',
            'High Scalability Blog',
            'System Design Interview by Alex Xu',
          ],
        },
        {
          subject: 'Object Oriented Programming',
          importance: 'Medium',
          resources: [
            'Head First Design Patterns',
            'Clean Code by Robert Martin',
            'Effective Java by Joshua Bloch',
            'SOLID Principles',
          ],
        },
      ],
      tips: [
        'Practice 3-4 LeetCode problems daily for at least 6 months',
        'Focus on medium to hard problems, especially Google tagged ones',
        'Master the art of explaining your thought process clearly',
        'Practice system design on whiteboard/paper regularly',
        'Know your projects inside out - be ready for deep technical questions',
      ],
      timeline: '6 weeks',
      selected: true,
      location: 'Bangalore, India',
      date: '2023-09-15',
      isOffCampus: false,
    },
    {
      id: '2',
      studentName: 'Priya M.',
      batch: '2023',
      college: 'IIIT Hyderabad',
      role: 'Product Manager Intern',
      package: '₹80,000/month',
      experienceType: 'Internship',
      difficulty: 'Medium',
      difficultyNote:
        'Difficulty perception varies based on individual background and preparation level',
      process: [
        'Resume Screening',
        'Product Sense Case Study (60 mins)',
        'Analytical Thinking Round (45 mins)',
        'Final Interview with PM (45 mins)',
      ],
      requirements: [
        {
          category: 'Core Skills',
          details: [
            'Strong analytical thinking',
            'Product intuition',
            'Excellent communication',
            'User empathy',
            'Business acumen',
          ],
        },
      ],
      topics: [
        {
          subject: 'Product Management Fundamentals',
          importance: 'High',
          resources: [
            'Cracking the PM Interview',
            'Inspired by Marty Cagan',
            'The Lean Startup',
            'Product School YouTube',
          ],
        },
      ],
      tips: [
        'Practice product sense questions daily',
        'Know Google products extremely well',
        'Develop structured frameworks for case studies',
      ],
      timeline: '4 weeks',
      selected: false,
      location: 'Mountain View, CA',
      date: '2023-08-20',
      isPPOConverted: false,
      isOffCampus: false,
    },
  ],
  '2': [
    // Microsoft
    {
      id: '3',
      studentName: 'Amit K.',
      batch: '2023',
      college: 'IIT Kanpur',
      role: 'SDE-1',
      package: '₹42 LPA',
      experienceType: 'Full-time',
      difficulty: 'Hard',
      difficultyNote:
        'Individual experience may vary based on preparation and technical background',
      process: [
        'Online Assessment (3 hours)',
        'Technical Phone Screen (1 hour)',
        'Virtual Onsite Round 1 - Coding (1 hour)',
        'Virtual Onsite Round 2 - System Design (1 hour)',
        'Virtual Onsite Round 3 - Behavioral (45 mins)',
        'Final Round with Hiring Manager (30 mins)',
      ],
      requirements: [
        {
          category: 'Technical Skills',
          details: [
            'Strong programming fundamentals',
            'Advanced DSA knowledge',
            'System design expertise',
            'Database concepts',
            'Cloud computing basics (Azure preferred)',
          ],
        },
      ],
      topics: [
        {
          subject: 'Data Structures & Algorithms',
          importance: 'High',
          resources: [
            'LeetCode Microsoft tagged',
            'TakeUForward Striver SDE Sheet',
            'GeeksforGeeks Interview Preparation',
            'InterviewBit Programming',
            'Elements of Programming Interviews',
          ],
        },
        {
          subject: 'System Design',
          importance: 'High',
          resources: [
            'Designing Data-Intensive Applications',
            'System Design Interview',
            'Microsoft Azure Architecture',
            'Scalability patterns',
          ],
        },
      ],
      tips: [
        'Be very strong in programming fundamentals',
        'Practice coding on whiteboard and paper',
        'Understand Microsoft technologies and ecosystem',
        'Prepare behavioral questions about teamwork and growth mindset',
      ],
      timeline: '8 weeks',
      selected: true,
      location: 'Hyderabad, India',
      date: '2023-10-05',
      isOffCampus: false,
    },
  ],
  '3': [
    // Amazon
    {
      id: '4',
      studentName: 'Sneha P.',
      batch: '2023',
      college: 'BITS Pilani',
      role: 'SDE-1',
      package: '₹40 LPA',
      experienceType: 'Full-time',
      difficulty: 'Hard',
      difficultyNote:
        'Difficulty assessment is subjective and depends on individual preparation',
      process: [
        'Online Assessment (2 hours)',
        'Technical Round 1 - Coding (1 hour)',
        'Technical Round 2 - System Design (1 hour)',
        'Behavioral Round - Bar Raiser (1 hour)',
        'Final Round - Hiring Manager (45 mins)',
      ],
      requirements: [
        {
          category: 'Technical Skills',
          details: [
            'Excellent coding skills',
            'System design knowledge',
            'AWS services familiarity',
            'Distributed systems understanding',
            'Performance optimization',
          ],
        },
        {
          category: 'Leadership Principles',
          details: [
            'Customer Obsession',
            'Ownership',
            'Invent and Simplify',
            'Learn and Be Curious',
            'Hire and Develop the Best',
          ],
        },
      ],
      topics: [
        {
          subject: 'Data Structures & Algorithms',
          importance: 'High',
          resources: [
            'LeetCode Amazon tagged (300+ problems)',
            'TakeUForward Complete DSA',
            'GeeksforGeeks Amazon Interview',
            'InterviewBit Amazon Prep',
            'Amazon specific coding patterns',
          ],
        },
        {
          subject: 'Amazon Leadership Principles',
          importance: 'High',
          resources: [
            'Amazon official LP documentation',
            'STAR method examples',
            'Behavioral interview prep',
            'Real-life examples preparation',
          ],
        },
      ],
      tips: [
        'Master all 16 Amazon Leadership Principles with real examples',
        'Practice LeetCode medium-hard problems extensively',
        'Prepare multiple STAR format stories for each LP',
        'Know Amazon services and their use cases',
      ],
      timeline: '10 weeks',
      selected: true,
      location: 'Bangalore, India',
      date: '2023-09-30',
      isOffCampus: false,
    },
  ],
  '4': [
    // Flipkart
    {
      id: '5',
      studentName: 'Vikash R.',
      batch: '2023',
      college: 'VIT Vellore',
      role: 'SDE-1',
      package: '₹24 LPA',
      experienceType: 'Full-time',
      difficulty: 'Medium',
      difficultyNote:
        'Difficulty level can vary based on individual technical background and preparation',
      process: [
        'Online Coding Test (2 hours)',
        'Technical Interview 1 - DSA (1 hour)',
        'Technical Interview 2 - System Design (1 hour)',
        'HR Round (30 mins)',
      ],
      requirements: [
        {
          category: 'Technical Skills',
          details: [
            'Strong programming skills in Java/Python/C++',
            'Good problem-solving abilities',
            'Basic system design knowledge',
            'Database concepts',
          ],
        },
      ],
      topics: [
        {
          subject: 'Data Structures & Algorithms',
          importance: 'High',
          resources: [
            'TakeUForward Striver DSA Playlist',
            'GeeksforGeeks DSA Self Paced',
            'InterviewBit Programming',
            'LeetCode medium problems',
            'Coding Ninjas',
          ],
        },
        {
          subject: 'System Design',
          importance: 'Medium',
          resources: [
            'Basic system design concepts',
            'E-commerce system design',
            'Database design',
            'Caching strategies',
          ],
        },
      ],
      tips: [
        'Focus on clear problem-solving approach',
        'Know about e-commerce systems and challenges',
        'Practice coding in your preferred language fluently',
        'Be confident and communicate your thought process',
      ],
      timeline: '6 weeks',
      selected: true,
      location: 'Bangalore, India',
      date: '2023-08-15',
      isOffCampus: false,
    },
  ],
  '5': [
    // Paytm
    {
      id: '6',
      studentName: 'Ananya S.',
      batch: '2023',
      college: 'NIT Trichy',
      role: 'SDE-1',
      package: '₹18 LPA',
      experienceType: 'Full-time',
      difficulty: 'Medium',
      difficultyNote: 'Standard difficulty for fintech companies',
      process: [
        'Online Assessment (2 hours)',
        'Technical Round 1 - DSA (45 mins)',
        'Technical Round 2 - System Design (45 mins)',
        'HR Round (30 mins)',
      ],
      requirements: [
        {
          category: 'Technical Skills',
          details: [
            'Strong programming fundamentals',
            'DSA proficiency',
            'Understanding of payment systems',
            'Database knowledge',
            'API development',
          ],
        },
      ],
      topics: [
        {
          subject: 'Data Structures & Algorithms',
          importance: 'High',
          resources: [
            'TakeUForward DSA Course',
            'GeeksforGeeks Practice',
            'InterviewBit',
            'LeetCode Easy-Medium',
            'HackerRank',
          ],
        },
        {
          subject: 'Payment Systems',
          importance: 'Medium',
          resources: [
            'Payment gateway concepts',
            'Digital wallet architecture',
            'Security in payments',
            'UPI system understanding',
          ],
        },
      ],
      tips: [
        'Understand fintech domain and payment systems',
        'Practice problems related to financial calculations',
        'Know about digital payment security',
        "Be familiar with Paytm's business model",
      ],
      timeline: '5 weeks',
      selected: true,
      location: 'Noida, India',
      date: '2023-09-20',
      isOffCampus: false,
    },
  ],
  '6': [
    // Zomato
    {
      id: '7',
      studentName: 'Karan M.',
      batch: '2023',
      college: 'DTU',
      role: 'SDE-1',
      package: '₹16 LPA',
      experienceType: 'Full-time',
      difficulty: 'Medium',
      difficultyNote:
        'Moderate difficulty with focus on practical problem solving',
      process: [
        'Online Coding Test (90 mins)',
        'Technical Interview 1 (45 mins)',
        'Technical Interview 2 (45 mins)',
        'Final Round with Manager (30 mins)',
      ],
      requirements: [
        {
          category: 'Technical Skills',
          details: [
            'Good programming skills',
            'Problem-solving abilities',
            'Basic system design',
            'Database concepts',
            'API development',
          ],
        },
      ],
      topics: [
        {
          subject: 'Data Structures & Algorithms',
          importance: 'High',
          resources: [
            'TakeUForward Basics to Advanced',
            'GeeksforGeeks DSA',
            'InterviewBit Practice',
            'LeetCode Easy-Medium problems',
          ],
        },
        {
          subject: 'System Design',
          importance: 'Medium',
          resources: [
            'Food delivery system design',
            'Location-based services',
            'Real-time tracking systems',
            'Database design for restaurants',
          ],
        },
      ],
      tips: [
        'Understand food delivery business model',
        'Practice location-based algorithm problems',
        'Know about real-time systems and tracking',
        "Be familiar with Zomato's features and challenges",
      ],
      timeline: '4 weeks',
      selected: true,
      location: 'Gurugram, India',
      date: '2023-08-25',
      isOffCampus: false,
    },
  ],
  '7': [
    // Adobe
    {
      id: '8',
      studentName: 'Riya K.',
      batch: '2023',
      college: 'IIIT Bangalore',
      role: 'SDE-1',
      package: '₹32 LPA',
      experienceType: 'Full-time',
      difficulty: 'Hard',
      difficultyNote:
        'Requires strong technical skills and creative problem solving',
      process: [
        'Online Assessment (2.5 hours)',
        'Technical Round 1 - Coding (1 hour)',
        'Technical Round 2 - System Design (1 hour)',
        'Technical Round 3 - Product Discussion (45 mins)',
        'HR Round (30 mins)',
      ],
      requirements: [
        {
          category: 'Technical Skills',
          details: [
            'Advanced programming skills',
            'Strong DSA knowledge',
            'System design expertise',
            'Frontend/Backend development',
            'Creative problem solving',
          ],
        },
      ],
      topics: [
        {
          subject: 'Data Structures & Algorithms',
          importance: 'High',
          resources: [
            'TakeUForward Advanced DSA',
            'GeeksforGeeks Adobe Interview',
            'InterviewBit Advanced',
            'LeetCode Hard problems',
            'Competitive Programming',
          ],
        },
        {
          subject: 'System Design',
          importance: 'High',
          resources: [
            'Creative software architecture',
            'Media processing systems',
            'Cloud-based design tools',
            'Real-time collaboration systems',
          ],
        },
      ],
      tips: [
        'Focus on creative and innovative solutions',
        "Understand Adobe's product ecosystem",
        'Practice problems related to graphics and media',
        'Be prepared for product-related discussions',
      ],
      timeline: '8 weeks',
      selected: true,
      location: 'Bangalore, India',
      date: '2023-10-10',
      isOffCampus: false,
    },
  ],
  '8': [
    // Salesforce
    {
      id: '9',
      studentName: 'Arjun P.',
      batch: '2023',
      college: 'BITS Goa',
      role: 'SDE-1',
      package: '₹28 LPA',
      experienceType: 'Full-time',
      difficulty: 'Medium',
      difficultyNote: 'Balanced difficulty with focus on cloud technologies',
      process: [
        'Online Assessment (2 hours)',
        'Technical Round 1 - Coding (1 hour)',
        'Technical Round 2 - System Design (1 hour)',
        'Behavioral Round (45 mins)',
        'Final Round (30 mins)',
      ],
      requirements: [
        {
          category: 'Technical Skills',
          details: [
            'Strong programming fundamentals',
            'Cloud computing knowledge',
            'Database management',
            'API development',
            'CRM understanding',
          ],
        },
      ],
      topics: [
        {
          subject: 'Data Structures & Algorithms',
          importance: 'High',
          resources: [
            'TakeUForward Complete Course',
            'GeeksforGeeks Salesforce Prep',
            'InterviewBit Cloud',
            'LeetCode Medium problems',
          ],
        },
        {
          subject: 'Cloud Computing',
          importance: 'High',
          resources: [
            'Salesforce Platform basics',
            'Cloud architecture patterns',
            'CRM system design',
            'Multi-tenant architecture',
          ],
        },
      ],
      tips: [
        'Understand cloud computing fundamentals',
        'Learn about CRM systems and business processes',
        'Practice problems related to multi-tenancy',
        'Know Salesforce platform basics',
      ],
      timeline: '6 weeks',
      selected: true,
      location: 'Hyderabad, India',
      date: '2023-09-12',
      isOffCampus: false,
    },
  ],
};
