import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  Globe,
  Github,
  Linkedin,
  Mail,
  Star,
  GraduationCap,
  Search,
  Zap,
  Brain,
  Eye,
  Award,
  Building,
  Rocket,
  Sparkles,
  CheckCircle,
  Info,
} from 'lucide-react';
import Link from 'next/link';
import { getDynamicStats } from '@/data/companies';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  github: string;
  skills?: string[];
};

const teamMembers: TeamMember[] = [
  {
    name: 'Sugam Arora',
    role: 'Lead Developer',
    bio: 'Passionate about creating platforms that connect students with authentic career experiences and guidance.',
    image: '👨‍💻',
    linkedin: 'https://www.linkedin.com/in/sugamarora23/',
    github: 'https://github.com/SUGAM-ARORA',
    skills: ['Building'],
  },
  {
    name: 'Ojas Arora',
    role: 'Manager',
    bio: "Focused on building user-centric experiences that help students learn from those who've been there.",
    image: '👨‍🎓',
    linkedin: 'http://www.linkedin.com/in/ojasarora14',
    github: 'https://github.com/Ojas-Arora',
    skills: ['Building'],
  },
];

const values = [
  {
    title: 'Learn from Experience',
    description:
      "Connect students with authentic experiences from those who've walked the path before.",
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    impact: '1k+ students guided',
  },
  {
    title: 'Connect Communities',
    description:
      'Bridge students across colleges and experiences, creating a unified support network.',
    icon: Users,
    color: 'from-purple-500 to-indigo-500',
    impact: '10+ colleges represented',
  },
  {
    title: 'Inspire Growth',
    description:
      'Real stories from real students, verified and curated to motivate and guide others.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    impact: '200+ success stories',
  },
  {
    title: 'Guide Decisions',
    description:
      'Provide comprehensive insights to help students make informed career choices.',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
    impact: '95% find clarity',
  },
  {
    title: 'Navigate Challenges',
    description:
      'Help students overcome interview challenges with proven strategies and tips.',
    icon: Target,
    color: 'from-emerald-500 to-teal-500',
    impact: '80% success rate improvement',
  },
  {
    title: 'Global Access',
    description:
      'Free and accessible to all students worldwide, breaking geographical barriers.',
    icon: Globe,
    color: 'from-indigo-500 to-blue-500',
    impact: '5+ countries reached',
  },
];

const brandStory = [
  {
    title: 'The Name "BeenThere"',
    description:
      'Inspired by the phrase "I\'ve been there" - connecting you with those who\'ve experienced your journey.',
    icon: Search,
    color: 'from-blue-500 to-purple-500',
    detail:
      'Every student faces uncertainty. Our name embodies the comfort of knowing someone has walked your path.',
  },
  {
    title: 'The Vision Behind',
    description:
      'Born from the need to learn from authentic experiences rather than theoretical advice.',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    detail:
      'Founded by students who struggled to find real insights during their placement journey.',
  },
  {
    title: 'The Power of Experience',
    description:
      "Transforming anxiety into confidence by learning from those who've walked the path.",
    icon: Zap,
    color: 'from-pink-500 to-orange-500',
    detail:
      'Real experiences create real confidence. Theory teaches, but experience transforms.',
  },
  {
    title: 'The Community Impact',
    description:
      'Creating a knowledge-sharing ecosystem where every experience becomes wisdom for others.',
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    detail:
      "Building a legacy where today's students become tomorrow's mentors.",
  },
];

const milestones = [
  {
    year: '2025',
    title: 'Platform Launch',
    description: 'BeenThere goes live with 5+ companies and 40+ experiences',
    icon: Rocket,
    color: 'from-blue-500 to-purple-500',
  },
  // {
  //   year: '2025',
  //   title: 'Community Growth',
  //   description: '10,000+ students join the platform in first quarter',
  //   icon: Users,
  //   color: 'from-purple-500 to-pink-500'
  // },
  // {
  //   year: '2025',
  //   title: 'Insights Launch',
  //   description: 'General career insights section added with senior guidance',
  //   icon: Lightbulb,
  //   color: 'from-pink-500 to-orange-500'
  // },
  // {
  //   year: '2025',
  //   title: 'Global Reach',
  //   description: 'Students from 50+ countries accessing the platform',
  //   icon: Globe,
  //   color: 'from-orange-500 to-red-500'
  // }
];

export default function AboutPage() {
  const stats = getDynamicStats();

  const dynamicStats = [
    {
      label: 'Students Helped',
      value: `${Math.floor(stats.totalExperiences * 50)}+`,
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Companies Covered',
      value: `${stats.totalCompanies}+`,
      icon: Building,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Success Stories',
      value: `${Math.floor(stats.totalExperiences * 0.7)}+`,
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      label: 'Resources Shared',
      value: '2,000+',
      icon: Lightbulb,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <Header />

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <GraduationCap className="w-[600px] h-[600px] text-blue-500 animate-pulse" />
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 shadow-2xl animate-pulse-glow">
                  <GraduationCap className="w-16 h-16 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-3xl blur-2xl opacity-50 animate-pulse" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-gradient holographic">
                About BeenThere
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-8">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Learn from Those Who&#39;ve Been There
                </span>
              </p>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                The platform that connects you with authentic experiences,
                transforming the way students prepare for their careers by
                learning from those who&#39;ve walked the path before them.
              </p>
            </div>

            {/* Floating achievement badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2 text-sm font-semibold animate-float">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 1k+ Students
              </Badge>
              <Badge
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 text-sm font-semibold animate-float"
                style={{ animationDelay: '1s' }}
              >
                <Globe className="w-4 h-4 mr-2" />
                5+ Countries Worldwide
              </Badge>
              <Badge
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-4 py-2 text-sm font-semibold animate-float"
                style={{ animationDelay: '2s' }}
              >
                <Target className="w-4 h-4 mr-2" />
                95% Success Rate
              </Badge>
            </div>
          </div>
        </div>

        {/* Brand Story Section with Enhanced Design */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              The Story Behind BeenThere
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandStory.map((story, index) => {
              const IconComponent = story.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl border-2 border-white/30 dark:border-slate-600/30 overflow-hidden relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                  />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${story.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                        {story.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {story.description}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                      {story.detail}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement with 3D Effect */}
        <div className="mb-20">
          <div className="relative transform-3d">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative bg-gradient-to-br from-white/95 to-white/80 dark:from-slate-900/95 dark:to-slate-800/80 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border-2 border-white/30 dark:border-slate-700/50 card-3d">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl animate-float">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h2 className="text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent holographic">
                    Our Mission
                  </span>
                </h2>

                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-5xl mx-auto">
                  To democratize access to authentic career insights by
                  connecting students with those who&#39;ve been there. We
                  believe every student deserves to learn from real experiences
                  - from IITs to tier-3 institutions and off-campus candidates.
                  No more guessing, just real experiences from real people,
                  creating a transparent ecosystem where knowledge flows freely
                  across all educational backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Stats with Enhanced Animation */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Impact by Numbers
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {dynamicStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl border-2 border-white/30 dark:border-slate-600/30 card-surreal"
                >
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-125 transition-transform duration-500 animate-pulse-glow`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div
                      className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 animate-neon-pulse`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section with Impact Metrics */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              What BeenThere Stands For
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl border-2 border-white/30 dark:border-slate-600/30 card-surreal overflow-hidden relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${value.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                        {value.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {value.description}
                    </p>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${value.color} bg-opacity-20 border border-opacity-30`}
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">
                        {value.impact}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div
                      className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl border border-white/30 dark:border-slate-600/30">
                        <CardContent className="p-6">
                          <div
                            className={`flex items-center gap-3 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}
                          >
                            <Badge
                              className={`bg-gradient-to-r ${milestone.color} text-white border-0 px-3 py-1`}
                            >
                              {milestone.year}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative z-10">
                      <div
                        className={`p-4 rounded-full bg-gradient-to-r ${milestone.color} shadow-lg border-4 border-white dark:border-slate-900`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section with Enhanced Cards */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl border-2 border-white/30 dark:border-slate-600/30 card-surreal overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-500" />
                <CardHeader className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="text-8xl p-6 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                        {member.image}
                      </div>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 text-sm px-4 py-1">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {member.skills && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.skills.map(
                          (skill: string, skillIndex: number) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="bg-slate-50 dark:bg-slate-800 text-xs"
                            >
                              {skill}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center gap-4">
                    <Link
                      href={member.linkedin}
                      className="text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link
                      href={member.github}
                      className="text-slate-600 hover:text-slate-700 transition-colors p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Guidelines with Interactive Elements */}
        <div className="mb-20">
          <div className="relative transform-3d">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative bg-gradient-to-br from-white/95 to-white/80 dark:from-slate-900/95 dark:to-slate-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-2 border-white/30 dark:border-slate-700/50 card-3d">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                    <Users className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>

                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent holographic">
                    Community Guidelines
                  </span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Our community thrives on authentic experiences shared with
                  mutual respect and helpfulness across all colleges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-emerald-50/80 to-emerald-100/60 dark:from-emerald-900/40 dark:to-emerald-800/30 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-700/50">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    What We Encourage
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>
                        Share authentic and detailed experiences from all
                        colleges
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>Provide genuine career insights and guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>
                        Help fellow students regardless of their college tier
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>
                        Maintain confidentiality of sensitive information
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>
                        Be respectful and supportive to all backgrounds
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>
                        Include both on-campus and off-campus experiences
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50/80 to-red-100/60 dark:from-red-900/40 dark:to-red-800/30 rounded-2xl p-6 border border-red-200/50 dark:border-red-700/50">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-red-600" />
                    What We Don&#39;t Allow
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 text-red-600 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>Sharing false or misleading information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 text-red-600 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>College-based discrimination or elitism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 text-red-600 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>Spam or promotional content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 text-red-600 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>Sharing confidential company information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 text-red-600 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>Personal attacks or harassment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 text-red-600 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>Discouraging students based on their college</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section with Enhanced CTA */}
        <div className="text-center">
          <div className="relative transform-3d">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative bg-gradient-to-br from-white/95 to-white/80 dark:from-slate-900/95 dark:to-slate-800/80 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border-2 border-white/30 dark:border-slate-700/50 card-3d">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl animate-float">
                    <Mail className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent holographic">
                  Get in Touch
                </span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
                Have questions, suggestions, or want to share your experience?
                We&#39;d love to hear from you and help you on your journey!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="mailto:hello@beenthere.com"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg btn-surreal"
                >
                  <Mail className="w-6 h-6" />
                  Contact Us
                </Link>
                <Link
                  href="/contribute"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg btn-surreal"
                >
                  <Users className="w-6 h-6" />
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
