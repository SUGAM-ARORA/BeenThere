import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Code,
  Database,
  Globe,
  Lightbulb,
  Target,
  Users,
  Video,
  FileText,
  ExternalLink,
  Brain,
  Shield,
  BarChart3,
  Cloud,
  Cpu,
  Palette,
  Server,
  Zap,
  Eye,
  Smartphone,
  Lock,
  Wifi,
  Monitor,
  HardDrive,
  Activity,
} from 'lucide-react';
import Link from 'next/link';

const resourceCategories = [
  {
    id: 'coding',
    title: 'Coding & DSA',
    icon: Code,
    description:
      'Master data structures, algorithms, and competitive programming',
    resources: [
      {
        name: 'TakeUForward (Striver)',
        description:
          'Complete DSA course by Striver with A2Z DSA sheet and interview preparation',
        url: 'https://takeuforward.org',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['DSA', 'Striver', 'A2Z Sheet', 'Interview Prep'],
      },
      {
        name: 'NextRoundAI',
        description:
          'AI-powered interview preparation platform with personalized feedback and practice',
        url: 'https://nextroundai.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['AI Interview Prep', 'Mock Interviews', 'Feedback', 'Practice'],
      },
      {
        name: 'GeeksforGeeks DSA Self Paced',
        description:
          'Comprehensive DSA course with practice problems and interview preparation',
        url: 'https://geeksforgeeks.org',
        type: 'Platform',
        difficulty: 'Beginner to Advanced',
        tags: ['DSA', 'Tutorials', 'Practice', 'Interview'],
      },
      {
        name: 'InterviewBit Programming',
        description:
          'Structured programming interview preparation with guided paths',
        url: 'https://interviewbit.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Interview', 'DSA', 'Guided Learning'],
      },
      {
        name: 'LeetCode',
        description:
          'Practice coding problems with company-specific tags and contests',
        url: 'https://leetcode.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['DSA', 'Coding', 'Interview Prep', 'Contests'],
      },
      {
        name: 'Cracking the Coding Interview',
        description:
          'Essential book for technical interview preparation with 189 problems',
        url: '#',
        type: 'Book',
        difficulty: 'Intermediate',
        tags: ['Interview', 'DSA', 'System Design', 'Book'],
      },
      {
        name: 'AlgoExpert',
        description:
          'Curated coding interview questions with video explanations',
        url: 'https://algoexpert.io',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['DSA', 'Video', 'Interview', 'Explanations'],
      },
      {
        name: 'HackerRank',
        description:
          'Coding challenges, skill assessments, and interview preparation',
        url: 'https://hackerrank.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Coding', 'Practice', 'Contests', 'Skills'],
      },
      {
        name: 'CodeChef',
        description: 'Competitive programming platform with monthly contests',
        url: 'https://codechef.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Competitive Programming', 'Contests', 'Practice'],
      },
      {
        name: 'Codeforces',
        description:
          'Premier competitive programming platform with rating system',
        url: 'https://codeforces.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Competitive Programming', 'Contests', 'Rating'],
      },
      {
        name: 'AtCoder',
        description:
          'Japanese competitive programming platform with high-quality problems',
        url: 'https://atcoder.jp',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Competitive Programming', 'Quality Problems', 'Contests'],
      },
      {
        name: 'Pramp',
        description:
          'Free peer-to-peer mock interviews with real-time feedback',
        url: 'https://pramp.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Mock Interviews', 'Peer Practice', 'Free', 'Real-time'],
      },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    icon: Database,
    description: 'Learn to design scalable and distributed systems',
    resources: [
      {
        name: 'Grokking System Design Interview',
        description:
          'Comprehensive system design course with real examples and case studies',
        url: 'https://educative.io',
        type: 'Course',
        difficulty: 'Intermediate to Advanced',
        tags: ['System Design', 'Scalability', 'Architecture', 'Case Studies'],
      },
      {
        name: 'System Design Primer',
        description:
          'Open-source guide to system design concepts with GitHub repository',
        url: 'https://github.com/donnemartin/system-design-primer',
        type: 'Repository',
        difficulty: 'Intermediate',
        tags: ['System Design', 'Open Source', 'Concepts', 'GitHub'],
      },
      {
        name: 'Designing Data-Intensive Applications',
        description:
          'Deep dive into modern data systems and architecture patterns',
        url: '#',
        type: 'Book',
        difficulty: 'Advanced',
        tags: ['Data Systems', 'Architecture', 'Scalability', 'Book'],
      },
      {
        name: 'High Scalability',
        description: 'Real-world system design case studies from top companies',
        url: 'http://highscalability.com',
        type: 'Blog',
        difficulty: 'Intermediate to Advanced',
        tags: ['Case Studies', 'Scalability', 'Architecture', 'Real-world'],
      },
      {
        name: 'ByteByteGo',
        description:
          'System design newsletter and visual explanations by Alex Xu',
        url: 'https://bytebytego.com',
        type: 'Newsletter',
        difficulty: 'Intermediate',
        tags: ['System Design', 'Visual Learning', 'Newsletter', 'Alex Xu'],
      },
      {
        name: 'System Design Interview by Alex Xu',
        description:
          'Popular system design interview preparation book with diagrams',
        url: '#',
        type: 'Book',
        difficulty: 'Intermediate',
        tags: ['System Design', 'Interview', 'Preparation', 'Diagrams'],
      },
      {
        name: 'Distributed Systems Course (MIT)',
        description:
          "MIT's distributed systems course with lectures and assignments",
        url: 'https://pdos.csail.mit.edu/6.824/',
        type: 'Course',
        difficulty: 'Advanced',
        tags: ['Distributed Systems', 'MIT', 'Academic', 'Theory'],
      },
      {
        name: 'AWS Architecture Center',
        description: 'AWS reference architectures and best practices',
        url: 'https://aws.amazon.com/architecture/',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['AWS', 'Cloud Architecture', 'Best Practices', 'Reference'],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Palette,
    description: 'Modern frontend frameworks and UI/UX development',
    resources: [
      {
        name: 'React Documentation',
        description:
          'Official React.js documentation with interactive tutorials',
        url: 'https://react.dev',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['React', 'Frontend', 'JavaScript', 'Official'],
      },
      {
        name: 'Next.js Learn',
        description:
          'Interactive Next.js tutorial and comprehensive documentation',
        url: 'https://nextjs.org/learn',
        type: 'Course',
        difficulty: 'Intermediate',
        tags: ['Next.js', 'React', 'Full Stack', 'SSR'],
      },
      {
        name: 'Vue.js Guide',
        description:
          'Progressive JavaScript framework documentation and ecosystem',
        url: 'https://vuejs.org/guide',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['Vue.js', 'Frontend', 'JavaScript', 'Progressive'],
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework documentation and components',
        url: 'https://tailwindcss.com/docs',
        type: 'Documentation',
        difficulty: 'Beginner',
        tags: ['CSS', 'Styling', 'Framework', 'Utility-first'],
      },
      {
        name: 'Frontend Masters',
        description:
          'Advanced frontend engineering courses from industry experts',
        url: 'https://frontendmasters.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Courses', 'Advanced', 'Frontend', 'Expert-led'],
      },
      {
        name: 'Figma Academy',
        description: 'Learn UI/UX design with Figma tools and best practices',
        url: 'https://figma.com/academy',
        type: 'Course',
        difficulty: 'Beginner',
        tags: ['Design', 'UI/UX', 'Figma', 'Tools'],
      },
      {
        name: 'Angular Documentation',
        description: 'Comprehensive Angular framework guide and CLI tools',
        url: 'https://angular.io/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Angular', 'TypeScript', 'Framework', 'Google'],
      },
      {
        name: 'Svelte Tutorial',
        description:
          'Modern reactive framework with great performance and small bundle size',
        url: 'https://svelte.dev/tutorial',
        type: 'Tutorial',
        difficulty: 'Beginner to Intermediate',
        tags: ['Svelte', 'Reactive', 'Performance', 'Modern'],
      },
      {
        name: 'MDN Web Docs',
        description: 'Comprehensive web development documentation by Mozilla',
        url: 'https://developer.mozilla.org',
        type: 'Documentation',
        difficulty: 'All Levels',
        tags: ['Web Standards', 'HTML', 'CSS', 'JavaScript'],
      },
      {
        name: 'CSS-Tricks',
        description: 'CSS techniques, tips, and frontend development articles',
        url: 'https://css-tricks.com',
        type: 'Blog',
        difficulty: 'All Levels',
        tags: ['CSS', 'Tips', 'Techniques', 'Articles'],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    description: 'Server-side development and API design',
    resources: [
      {
        name: 'Node.js Documentation',
        description:
          'Server-side JavaScript development with comprehensive guides',
        url: 'https://nodejs.org/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Node.js', 'Backend', 'JavaScript', 'Server'],
      },
      {
        name: 'Express.js Guide',
        description:
          'Fast, unopinionated web framework for Node.js applications',
        url: 'https://expressjs.com',
        type: 'Documentation',
        difficulty: 'Beginner to Intermediate',
        tags: ['Express.js', 'Node.js', 'API', 'Framework'],
      },
      {
        name: 'Django Documentation',
        description: 'High-level Python web framework for rapid development',
        url: 'https://docs.djangoproject.com',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Django', 'Python', 'Web Framework', 'ORM'],
      },
      {
        name: 'Spring Boot',
        description:
          'Java-based framework for microservices and enterprise applications',
        url: 'https://spring.io/projects/spring-boot',
        type: 'Documentation',
        difficulty: 'Intermediate to Advanced',
        tags: ['Java', 'Spring', 'Microservices', 'Enterprise'],
      },
      {
        name: 'FastAPI',
        description:
          'Modern, fast web framework for building APIs with Python 3.7+',
        url: 'https://fastapi.tiangolo.com',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Python', 'API', 'FastAPI', 'Modern'],
      },
      {
        name: 'GraphQL',
        description: 'Query language and runtime for APIs with type system',
        url: 'https://graphql.org/learn',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['GraphQL', 'API', 'Query Language', 'Type System'],
      },
      {
        name: 'Ruby on Rails',
        description:
          'Web application framework written in Ruby with conventions',
        url: 'https://rubyonrails.org',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['Ruby', 'Rails', 'Web Framework', 'Convention'],
      },
      {
        name: 'ASP.NET Core',
        description:
          'Cross-platform framework for building modern web applications',
        url: 'https://docs.microsoft.com/aspnet/core',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['C#', '.NET', 'Microsoft', 'Cross-platform'],
      },
      {
        name: 'Postman Learning Center',
        description:
          'API development and testing tools with comprehensive tutorials',
        url: 'https://learning.postman.com',
        type: 'Platform',
        difficulty: 'Beginner',
        tags: ['API Testing', 'Postman', 'Tools', 'Development'],
      },
      {
        name: 'REST API Design Guide',
        description: 'Best practices for designing RESTful APIs',
        url: 'https://restfulapi.net',
        type: 'Guide',
        difficulty: 'Intermediate',
        tags: ['REST API', 'Design', 'Best Practices', 'Architecture'],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Cloud,
    description: 'Infrastructure, deployment, and cloud technologies',
    resources: [
      {
        name: 'Docker Documentation',
        description:
          'Containerization platform and tools for application deployment',
        url: 'https://docs.docker.com',
        type: 'Documentation',
        difficulty: 'Beginner to Intermediate',
        tags: ['Docker', 'Containers', 'DevOps', 'Deployment'],
      },
      {
        name: 'Kubernetes Documentation',
        description:
          'Container orchestration platform for managing containerized applications',
        url: 'https://kubernetes.io/docs',
        type: 'Documentation',
        difficulty: 'Intermediate to Advanced',
        tags: ['Kubernetes', 'Orchestration', 'DevOps', 'Containers'],
      },
      {
        name: 'AWS Documentation',
        description: 'Amazon Web Services cloud platform with 200+ services',
        url: 'https://docs.aws.amazon.com',
        type: 'Documentation',
        difficulty: 'All Levels',
        tags: ['AWS', 'Cloud', 'Infrastructure', 'Services'],
      },
      {
        name: 'Terraform Documentation',
        description:
          'Infrastructure as Code tool for building and managing infrastructure',
        url: 'https://terraform.io/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Terraform', 'IaC', 'Infrastructure', 'Automation'],
      },
      {
        name: 'Jenkins Documentation',
        description: 'Open source automation server for CI/CD pipelines',
        url: 'https://jenkins.io/doc',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Jenkins', 'CI/CD', 'Automation', 'Pipeline'],
      },
      {
        name: 'Azure DevOps',
        description: 'Microsoft cloud DevOps services for development teams',
        url: 'https://docs.microsoft.com/azure/devops',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Azure', 'DevOps', 'Microsoft', 'Cloud'],
      },
      {
        name: 'Google Cloud Platform',
        description: "Google's cloud computing services and infrastructure",
        url: 'https://cloud.google.com/docs',
        type: 'Documentation',
        difficulty: 'All Levels',
        tags: ['GCP', 'Cloud', 'Google', 'Infrastructure'],
      },
      {
        name: 'Ansible Documentation',
        description: 'IT automation and configuration management platform',
        url: 'https://docs.ansible.com',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Ansible', 'Automation', 'Configuration', 'Management'],
      },
      {
        name: 'GitLab CI/CD',
        description: 'Continuous integration and deployment with GitLab',
        url: 'https://docs.gitlab.com/ee/ci',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['GitLab', 'CI/CD', 'DevOps', 'Pipeline'],
      },
      {
        name: 'Prometheus Monitoring',
        description: 'Open-source monitoring and alerting toolkit',
        url: 'https://prometheus.io/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Monitoring', 'Prometheus', 'Observability', 'Metrics'],
      },
      {
        name: 'GitHub Actions',
        description: 'CI/CD platform integrated with GitHub repositories',
        url: 'https://docs.github.com/actions',
        type: 'Documentation',
        difficulty: 'Beginner to Intermediate',
        tags: ['GitHub', 'CI/CD', 'Automation', 'Workflow'],
      },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Artificial Intelligence and Machine Learning resources',
    resources: [
      {
        name: 'Andrew Ng ML Course',
        description:
          'Comprehensive machine learning course by Andrew Ng on Coursera',
        url: 'https://coursera.org/learn/machine-learning',
        type: 'Course',
        difficulty: 'Beginner to Intermediate',
        tags: ['Machine Learning', 'Andrew Ng', 'Coursera', 'Fundamentals'],
      },
      {
        name: 'Fast.ai',
        description:
          'Practical deep learning for coders with top-down approach',
        url: 'https://fast.ai',
        type: 'Course',
        difficulty: 'Intermediate',
        tags: ['Deep Learning', 'Practical', 'Python', 'Top-down'],
      },
      {
        name: 'Hugging Face',
        description: 'Open source ML platform and model hub for NLP and beyond',
        url: 'https://huggingface.co',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['NLP', 'Transformers', 'Models', 'Open Source'],
      },
      {
        name: 'OpenAI Documentation',
        description: 'GPT and AI API documentation with examples and guides',
        url: 'https://platform.openai.com/docs',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['OpenAI', 'GPT', 'API', 'LLM'],
      },
      {
        name: 'Kaggle Learn',
        description:
          'Free micro-courses on data science and machine learning topics',
        url: 'https://kaggle.com/learn',
        type: 'Course',
        difficulty: 'Beginner to Intermediate',
        tags: ['Data Science', 'Kaggle', 'Free', 'Micro-courses'],
      },
      {
        name: 'Papers With Code',
        description: 'Latest ML research papers with code implementations',
        url: 'https://paperswithcode.com',
        type: 'Repository',
        difficulty: 'Advanced',
        tags: ['Research', 'Papers', 'Code', 'State-of-art'],
      },
      {
        name: 'LangChain',
        description:
          'Framework for developing applications with language models',
        url: 'https://langchain.com',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['LLM', 'Framework', 'AI Apps', 'Python'],
      },
      {
        name: 'DeepLearning.AI',
        description: 'Specialized courses in deep learning and AI by Andrew Ng',
        url: 'https://deeplearning.ai',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Deep Learning', 'AI', 'Specialization', 'Andrew Ng'],
      },
      {
        name: 'TensorFlow',
        description: 'Open source machine learning framework by Google',
        url: 'https://tensorflow.org',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['TensorFlow', 'ML Framework', 'Google', 'Python'],
      },
      {
        name: 'PyTorch',
        description:
          'Dynamic neural network framework with Python-first approach',
        url: 'https://pytorch.org',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['PyTorch', 'Neural Networks', 'Facebook', 'Dynamic'],
      },
      {
        name: 'Anthropic Claude',
        description: 'AI assistant and API documentation for Claude models',
        url: 'https://anthropic.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Claude', 'AI Assistant', 'API', 'Anthropic'],
      },
      {
        name: 'Stability AI',
        description:
          'Generative AI models and tools for image and text generation',
        url: 'https://stability.ai',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: [
          'Generative AI',
          'Stable Diffusion',
          'Models',
          'Image Generation',
        ],
      },
      {
        name: 'Google AI Education',
        description: 'Free AI and ML courses from Google with hands-on labs',
        url: 'https://ai.google/education',
        type: 'Course',
        difficulty: 'All Levels',
        tags: ['Google AI', 'Education', 'Free', 'Hands-on'],
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    icon: BarChart3,
    description: 'Data analysis, visualization, and business intelligence',
    resources: [
      {
        name: 'Pandas Documentation',
        description:
          'Python data manipulation and analysis library with comprehensive guides',
        url: 'https://pandas.pydata.org/docs',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['Python', 'Data Analysis', 'Pandas', 'DataFrames'],
      },
      {
        name: 'Tableau Learning',
        description:
          'Data visualization and business intelligence platform training',
        url: 'https://tableau.com/learn',
        type: 'Course',
        difficulty: 'Beginner to Intermediate',
        tags: ['Visualization', 'BI', 'Tableau', 'Dashboard'],
      },
      {
        name: 'Power BI Learning',
        description:
          'Microsoft business analytics solution with interactive visualizations',
        url: 'https://docs.microsoft.com/power-bi',
        type: 'Documentation',
        difficulty: 'Beginner to Intermediate',
        tags: ['Power BI', 'Microsoft', 'Analytics', 'Business Intelligence'],
      },
      {
        name: 'SQL for Data Science',
        description:
          'Database querying for data analysis with practical examples',
        url: 'https://mode.com/sql-tutorial',
        type: 'Tutorial',
        difficulty: 'Beginner',
        tags: ['SQL', 'Database', 'Data Analysis', 'Queries'],
      },
      {
        name: 'R for Data Science',
        description: 'Comprehensive guide to R programming for data science',
        url: 'https://r4ds.had.co.nz',
        type: 'Book',
        difficulty: 'Beginner to Intermediate',
        tags: ['R', 'Statistics', 'Data Science', 'Programming'],
      },
      {
        name: 'Apache Spark',
        description: 'Unified analytics engine for big data processing and ML',
        url: 'https://spark.apache.org/docs/latest',
        type: 'Documentation',
        difficulty: 'Intermediate to Advanced',
        tags: ['Big Data', 'Spark', 'Analytics', 'Distributed'],
      },
      {
        name: 'Jupyter Notebooks',
        description:
          'Interactive computing environment for data science and research',
        url: 'https://jupyter.org',
        type: 'Tool',
        difficulty: 'Beginner',
        tags: ['Jupyter', 'Interactive', 'Data Science', 'Notebooks'],
      },
      {
        name: 'Plotly',
        description:
          'Interactive data visualization library for Python, R, and JavaScript',
        url: 'https://plotly.com',
        type: 'Library',
        difficulty: 'Beginner to Intermediate',
        tags: ['Visualization', 'Interactive', 'Plotly', 'Charts'],
      },
      {
        name: 'Databricks',
        description:
          'Unified analytics platform for big data and machine learning',
        url: 'https://databricks.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Big Data', 'ML', 'Analytics', 'Cloud'],
      },
      {
        name: 'Snowflake',
        description: 'Cloud data platform for analytics and data warehousing',
        url: 'https://snowflake.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Cloud', 'Data Warehouse', 'Analytics', 'SQL'],
      },
      {
        name: 'NumPy Documentation',
        description: 'Fundamental package for scientific computing with Python',
        url: 'https://numpy.org/doc',
        type: 'Documentation',
        difficulty: 'Beginner to Intermediate',
        tags: ['Python', 'NumPy', 'Scientific Computing', 'Arrays'],
      },
    ],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst Track',
    icon: Activity,
    description: 'Specialized resources for aspiring data analysts',
    resources: [
      {
        name: 'Google Data Analytics Certificate',
        description:
          'Professional certificate program for data analytics career preparation',
        url: 'https://coursera.org/professional-certificates/google-data-analytics',
        type: 'Certificate',
        difficulty: 'Beginner',
        tags: ['Google', 'Certificate', 'Data Analytics', 'Career Prep'],
      },
      {
        name: 'Excel for Data Analysis',
        description:
          'Master Excel for data analysis, pivot tables, and visualization',
        url: 'https://support.microsoft.com/excel',
        type: 'Tutorial',
        difficulty: 'Beginner',
        tags: ['Excel', 'Data Analysis', 'Microsoft', 'Pivot Tables'],
      },
      {
        name: 'SQL for Data Analysts',
        description:
          'Complete SQL course specifically designed for data analysis',
        url: 'https://sqlbolt.com',
        type: 'Course',
        difficulty: 'Beginner',
        tags: ['SQL', 'Data Analysis', 'Database', 'Queries'],
      },
      {
        name: 'Tableau Public',
        description:
          'Free data visualization tool and community for sharing insights',
        url: 'https://public.tableau.com',
        type: 'Tool',
        difficulty: 'Beginner',
        tags: ['Tableau', 'Visualization', 'Free', 'Community'],
      },
      {
        name: 'Python for Data Analysis',
        description: 'Learn Python specifically for data analysis with pandas',
        url: 'https://wesmckinney.com/book',
        type: 'Book',
        difficulty: 'Intermediate',
        tags: ['Python', 'Data Analysis', 'Pandas', 'Book'],
      },
      {
        name: 'Statistics for Data Science',
        description: 'Essential statistics concepts for data analysts',
        url: 'https://khan-academy.org/math/statistics-probability',
        type: 'Course',
        difficulty: 'Beginner',
        tags: ['Statistics', 'Probability', 'Math', 'Fundamentals'],
      },
      {
        name: 'Looker Studio (Google Data Studio)',
        description: 'Free data visualization and reporting tool by Google',
        url: 'https://datastudio.google.com',
        type: 'Tool',
        difficulty: 'Beginner',
        tags: ['Google', 'Visualization', 'Reporting', 'Free'],
      },
      {
        name: 'Microsoft Power Platform',
        description:
          'Low-code platform for data analysis and business automation',
        url: 'https://powerplatform.microsoft.com',
        type: 'Platform',
        difficulty: 'Beginner to Intermediate',
        tags: ['Microsoft', 'Low-code', 'Analytics', 'Automation'],
      },
      {
        name: 'Alteryx Designer',
        description:
          'Self-service data analytics platform for data preparation',
        url: 'https://alteryx.com',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Data Preparation', 'Analytics', 'Self-service', 'ETL'],
      },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Information security and ethical hacking',
    resources: [
      {
        name: 'OWASP Top 10',
        description:
          'Top 10 web application security risks and mitigation strategies',
        url: 'https://owasp.org/www-project-top-ten',
        type: 'Guide',
        difficulty: 'Intermediate',
        tags: ['Web Security', 'OWASP', 'Vulnerabilities', 'Best Practices'],
      },
      {
        name: 'Cybrary',
        description: 'Free cybersecurity training platform with career paths',
        url: 'https://cybrary.it',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Training', 'Certification', 'Free', 'Career Paths'],
      },
      {
        name: 'TryHackMe',
        description:
          'Hands-on cybersecurity learning platform with guided paths',
        url: 'https://tryhackme.com',
        type: 'Platform',
        difficulty: 'Beginner to Advanced',
        tags: ['Hands-on', 'CTF', 'Learning', 'Guided'],
      },
      {
        name: 'HackTheBox',
        description:
          'Penetration testing labs and challenges for skill development',
        url: 'https://hackthebox.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Penetration Testing', 'Labs', 'CTF', 'Challenges'],
      },
      {
        name: 'SANS Training',
        description:
          'Professional cybersecurity training and certification programs',
        url: 'https://sans.org',
        type: 'Training',
        difficulty: 'Intermediate to Advanced',
        tags: ['Professional', 'Certification', 'SANS', 'Industry Standard'],
      },
      {
        name: 'Metasploit',
        description: 'Penetration testing framework for security assessment',
        url: 'https://metasploit.com',
        type: 'Tool',
        difficulty: 'Intermediate to Advanced',
        tags: ['Penetration Testing', 'Framework', 'Tool', 'Exploitation'],
      },
      {
        name: 'Burp Suite',
        description: 'Web application security testing platform and proxy',
        url: 'https://portswigger.net/burp',
        type: 'Tool',
        difficulty: 'Intermediate',
        tags: ['Web Security', 'Testing', 'Tool', 'Proxy'],
      },
      {
        name: 'Wireshark',
        description:
          'Network protocol analyzer for traffic analysis and debugging',
        url: 'https://wireshark.org',
        type: 'Tool',
        difficulty: 'Intermediate',
        tags: ['Network', 'Analysis', 'Protocol', 'Traffic'],
      },
      {
        name: 'Kali Linux',
        description:
          'Penetration testing and security auditing Linux distribution',
        url: 'https://kali.org',
        type: 'Platform',
        difficulty: 'Intermediate',
        tags: ['Linux', 'Penetration Testing', 'Security', 'Distribution'],
      },
      {
        name: 'CompTIA Security+',
        description:
          'Entry-level cybersecurity certification and study materials',
        url: 'https://comptia.org/certifications/security',
        type: 'Certification',
        difficulty: 'Beginner to Intermediate',
        tags: ['CompTIA', 'Certification', 'Security', 'Entry-level'],
      },
      {
        name: 'NIST Cybersecurity Framework',
        description:
          'Framework for improving critical infrastructure cybersecurity',
        url: 'https://nist.gov/cyberframework',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['NIST', 'Framework', 'Standards', 'Governance'],
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'iOS, Android, and cross-platform mobile development',
    resources: [
      {
        name: 'React Native',
        description:
          'Cross-platform mobile development using React and JavaScript',
        url: 'https://reactnative.dev',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['React Native', 'Cross-platform', 'Mobile', 'JavaScript'],
      },
      {
        name: 'Flutter Documentation',
        description:
          "Google's UI toolkit for mobile, web, and desktop applications",
        url: 'https://flutter.dev/docs',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['Flutter', 'Dart', 'Cross-platform', 'Google'],
      },
      {
        name: 'Swift Documentation',
        description:
          "Apple's programming language for iOS and macOS development",
        url: 'https://swift.org/documentation',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Swift', 'iOS', 'Apple', 'Native'],
      },
      {
        name: 'Android Developers',
        description: 'Official Android development documentation and resources',
        url: 'https://developer.android.com',
        type: 'Documentation',
        difficulty: 'Beginner to Advanced',
        tags: ['Android', 'Kotlin', 'Java', 'Google'],
      },
      {
        name: 'Ionic Framework',
        description:
          'Cross-platform mobile app development with web technologies',
        url: 'https://ionicframework.com/docs',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['Ionic', 'Cross-platform', 'Web Technologies', 'Hybrid'],
      },
      {
        name: 'Xamarin',
        description: "Microsoft's cross-platform mobile development solution",
        url: 'https://docs.microsoft.com/xamarin',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['Xamarin', 'Microsoft', 'Cross-platform', 'C#'],
      },
      {
        name: 'Kotlin Multiplatform',
        description: 'Share code between Android and iOS using Kotlin',
        url: 'https://kotlinlang.org/lp/mobile',
        type: 'Framework',
        difficulty: 'Intermediate to Advanced',
        tags: ['Kotlin', 'Multiplatform', 'JetBrains', 'Code Sharing'],
      },
      {
        name: 'Firebase',
        description: "Google's mobile and web application development platform",
        url: 'https://firebase.google.com/docs',
        type: 'Platform',
        difficulty: 'Beginner to Intermediate',
        tags: ['Firebase', 'Backend', 'Google', 'BaaS'],
      },
      {
        name: 'Expo',
        description:
          'Platform for universal React applications with managed workflow',
        url: 'https://docs.expo.dev',
        type: 'Platform',
        difficulty: 'Beginner to Intermediate',
        tags: ['Expo', 'React Native', 'Universal', 'Managed'],
      },
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    icon: Lock,
    description: 'Blockchain development and cryptocurrency',
    resources: [
      {
        name: 'Ethereum Documentation',
        description: 'Decentralized platform for smart contracts and DApps',
        url: 'https://ethereum.org/developers',
        type: 'Documentation',
        difficulty: 'Intermediate to Advanced',
        tags: ['Ethereum', 'Smart Contracts', 'Blockchain', 'DApps'],
      },
      {
        name: 'Solidity Documentation',
        description: 'Programming language for Ethereum smart contracts',
        url: 'https://docs.soliditylang.org',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Solidity', 'Smart Contracts', 'Programming', 'Ethereum'],
      },
      {
        name: 'Web3.js',
        description:
          'JavaScript library for interacting with Ethereum blockchain',
        url: 'https://web3js.readthedocs.io',
        type: 'Library',
        difficulty: 'Intermediate',
        tags: ['Web3', 'JavaScript', 'Ethereum', 'Library'],
      },
      {
        name: 'OpenZeppelin',
        description:
          'Secure smart contract development framework and libraries',
        url: 'https://openzeppelin.com/contracts',
        type: 'Framework',
        difficulty: 'Intermediate',
        tags: ['Security', 'Smart Contracts', 'Framework', 'Libraries'],
      },
      {
        name: 'Hardhat',
        description:
          'Ethereum development environment for testing and deployment',
        url: 'https://hardhat.org/docs',
        type: 'Tool',
        difficulty: 'Intermediate',
        tags: ['Development Environment', 'Ethereum', 'Testing', 'Deployment'],
      },
      {
        name: 'Polygon Documentation',
        description: 'Ethereum scaling and infrastructure development platform',
        url: 'https://docs.polygon.technology',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Polygon', 'Scaling', 'Layer 2', 'Infrastructure'],
      },
      {
        name: 'Chainlink',
        description: 'Decentralized oracle networks for smart contracts',
        url: 'https://docs.chain.link',
        type: 'Documentation',
        difficulty: 'Intermediate',
        tags: ['Oracles', 'Chainlink', 'Data', 'Smart Contracts'],
      },
      {
        name: 'Truffle Suite',
        description: 'Development tools for Ethereum smart contracts',
        url: 'https://trufflesuite.com/docs',
        type: 'Tool',
        difficulty: 'Intermediate',
        tags: ['Development Tools', 'Ethereum', 'Smart Contracts', 'Testing'],
      },
    ],
  },
  {
    id: 'learning-platforms',
    title: 'Learning Platforms',
    icon: Video,
    description: 'Online courses and educational platforms',
    resources: [
      {
        name: 'Coursera',
        description: 'University-level courses from top institutions worldwide',
        url: 'https://coursera.org',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Courses', 'Certificates', 'University', 'Academic'],
      },
      {
        name: 'edX',
        description:
          'Free online courses from Harvard, MIT, and other top universities',
        url: 'https://edx.org',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Free', 'University', 'Certificates', 'Academic'],
      },
      {
        name: 'Udemy',
        description: 'Practical courses on programming and technology skills',
        url: 'https://udemy.com',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Practical', 'Programming', 'Technology', 'Skills'],
      },
      {
        name: 'Pluralsight',
        description:
          'Technology skills platform for developers and IT professionals',
        url: 'https://pluralsight.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Technology', 'Skills', 'Professional', 'Assessment'],
      },
      {
        name: 'LinkedIn Learning',
        description: 'Professional development and skill building courses',
        url: 'https://linkedin.com/learning',
        type: 'Platform',
        difficulty: 'All Levels',
        tags: ['Professional', 'Skills', 'Networking', 'Career'],
      },
      {
        name: 'YouTube Tech Channels',
        description: 'Free educational content from tech creators and experts',
        url: '#',
        type: 'Video',
        difficulty: 'All Levels',
        tags: ['Free', 'Video', 'Tutorials', 'Community'],
      },
      {
        name: 'freeCodeCamp',
        description: 'Free coding bootcamp with certifications and projects',
        url: 'https://freecodecamp.org',
        type: 'Platform',
        difficulty: 'Beginner to Intermediate',
        tags: ['Free', 'Coding', 'Certification', 'Projects'],
      },
      {
        name: 'Khan Academy',
        description: 'Free educational platform with computer science courses',
        url: 'https://khanacademy.org',
        type: 'Platform',
        difficulty: 'Beginner',
        tags: ['Free', 'Education', 'Computer Science', 'Fundamentals'],
      },
      {
        name: 'Codecademy',
        description: 'Interactive coding lessons and career paths',
        url: 'https://codecademy.com',
        type: 'Platform',
        difficulty: 'Beginner to Intermediate',
        tags: ['Interactive', 'Coding', 'Career Paths', 'Hands-on'],
      },
      {
        name: 'Udacity',
        description: 'Nanodegree programs for in-demand tech skills',
        url: 'https://udacity.com',
        type: 'Platform',
        difficulty: 'Intermediate to Advanced',
        tags: ['Nanodegree', 'Tech Skills', 'Industry Projects', 'Mentorship'],
      },
    ],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
    case 'All Levels':
      return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400';
    case 'Intermediate':
    case 'Beginner to Intermediate':
    case 'Beginner to Advanced':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400';
    case 'Advanced':
    case 'Intermediate to Advanced':
      return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Platform':
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400';
    case 'Book':
      return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400';
    case 'Course':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400';
    case 'Documentation':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400';
    case 'Repository':
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
    case 'Blog':
      return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400';
    case 'Guide':
      return 'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400';
    case 'Template':
      return 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-400';
    case 'Video':
      return 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400';
    case 'Framework':
      return 'bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-900/30 dark:text-violet-400';
    case 'Tool':
      return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-400';
    case 'Library':
      return 'bg-lime-100 text-lime-800 border-lime-200 dark:bg-lime-900/30 dark:text-lime-400';
    case 'Training':
      return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400';
    case 'Newsletter':
      return 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900/30 dark:text-sky-400';
    case 'Tutorial':
      return 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-400';
    case 'Certificate':
    case 'Certification':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
  }
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <BookOpen className="w-96 h-96 text-blue-500 animate-pulse" />
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Learning Resources
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive collection of the latest resources across all tech
              domains - from AI/ML to cybersecurity, frontend to blockchain.
              Stay ahead with cutting-edge learning materials and reveal the
              scene in your field.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {resourceCategories.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Categories
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {resourceCategories.reduce(
                    (acc, cat) => acc + cat.resources.length,
                    0
                  )}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Resources
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Latest
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  2024 Updated
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Free
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Many Options
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map(category => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300">
                        {category.description}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                        {category.resources.length} Resources
                      </Badge>
                    </div>
                  </div>

                  {/* Resources Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border border-white/30 dark:border-slate-600/30"
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {resource.name}
                            </CardTitle>
                            {resource.url !== '#' && (
                              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                            )}
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {resource.description}
                          </p>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="space-y-3">
                            {/* Type and Difficulty Badges */}
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                className={`${getTypeColor(resource.type)} text-xs font-medium`}
                              >
                                {resource.type}
                              </Badge>
                              <Badge
                                className={`${getDifficultyColor(resource.difficulty)} text-xs font-medium`}
                              >
                                {resource.difficulty}
                              </Badge>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                              {resource.tags
                                .slice(0, 3)
                                .map((tag, tagIndex) => (
                                  <Badge
                                    key={tagIndex}
                                    variant="outline"
                                    className="text-xs bg-slate-50 dark:bg-slate-800"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              {resource.tags.length > 3 && (
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-slate-50 dark:bg-slate-800"
                                >
                                  +{resource.tags.length - 3}
                                </Badge>
                              )}
                            </div>

                            {/* Link */}
                            {resource.url !== '#' && (
                              <Link
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                              >
                                Visit Resource
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                  <Lightbulb className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  Have a Great Resource?
                </span>
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Know of an amazing resource that helped you in your learning
                journey? Share it with the community to help future candidates
                succeed!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contribute"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FileText className="w-5 h-5" />
                  Suggest a Resource
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Users className="w-5 h-5" />
                  View Experiences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
