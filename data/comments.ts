import { Comment } from '@/types/auth';

// Mock comments data - in a real app, this would come from a database
export const commentsData: Record<string, Comment[]> = {
  '1': [
    // Google experience comments
    {
      id: 'comment-1',
      experienceId: '1',
      userId: 'user-123',
      userName: 'Priya S.',
      userType: 'viewer',
      content:
        'Great detailed experience! Could you share more about the system design round? What specific topics were covered?',
      createdAt: '2024-01-15T10:30:00Z',
    },
    {
      id: 'comment-2',
      experienceId: '1',
      userId: 'admin-1',
      userName: 'KyaSeen Admin',
      userType: 'admin',
      content:
        'Thanks for the question! The system design round typically covers scalability, database design, and distributed systems. The contributor mentioned they were asked about designing a search engine backend.',
      createdAt: '2024-01-15T14:20:00Z',
      parentId: 'comment-1',
      isAdminReply: true,
    },
    {
      id: 'comment-3',
      experienceId: '1',
      userId: 'user-456',
      userName: 'Amit K.',
      userType: 'viewer',
      content:
        'How much time did you spend preparing for the coding rounds specifically? Any particular patterns you focused on?',
      createdAt: '2024-01-16T09:15:00Z',
    },
  ],
  '3': [
    // Microsoft experience comments
    {
      id: 'comment-4',
      experienceId: '3',
      userId: 'user-789',
      userName: 'Sneha M.',
      userType: 'viewer',
      content:
        'Thanks for sharing! Did they ask about Azure services specifically, or was it more general cloud concepts?',
      createdAt: '2024-01-14T16:45:00Z',
    },
  ],
};

// Helper functions for comments
export const getCommentsForExperience = (experienceId: string): Comment[] => {
  return commentsData[experienceId] || [];
};

export const addComment = (
  comment: Omit<Comment, 'id' | 'createdAt'>
): Comment => {
  const newComment: Comment = {
    ...comment,
    id: `comment-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  if (!commentsData[comment.experienceId]) {
    commentsData[comment.experienceId] = [];
  }

  commentsData[comment.experienceId].push(newComment);
  return newComment;
};

export const getCommentReplies = (
  experienceId: string,
  parentId: string
): Comment[] => {
  const comments = getCommentsForExperience(experienceId);
  return comments.filter(comment => comment.parentId === parentId);
};

export const getTopLevelComments = (experienceId: string): Comment[] => {
  const comments = getCommentsForExperience(experienceId);
  return comments.filter(comment => !comment.parentId);
};
