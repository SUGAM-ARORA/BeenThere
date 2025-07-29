'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Lightbulb,
  Users,
  TrendingUp,
  BookOpen,
  Heart,
  Clock,
  User,
  Building,
  GraduationCap,
  Filter,
  Search,
  Star,
  Eye,
  ThumbsUp,
  Calendar,
  CheckCircle,
  Target,
  Loader2,
} from 'lucide-react';
import Link from 'next/link';
import { insightsDB } from '@/lib/db';

const categories = [
  {
    id: 'all',
    name: 'All Insights',
    icon: Eye,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'Interview Prep',
    name: 'Interview Prep',
    icon: Target,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'Career Growth',
    name: 'Career Growth',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'Skill Development',
    name: 'Skill Development',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'Industry Trends',
    name: 'Industry Trends',
    icon: Users,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'Work-Life Balance',
    name: 'Work-Life Balance',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'Networking',
    name: 'Networking',
    icon: Users,
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [insights, setInsights] = useState(insightsDB.getAllInsightsSync());
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterInsights(selectedCategory, query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterInsights(category, searchQuery);
  };

  const filterInsights = (category: string, search: string) => {
    setLoading(true);

    setTimeout(() => {
      let filtered = insightsDB.getAllInsightsSync();

      if (category !== 'all') {
        filtered = filtered.filter(insight => insight.category === category);
      }

      if (search) {
        const lowercaseQuery = search.toLowerCase();
        filtered = filtered.filter(
          insight =>
            insight.title.toLowerCase().includes(lowercaseQuery) ||
            insight.content.toLowerCase().includes(lowercaseQuery) ||
            insight.tags.some(tag =>
              tag.toLowerCase().includes(lowercaseQuery)
            ) ||
            insight.author.name.toLowerCase().includes(lowercaseQuery) ||
            insight.author.company.toLowerCase().includes(lowercaseQuery)
        );
      }

      setInsights(filtered);
      setLoading(false);
    }, 300);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const stats = insightsDB.getInsightsStatsSync();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/30">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Lightbulb className="w-96 h-96 text-emerald-500 animate-pulse" />
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                <Lightbulb className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Senior Insights
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Learn from those who&#39;ve been there! Get general career advice,
              industry insights, and life lessons from experienced professionals
              who&#39;ve walked the path before you.
            </p>

            {/* Dynamic Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {stats.totalInsights}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Insights
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stats.totalAuthors}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Contributors
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stats.totalLikes}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Total Likes
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {stats.totalViews}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Total Views
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-gradient-to-r from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-slate-700/50 shadow-2xl overflow-hidden">
              <div className="flex items-center">
                <div className="p-4">
                  <Search className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search insights, topics, or keywords..."
                  value={searchQuery}
                  onChange={e => handleSearch(e.target.value)}
                  className="flex-1 border-0 bg-transparent text-lg placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-16"
                />
                {loading && (
                  <div className="p-4">
                    <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="bg-gradient-to-r from-white/80 to-white/60 dark:from-slate-900/80 dark:to-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-slate-700/50 shadow-xl">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => {
                const IconComponent = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <Button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    variant={isActive ? 'default' : 'outline'}
                    className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? `bg-gradient-to-r ${category.color} text-white border-0 shadow-lg`
                        : 'bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="space-y-8">
          {loading ? (
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card
                  key={i}
                  className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-sm border border-white/30 dark:border-slate-600/30"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-3 animate-pulse" />
                        <div className="h-8 w-3/4 bg-slate-200 dark:bg-slate-700 rounded mb-4 animate-pulse" />
                        <div className="flex gap-4">
                          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                          <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                          <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                        <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded mb-2 animate-pulse" />
                    <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-700 rounded mb-4 animate-pulse" />
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                      <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                      <div className="h-6 w-18 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : insights.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-4 animate-float">💡</div>
              <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4">
                No insights found
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Try adjusting your search or category filters
              </p>
            </div>
          ) : (
            insights.map((insight, index) => (
              <Card
                key={insight.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-sm border border-white/30 dark:border-slate-600/30"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                          {insight.category}
                        </Badge>
                        {insight.isVerified && (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-xs text-blue-600 font-medium">
                              Verified
                            </span>
                          </div>
                        )}
                      </div>

                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {insight.title}
                      </CardTitle>

                      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl">
                            {insight.author.avatar}
                          </div>
                          <div>
                            <span className="font-medium">
                              {insight.author.name}
                            </span>
                            <div className="text-xs">
                              {insight.author.role} at {insight.author.company}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>Batch {insight.author.batch}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{insight.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{insight.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{insight.views}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(insight.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {insight.content.split('\n')[0]}
                    </p>

                    {/* Key Takeaways Preview */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Key Takeaways
                      </h4>
                      <ul className="space-y-1">
                        {insight.keyTakeaways
                          .slice(0, 2)
                          .map((takeaway, index) => (
                            <li
                              key={index}
                              className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                            >
                              <span className="text-emerald-600 mt-1">•</span>
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        {insight.keyTakeaways.length > 2 && (
                          <li className="text-sm text-slate-500 dark:text-slate-400">
                            +{insight.keyTakeaways.length - 2} more insights...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {insight.tags.slice(0, 4).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs bg-slate-50 dark:bg-slate-800"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {insight.tags.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-slate-50 dark:bg-slate-800"
                        >
                          +{insight.tags.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <Link href={`/insights/${insight.id}`}>
                        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read Full Insight
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                  <Users className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  Share Your Wisdom
                </span>
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Have valuable insights to share? Help the next generation by
                contributing your experiences and lessons learned.
              </p>

              <Link
                href="/contribute"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                <Lightbulb className="w-6 h-6" />
                Contribute Insights
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
