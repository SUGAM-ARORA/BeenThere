'use client';

import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  lazy,
  Suspense,
} from 'react';
import {
  companies,
  calculateSuccessRates,
  getDynamicStats,
} from '@/data/companies';
import SearchBar from '@/components/SearchBar';
import Header from '@/components/Header';
import { Company } from '@/types/company';
import {
  Sparkles,
  Rocket,
  Target,
  Users,
  TrendingUp,
  Star,
  Zap,
  Globe,
  Award,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

// Lazy load the CompanyCard component
const CompanyCard = lazy(() => import('@/components/CompanyCard'));

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    difficulty: '',
    role: '',
    experienceType: '',
    college: '',
  });

  const filteredCompanies = useMemo(() => {
    return companies.filter((company: Company) => {
      // Search query filter
      const matchesSearch =
        searchQuery === '' ||
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.experiences.some(
          exp =>
            exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exp.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exp.topics.some(topic =>
              topic.subject.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );

      // Industry filter - treat both empty string and "all" as no filter
      const matchesIndustry =
        filters.industry === '' ||
        filters.industry === 'all' ||
        company.industry === filters.industry;

      // Role filter - treat both empty string and "all" as no filter
      const matchesRole =
        filters.role === '' ||
        filters.role === 'all' ||
        company.experiences.some(exp => exp.role.includes(filters.role));

      // Difficulty filter - treat both empty string and "all" as no filter
      const matchesDifficulty =
        filters.difficulty === '' ||
        filters.difficulty === 'all' ||
        company.experiences.some(exp => exp.difficulty === filters.difficulty);

      // Experience type filter
      const matchesExperienceType =
        filters.experienceType === '' ||
        filters.experienceType === 'all' ||
        company.experiences.some(
          exp => exp.experienceType === filters.experienceType
        );

      // College filter
      const matchesCollege =
        filters.college === '' ||
        filters.college === 'all' ||
        company.experiences.some(exp => exp.college === filters.college);

      return (
        matchesSearch &&
        matchesIndustry &&
        matchesRole &&
        matchesDifficulty &&
        matchesExperienceType &&
        matchesCollege
      );
    });
  }, [searchQuery, filters]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
      companies: filteredCompanies.slice(startIndex, endIndex),
      totalPages: Math.ceil(filteredCompanies.length / itemsPerPage),
      totalCompanies: filteredCompanies.length,
      hasResults: filteredCompanies.length > 0,
    };
  }, [filteredCompanies, currentPage, itemsPerPage]);

  const companiesGridRef = useRef<HTMLDivElement>(null);
  const scrollToResults = () => {
    if (companiesGridRef.current) {
      const headerHeight = 80;
      const elementTop = companiesGridRef.current.getBoundingClientRect().top;
      const offsetPosition = elementTop + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters]);

  useEffect(() => {
    if (currentPage > 1) {
      scrollToResults();
    }
  }, [currentPage]);

  // Get dynamic statistics
  const stats = getDynamicStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/30 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float animate-morphing-blob"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float animate-morphing-blob"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float animate-morphing-blob"
          style={{ animationDelay: '4s' }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-float animate-morphing-blob"
          style={{ animationDelay: '6s' }}
        />
      </div>

      <Header />

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <GraduationCap className="w-96 h-96 text-blue-500 animate-pulse animate-morphing-blob" />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-gradient holographic">
                BeenThere
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-gradient holographic">
                Learn from Experience
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover authentic career insights from seniors who&#39;ve been
              there! Get real interview experiences, preparation tips, and
              career guidance from those who&#39;ve walked the path before you.
            </p>

            {/* Enhanced stats cards with dynamic data */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 card-surreal neon-blue">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stats.totalCompanies}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Companies
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 card-surreal neon-purple">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stats.totalExperiences}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Experiences
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 card-surreal neon-green">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20">
                    <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {stats.overallSuccessRate}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Success Rate
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 card-surreal neon-pink">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                    <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {stats.avgRating}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Avg Rating
                </div>
              </div>
            </div>

            {/* Experience type breakdown with enhanced styling */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="text-center bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-xl rounded-xl p-3 border border-white/30 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 neon-blue">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {stats.fullTimeCount}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Full-time
                </div>
              </div>
              <div className="text-center bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-xl rounded-xl p-3 border border-white/30 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 neon-purple">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  {stats.internshipCount}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Internships
                </div>
              </div>
              <div className="text-center bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-xl rounded-xl p-3 border border-white/30 dark:border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 neon-green">
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {stats.ppoCount}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  PPO Conversions
                </div>
              </div>
            </div>
          </div>
        </div>

        <SearchBar onSearch={setSearchQuery} onFilterChange={setFilters} />

        <div className="mb-8">
          <div
            ref={companiesGridRef}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                {searchQuery ||
                Object.values(filters).some(f => f && f !== 'all')
                  ? 'Search Results'
                  : 'All Companies'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                {paginatedData.hasResults ? (
                  <>
                    Showing {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(
                      currentPage * itemsPerPage,
                      paginatedData.totalCompanies
                    )}{' '}
                    of {paginatedData.totalCompanies} compan
                    {paginatedData.totalCompanies !== 1 ? 'ies' : 'y'}
                    {(searchQuery ||
                      Object.values(filters).some(f => f && f !== 'all')) && (
                      <span className="text-blue-600 dark:text-blue-400">
                        {' '}
                        (filtered)
                      </span>
                    )}
                  </>
                ) : (
                  'No companies found'
                )}
              </p>
            </div>

            {(searchQuery ||
              Object.values(filters).some(f => f && f !== 'all')) && (
              <div className="text-sm bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full px-4 py-2 border border-blue-200/50 dark:border-blue-700/50 neon-blue">
                {searchQuery && (
                  <span className="text-slate-700 dark:text-slate-300">
                    Searching for:{' '}
                    <strong className="text-blue-600 dark:text-blue-400">
                      &quot;{searchQuery}&quot;
                    </strong>
                  </span>
                )}
              </div>
            )}
          </div>

          {!paginatedData.hasResults ? (
            <div className="text-center py-20">
              <div className="relative mb-8">
                <div className="text-8xl mb-4 animate-float">🔍</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse animate-morphing-blob" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4">
                No companies found
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Try adjusting your search criteria or filters
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedData.companies.map((company, index) => (
                  <div
                    key={company.id}
                    className="animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Suspense
                      fallback={
                        <div className="h-64 bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/50 dark:to-slate-700/30 backdrop-blur-xl rounded-2xl animate-pulse" />
                      }
                    >
                      <CompanyCard company={company} />
                    </Suspense>
                  </div>
                ))}
              </div>

              {paginatedData.totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-slate-600/40 shadow-xl">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setCurrentPage(prev => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300 neon-blue"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {/* Always show exactly 7 slots */}
                      <div className="flex items-center gap-1">
                        {(() => {
                          const totalPages = paginatedData.totalPages;
                          const current = currentPage;
                          let pages: (number | string)[] = [];

                          if (totalPages <= 7) {
                            // If total pages <= 7, show all pages
                            pages = Array.from(
                              { length: totalPages },
                              (_, i) => i + 1
                            );
                          } else {
                            if (current <= 4) {
                              // Near beginning: [1] [2] [3] [4] [5] [...] [last]
                              pages = [1, 2, 3, 4, 5, '...', totalPages];
                            } else if (current >= totalPages - 3) {
                              // Near end: [1] [...] [last-4] [last-3] [last-2] [last-1] [last]
                              pages = [
                                1,
                                '...',
                                totalPages - 4,
                                totalPages - 3,
                                totalPages - 2,
                                totalPages - 1,
                                totalPages,
                              ];
                            } else {
                              // Middle: [1] [...] [current-1] [current] [current+1] [...] [last]
                              pages = [
                                1,
                                '...',
                                current - 1,
                                current,
                                current + 1,
                                '...',
                                totalPages,
                              ];
                            }
                          }

                          // Pad array to always have 7 items if needed
                          while (pages.length < 7) {
                            pages.push('');
                          }

                          return pages.slice(0, 7).map((page, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-center w-10 h-10"
                            >
                              {page === '...' ? (
                                <span className="text-slate-500 dark:text-slate-400 text-sm">
                                  ...
                                </span>
                              ) : page === '' ? (
                                <span></span> // Empty placeholder to maintain spacing
                              ) : (
                                <button
                                  onClick={() => setCurrentPage(page as number)}
                                  className={`w-10 h-10 rounded-lg font-semibold font-mono transition-all duration-300 hover:scale-105 flex items-center justify-center ${
                                    currentPage === page
                                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg neon-blue'
                                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                                  }`}
                                >
                                  {page}
                                </button>
                              )}
                            </div>
                          ));
                        })()}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() =>
                          setCurrentPage(prev =>
                            Math.min(prev + 1, paginatedData.totalPages)
                          )
                        }
                        disabled={currentPage === paginatedData.totalPages}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300 neon-blue"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Page counter */}
                    <div className="text-center mt-3 text-sm text-slate-600 dark:text-slate-400 font-mono">
                      Page {currentPage} of {paginatedData.totalPages}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-white/95 to-white/80 dark:from-slate-900/95 dark:to-slate-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/30 dark:border-slate-700/30 card-surreal">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 neon-blue">
                  <Rocket className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent holographic">
                  Share Your Journey
                </span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Help future candidates by sharing your interview experiences and
                career insights. Your journey could be the guidance someone
                needs to succeed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="group bg-gradient-to-br from-blue-50/80 to-blue-100/60 dark:from-blue-900/40 dark:to-blue-800/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105 card-surreal neon-blue">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    📝
                  </div>
                  <p className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">
                    Share Experience
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Tell your interview story
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50/80 to-purple-100/60 dark:from-purple-900/40 dark:to-purple-800/30 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105 card-surreal neon-purple">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    💡
                  </div>
                  <p className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">
                    Share Insights
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Offer career guidance
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-emerald-50/80 to-emerald-100/60 dark:from-emerald-900/40 dark:to-emerald-800/30 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105 card-surreal neon-green">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    🤝
                  </div>
                  <p className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">
                    Mentor Others
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Guide the next generation
                  </p>
                </div>
              </div>

              <Link
                href="/contribute"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                <GraduationCap className="w-6 h-6" />
                Share Your Journey
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
