'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Comment } from '@/types/auth';
import {
  getCommentsForExperience,
  addComment,
  getTopLevelComments,
  getCommentReplies,
} from '@/data/comments';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  MessageSquare,
  Send,
  Reply,
  Shield,
  User,
  Users,
  UserCheck,
  Clock,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Link from 'next/link';

interface CommentSectionProps {
  experienceId: string;
}

interface CommentItemProps {
  comment: Comment;
  experienceId: string;
  onReply: (parentId: string) => void;
  replyingTo: string | null;
  onCancelReply: () => void;
}

function CommentItem({
  comment,
  experienceId,
  onReply,
  replyingTo,
  onCancelReply,
}: CommentItemProps) {
  const { user, isAuthenticated } = useAuth();
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replies, setReplies] = useState<Comment[]>([]);

  useEffect(() => {
    setReplies(getCommentReplies(experienceId, comment.id));
  }, [experienceId, comment.id]);

  const handleReplySubmit = async () => {
    if (!user || !replyContent.trim()) return;

    setIsSubmitting(true);
    try {
      const newReply = addComment({
        experienceId,
        userId: user.id,
        userName: user.name,
        userType: user.userType,
        content: replyContent.trim(),
        parentId: comment.id,
        isAdminReply: user.userType === 'admin',
      });

      setReplies(prev => [...prev, newReply]);
      setReplyContent('');
      onCancelReply();

      toast({
        title: 'Reply posted!',
        description: 'Your reply has been added to the discussion.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to post reply. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getUserIcon = (userType: string) => {
    switch (userType) {
      case 'admin':
        return <Shield className="w-4 h-4" />;
      case 'contributor':
        return <UserCheck className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getUserBadgeColor = (userType: string) => {
    switch (userType) {
      case 'admin':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400';
      case 'contributor':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className={`${comment.parentId ? 'ml-8 mt-4' : ''}`}>
      <div
        className={`p-4 rounded-lg border ${comment.isAdminReply ? 'bg-red-50/50 dark:bg-red-900/10 border-red-200 dark:border-red-800' : 'bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'}`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {getUserIcon(comment.userType)}
              <span className="font-medium text-slate-900 dark:text-slate-100">
                {comment.userName}
              </span>
            </div>
            <Badge className={`${getUserBadgeColor(comment.userType)} text-xs`}>
              {comment.userType === 'admin'
                ? 'Admin'
                : comment.userType === 'contributor'
                  ? 'Contributor'
                  : 'Viewer'}
            </Badge>
            {comment.isAdminReply && (
              <Badge className="bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 text-xs">
                Official Reply
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="w-3 h-3" />
            {formatDate(comment.createdAt)}
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
          {comment.content}
        </p>

        {!comment.parentId && isAuthenticated && user?.userType !== 'admin' && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onReply(comment.id)}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <Reply className="w-4 h-4 mr-1" />
            Reply
          </Button>
        )}

        {replyingTo === comment.id && (
          <div className="mt-4 space-y-3">
            <Textarea
              value={replyContent}
              onChange={e => setReplyContent(e.target.value)}
              placeholder="Write your reply..."
              className="bg-white dark:bg-slate-800"
              rows={3}
            />
            <div className="flex gap-2">
              <Button
                onClick={handleReplySubmit}
                disabled={!replyContent.trim() || isSubmitting}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Post Reply
                  </>
                )}
              </Button>
              <Button variant="outline" size="sm" onClick={onCancelReply}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      {replies.length > 0 && (
        <div className="mt-2">
          {replies.map(reply => (
            <CommentItem
              key={reply.id}
              comment={reply}
              experienceId={experienceId}
              onReply={onReply}
              replyingTo={replyingTo}
              onCancelReply={onCancelReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentSection({ experienceId }: CommentSectionProps) {
  const { user, isAuthenticated } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  useEffect(() => {
    setComments(getTopLevelComments(experienceId));
  }, [experienceId]);

  const handleCommentSubmit = async () => {
    if (!user || !newComment.trim()) return;

    setIsSubmitting(true);
    try {
      const comment = addComment({
        experienceId,
        userId: user.id,
        userName: user.name,
        userType: user.userType,
        content: newComment.trim(),
      });

      setComments(prev => [...prev, comment]);
      setNewComment('');

      toast({
        title: 'Comment posted!',
        description: 'Your question has been added to the discussion.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to post comment. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-semibold">
            Discussion ({comments.length})
          </h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Ask questions about this experience. Only logged-in users can
          participate.
        </p>
      </CardHeader>

      <CardContent>
        {!isAuthenticated ? (
          <div className="text-center py-8 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
            <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
              Join the Discussion
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Sign in to ask questions and get answers from the community
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="/auth/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="outline">Create Account</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* New Comment Form */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {user?.userType === 'admin' ? (
                    <Shield className="w-4 h-4 text-red-600" />
                  ) : user?.userType === 'contributor' ? (
                    <UserCheck className="w-4 h-4 text-blue-600" />
                  ) : (
                    <User className="w-4 h-4 text-gray-600" />
                  )}
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {user?.name}
                  </span>
                </div>
                <Badge
                  className={`text-xs ${
                    user?.userType === 'admin'
                      ? 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400'
                      : user?.userType === 'contributor'
                        ? 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  {user?.userType === 'admin'
                    ? 'Admin'
                    : user?.userType === 'contributor'
                      ? 'Contributor'
                      : 'Viewer'}
                </Badge>
              </div>

              <Textarea
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder={
                  user && user.userType === 'admin'
                    ? 'Respond to questions and provide guidance...'
                    : 'Ask a question about this experience...'
                }
                className="bg-white dark:bg-slate-800"
                rows={4}
              />

              <Button
                onClick={handleCommentSubmit}
                disabled={!newComment.trim() || isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {user?.userType === 'admin'
                      ? 'Post Response'
                      : 'Ask Question'}
                  </>
                )}
              </Button>
            </div>

            {/* Comments List */}
            {comments.length === 0 ? (
              <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No questions yet. Be the first to ask!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {comments.map(comment => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    experienceId={experienceId}
                    onReply={setReplyingTo}
                    replyingTo={replyingTo}
                    onCancelReply={() => setReplyingTo(null)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
