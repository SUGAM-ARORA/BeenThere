'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Heart,
  Users,
  Lightbulb,
  BookOpen,
  Send,
  Star,
  Sparkles,
  Gift,
  Target,
  Rocket,
  Code,
  Building,
  Award,
  MessageSquare,
  FileText,
  Globe,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';

const contributionTypes = [
  {
    id: 'experience',
    title: 'Share Interview Experience',
    description:
      'Help others by sharing your authentic interview experience and preparation journey',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      'Help future candidates',
      'Build your reputation',
      'Give back to community',
    ],
  },
  {
    id: 'insight',
    title: 'Share Career Insight',
    description:
      'Provide general career advice, industry insights, or life lessons from your journey',
    icon: Lightbulb,
    color: 'from-emerald-500 to-teal-500',
    benefits: [
      'Share valuable wisdom',
      'Guide career decisions',
      'Inspire others',
    ],
  },
  {
    id: 'resource',
    title: 'Suggest Learning Resource',
    description: 'Recommend books, courses, or tools that helped you succeed',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    benefits: [
      'Share valuable resources',
      'Help others learn',
      'Expand our knowledge base',
    ],
  },
  {
    id: 'company',
    title: 'Add New Company',
    description: "Add a company that's not yet covered on our platform",
    icon: Building,
    color: 'from-orange-500 to-red-500',
    benefits: [
      'Expand company coverage',
      'Help job seekers',
      'Improve platform completeness',
    ],
  },
  {
    id: 'feedback',
    title: 'Platform Feedback',
    description: 'Share suggestions to improve BeenThere',
    icon: Target,
    color: 'from-indigo-500 to-blue-500',
    benefits: [
      'Shape the platform',
      'Improve user experience',
      'Drive innovation',
    ],
  },
];

const impactStats = [
  { label: 'Students Helped', value: '10,000+', icon: Users },
  { label: 'Success Stories', value: '2,500+', icon: Award },
  { label: 'Resources Shared', value: '2,000+', icon: FileText },
  { label: 'Companies Added', value: '150+', icon: Building },
];

export default function ContributePage() {
  const [selectedType, setSelectedType] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleContributeClick = (typeId: string) => {
    setSelectedType(typeId);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/30">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <GraduationCap className="w-96 h-96 text-pink-500 animate-pulse" />
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30">
                <GraduationCap className="w-12 h-12 text-pink-600 dark:text-pink-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500 bg-clip-text text-transparent animate-gradient">
                Contribute to BeenThere
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join thousands of students and professionals who are sharing their
              experiences and insights. Your contribution can guide
              someone&#39;s career journey and help them succeed.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-xl rounded-2xl p-4 border border-white/30 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {!showForm ? (
          <>
            {/* Contribution Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Ways to Contribute
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contributionTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <Card
                      key={type.id}
                      className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border border-white/30 dark:border-slate-600/30 overflow-hidden"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-2xl bg-gradient-to-r ${type.color} bg-opacity-20 border border-opacity-30`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                              {type.title}
                            </CardTitle>
                            <p className="text-slate-600 dark:text-slate-300 mt-2">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex items-center gap-2"
                            >
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm text-slate-600 dark:text-slate-300">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Button
                          onClick={() => handleContributeClick(type.id)}
                          className={`w-full bg-gradient-to-r ${type.color} text-white border-0 hover:scale-105 transition-transform duration-300`}
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Start Contributing
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Community Recognition */}
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-orange-600/10 to-red-600/10 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                      <Award className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-500 bg-clip-text text-transparent">
                      Recognition & Impact
                    </span>
                  </h2>

                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                    Top contributors get featured on our platform, receive
                    exclusive badges, and get early access to new features. Join
                    our community of mentors!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Users className="w-5 h-5" />
                      Meet Our Contributors
                    </Link>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Globe className="w-5 h-5" />
                      Explore Platform
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Contribution Form */
          <div className="mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                      <Gift className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                      Share Your Contribution
                    </span>
                  </h2>

                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    Fill out the form below and we&#39;ll get back to you within
                    24 hours.
                  </p>

                  <Button
                    onClick={() => setShowForm(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    ← Back to Contribution Types
                  </Button>
                </div>

                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        placeholder="Enter your full name"
                        className="bg-white/50 dark:bg-slate-800/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white/50 dark:bg-slate-800/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Contribution Type
                    </label>
                    <Select
                      value={selectedType}
                      onValueChange={setSelectedType}
                    >
                      <SelectTrigger className="bg-white/50 dark:bg-slate-800/50">
                        <SelectValue placeholder="Select contribution type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="experience">
                          Interview Experience
                        </SelectItem>
                        <SelectItem value="insight">Career Insight</SelectItem>
                        <SelectItem value="resource">
                          Learning Resource
                        </SelectItem>
                        <SelectItem value="company">New Company</SelectItem>
                        <SelectItem value="feedback">
                          Platform Feedback
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Details
                    </label>
                    <Textarea
                      placeholder="Please provide detailed information about your contribution..."
                      rows={6}
                      className="bg-white/50 dark:bg-slate-800/50"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg py-6 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
                    <Rocket className="w-5 h-5 mr-2" />
                    Submit Contribution
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
