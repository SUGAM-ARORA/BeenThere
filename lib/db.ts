// Simple in-memory database simulation
// In production, this would connect to a real database like PostgreSQL, MongoDB, etc.

export interface DatabaseInsight {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    batch: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  keyTakeaways: string[];
  readTime: string;
  likes: number;
  views: number;
  publishedAt: string;
  isVerified: boolean;
  status: 'published' | 'draft' | 'archived';
}

// In-memory storage (replace with real database in production)
let insights: DatabaseInsight[] = [
  {
    id: '1',
    title: "Mastering System Design Interviews: A Senior Engineer's Guide",
    content: `After conducting 200+ system design interviews at top tech companies, here's what separates great candidates from good ones:

**Start with Requirements Clarification**
Never jump straight into drawing boxes and arrows. The first 10 minutes should be spent understanding the problem deeply. Ask about scale, users, features, and constraints.

**Think in Layers**
Break down your system into logical layers: presentation, application, data, and infrastructure. This shows structured thinking and makes complex systems manageable.

**Scale Gradually**
Start with a simple solution that works, then scale it step by step. Don't over-engineer from the beginning. Show how you'd handle 1K users, then 1M, then 100M.

**Know Your Numbers**
Memorize key performance numbers: database read/write speeds, network latency, storage costs. These help you make informed decisions during the interview.

**Trade-offs Are Key**
Every design decision has trade-offs. Explicitly discuss them: consistency vs availability, cost vs performance, complexity vs maintainability.

**Real-World Experience Matters**
Reference actual technologies and patterns you've used. Mention specific databases, caching strategies, and monitoring tools. This shows practical experience.`,
    author: {
      name: 'Rajesh Kumar',
      role: 'Principal Engineer',
      company: 'Google',
      batch: '2016',
      avatar: '👨‍💻',
    },
    category: 'Interview Prep',
    tags: [
      'System Design',
      'Technical Interviews',
      'Architecture',
      'Scalability',
      'Google',
    ],
    keyTakeaways: [
      'Always start with requirements clarification before designing',
      'Think in layers and scale gradually from simple to complex',
      'Know performance numbers and discuss trade-offs explicitly',
      'Reference real technologies and show practical experience',
      'Structure your approach and communicate clearly throughout',
    ],
    readTime: '8 min read',
    likes: 342,
    views: 1250,
    publishedAt: '2024-01-20T10:00:00Z',
    isVerified: true,
    status: 'published',
  },
  {
    id: '2',
    title: 'Breaking into Product Management: From Engineer to PM',
    content: `My transition from software engineer to product manager taught me valuable lessons about career pivots in tech:

**Leverage Your Technical Background**
Your engineering experience is an asset, not a limitation. Technical PMs are highly valued because they can communicate effectively with engineering teams and make informed technical decisions.

**Develop Business Acumen**
Start reading business publications, understand your company's metrics, and learn how technical decisions impact business outcomes. Take online courses in business strategy and finance.

**Practice Product Thinking**
Begin analyzing products you use daily. Why did they make certain design decisions? How would you improve them? What metrics would you track? This develops your product intuition.

**Build Cross-Functional Relationships**
Start collaborating with designers, marketers, and business stakeholders. Volunteer for cross-functional projects and learn how different teams operate.

**Create a Portfolio**
Document your product-related work: feature specifications, user research, A/B test results, and business impact. This shows your product skills to potential employers.

**Network in Product Communities**
Join product management meetups, online communities, and conferences. Connect with other PMs and learn from their experiences.`,
    author: {
      name: 'Priya Sharma',
      role: 'Senior Product Manager',
      company: 'Microsoft',
      batch: '2018',
      avatar: '👩‍💼',
    },
    category: 'Career Growth',
    tags: [
      'Product Management',
      'Career Transition',
      'Business Skills',
      'Cross-functional',
      'Microsoft',
    ],
    keyTakeaways: [
      'Technical background is valuable for product management roles',
      'Develop business acumen through courses and reading',
      'Practice product thinking by analyzing everyday products',
      'Build relationships across different functions and teams',
      'Create a portfolio showcasing product-related work',
      'Network actively in product management communities',
    ],
    readTime: '6 min read',
    likes: 189,
    views: 890,
    publishedAt: '2024-01-18T14:30:00Z',
    isVerified: true,
    status: 'published',
  },
  {
    id: '3',
    title:
      'The Art of Learning New Technologies: A Framework for Continuous Growth',
    content: `In 8 years of software development, I've learned dozens of technologies. Here's my proven framework for mastering new tech quickly:

**The 20-80 Rule**
Focus on learning 20% of a technology that gives you 80% of the capability. Start with core concepts, basic syntax, and common patterns before diving into advanced features.

**Build While Learning**
Don't just read documentation or watch tutorials. Build something real, even if it's simple. Hands-on experience accelerates learning and reveals practical challenges.

**Teach to Solidify**
Write blog posts, create tutorials, or explain concepts to colleagues. Teaching forces you to understand deeply and identify knowledge gaps.

**Connect to What You Know**
Relate new concepts to technologies you already understand. This creates mental models and makes learning more intuitive and memorable.

**Join Communities**
Engage with technology communities on Discord, Reddit, or Stack Overflow. Ask questions, help others, and stay updated with best practices.

**Set Learning Goals**
Define specific, measurable goals: "Build a REST API with authentication" rather than "Learn Node.js." This provides direction and motivation.`,
    author: {
      name: 'Arjun Patel',
      role: 'Tech Lead',
      company: 'Amazon',
      batch: '2017',
      avatar: '🧑‍🔬',
    },
    category: 'Skill Development',
    tags: [
      'Learning',
      'Technology',
      'Continuous Growth',
      'Self-improvement',
      'Amazon',
    ],
    keyTakeaways: [
      'Focus on 20% of features that provide 80% of capability',
      'Build real projects while learning new technologies',
      'Teach others to solidify your own understanding',
      'Connect new concepts to existing knowledge',
      'Engage with technology communities for support',
      'Set specific, measurable learning goals',
    ],
    readTime: '5 min read',
    likes: 267,
    views: 1100,
    publishedAt: '2024-01-15T09:15:00Z',
    isVerified: true,
    status: 'published',
  },
];

// Database operations
export const insightsDB = {
  // Synchronous methods for static export
  getAllInsightsSync: (): DatabaseInsight[] => {
    return insights.filter(insight => insight.status === 'published');
  },

  getInsightByIdSync: (id: string): DatabaseInsight | null => {
    const insight = insights.find(insight => insight.id === id);
    if (insight && insight.status === 'published') {
      // Increment view count
      insight.views += 1;
      return insight;
    }
    return null;
  },

  getInsightsStatsSync: () => {
    const publishedInsights = insights.filter(
      insight => insight.status === 'published'
    );
    return {
      totalInsights: publishedInsights.length,
      totalViews: publishedInsights.reduce(
        (sum, insight) => sum + insight.views,
        0
      ),
      totalLikes: publishedInsights.reduce(
        (sum, insight) => sum + insight.likes,
        0
      ),
      totalAuthors: new Set(
        publishedInsights.map(insight => insight.author.name)
      ).size,
      categoryCounts: publishedInsights.reduce(
        (acc, insight) => {
          acc[insight.category] = (acc[insight.category] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>
      ),
    };
  },

  // Async methods for backward compatibility (if needed)
  getAllInsights: async (): Promise<DatabaseInsight[]> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return insights.filter(insight => insight.status === 'published');
  },

  getInsightsByCategory: async (
    category: string
  ): Promise<DatabaseInsight[]> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    if (category === 'all') {
      return insights.filter(insight => insight.status === 'published');
    }
    return insights.filter(
      insight => insight.status === 'published' && insight.category === category
    );
  },

  getInsightById: async (id: string): Promise<DatabaseInsight | null> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    const insight = insights.find(insight => insight.id === id);
    if (insight && insight.status === 'published') {
      insight.views += 1;
      return insight;
    }
    return null;
  },

  searchInsights: async (query: string): Promise<DatabaseInsight[]> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    const lowercaseQuery = query.toLowerCase();
    return insights.filter(
      insight =>
        insight.status === 'published' &&
        (insight.title.toLowerCase().includes(lowercaseQuery) ||
          insight.content.toLowerCase().includes(lowercaseQuery) ||
          insight.tags.some(tag =>
            tag.toLowerCase().includes(lowercaseQuery)
          ) ||
          insight.author.name.toLowerCase().includes(lowercaseQuery) ||
          insight.author.company.toLowerCase().includes(lowercaseQuery))
    );
  },

  likeInsight: async (id: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    const insight = insights.find(insight => insight.id === id);
    if (insight) {
      insight.likes += 1;
      return true;
    }
    return false;
  },

  createInsight: async (
    insightData: Omit<DatabaseInsight, 'id' | 'likes' | 'views' | 'publishedAt'>
  ): Promise<DatabaseInsight> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const newInsight: DatabaseInsight = {
      ...insightData,
      id: `insight-${Date.now()}`,
      likes: 0,
      views: 0,
      publishedAt: new Date().toISOString(),
    };
    insights.push(newInsight);
    return newInsight;
  },

  getInsightsStats: async () => {
    await new Promise(resolve => setTimeout(resolve, 50));
    const publishedInsights = insights.filter(
      insight => insight.status === 'published'
    );
    return {
      totalInsights: publishedInsights.length,
      totalViews: publishedInsights.reduce(
        (sum, insight) => sum + insight.views,
        0
      ),
      totalLikes: publishedInsights.reduce(
        (sum, insight) => sum + insight.likes,
        0
      ),
      totalAuthors: new Set(
        publishedInsights.map(insight => insight.author.name)
      ).size,
      categoryCounts: publishedInsights.reduce(
        (acc, insight) => {
          acc[insight.category] = (acc[insight.category] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>
      ),
    };
  },
};
