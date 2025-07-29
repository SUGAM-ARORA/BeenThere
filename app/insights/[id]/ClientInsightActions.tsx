'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { ThumbsUp, Share2 } from 'lucide-react';

interface ClientInsightActionsProps {
  id: string;
  initialLikes: number;
  title: string;
}

export default function ClientInsightActions({
  id,
  initialLikes,
  title,
}: ClientInsightActionsProps) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = async () => {
    setLikes(prev => prev + 1);
    toast({
      title: 'Thanks for the like!',
      description: 'Your appreciation helps us create better content.',
    });
    // Optionally, call an API to persist the like
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: title,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled sharing
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link copied!',
        description: 'The insight link has been copied to your clipboard.',
      });
    }
  };

  return (
    <>
      <span>{likes}</span>
      <Button
        onClick={handleLike}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 ml-2"
      >
        <ThumbsUp className="w-4 h-4" />
        Like
      </Button>
      <Button
        onClick={handleShare}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 ml-2"
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>
    </>
  );
}
