import { Company } from '@/types/company';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Star,
  MapPin,
  Users,
  TrendingUp,
  Zap,
  Sparkles,
  Building,
  Globe,
  Award,
  Target,
  Rocket,
} from 'lucide-react';
import Link from 'next/link';
import {
  calculateSuccessRates,
  calculateAveragePackage,
} from '@/data/companies';

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-gradient-to-r from-emerald-500 to-green-400 text-white border-emerald-300 shadow-lg shadow-emerald-500/25';
      case 'Medium':
        return 'bg-gradient-to-r from-amber-500 to-orange-400 text-white border-amber-300 shadow-lg shadow-amber-500/25';
      case 'Hard':
        return 'bg-gradient-to-r from-red-500 to-pink-400 text-white border-red-300 shadow-lg shadow-red-500/25';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-400 text-white border-gray-300 shadow-lg shadow-gray-500/25';
    }
  };

  const getIndustryGradient = (industry: string) => {
    switch (industry) {
      case 'Technology':
        return 'from-blue-600 via-purple-600 to-cyan-500';
      case 'E-commerce':
        return 'from-orange-500 via-red-500 to-pink-500';
      case 'E-commerce/Cloud':
        return 'from-indigo-500 via-blue-500 to-teal-500';
      case 'FinTech':
        return 'from-green-500 via-emerald-500 to-teal-500';
      case 'Food Tech':
        return 'from-yellow-500 via-orange-500 to-red-500';
      case 'Software/Creative':
        return 'from-purple-500 via-pink-500 to-rose-500';
      case 'Cloud/CRM':
        return 'from-sky-500 via-blue-500 to-indigo-500';
      default:
        return 'from-gray-500 via-slate-500 to-zinc-500';
    }
  };

  const avgDifficulty =
    company.experiences.length > 0
      ? company.experiences.reduce((acc, exp) => {
          const diffScore =
            exp.difficulty === 'Easy' ? 1 : exp.difficulty === 'Medium' ? 2 : 3;
          return acc + diffScore;
        }, 0) / company.experiences.length
      : 0;

  const difficultyLabel =
    avgDifficulty <= 1.5 ? 'Easy' : avgDifficulty <= 2.5 ? 'Medium' : 'Hard';
  const successRates = calculateSuccessRates(company.experiences);
  const avgPackage = calculateAveragePackage(company.experiences);

  // Get unique experience types
  const experienceTypes = Array.from(
    new Set(company.experiences.map(exp => exp.experienceType))
  );

  // Get hiring locations (India offices)
  const indiaLocations = company.locations.filter(
    loc => loc.country === 'India'
  );

  // Get unique roles being hired
  const allRoles = Array.from(
    new Set(company.locations.flatMap(loc => loc.hiringFor))
  );

  return (
    <Link href={`/company/${company.id}`} className="block group">
      <Card className="relative overflow-hidden card-surreal transform-3d bg-gradient-to-br from-white/95 to-white/80 dark:from-slate-800/95 dark:to-slate-900/80 backdrop-blur-xl border-2 border-white/30 dark:border-slate-700/30 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out h-full">
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getIndustryGradient(company.industry)} opacity-5 group-hover:opacity-15 transition-opacity duration-700`}
        />

        {/* Morphing blob background */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-morphing-blob opacity-60" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="particle absolute top-4 right-4 w-2 h-2 bg-blue-400 animate-float"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="particle absolute top-8 left-6 w-1 h-1 bg-purple-400 animate-float"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="particle absolute bottom-6 right-8 w-1.5 h-1.5 bg-cyan-400 animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="particle absolute bottom-10 left-10 w-1 h-1 bg-pink-400 animate-float"
            style={{ animationDelay: '3s' }}
          />
        </div>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer" />
        </div>

        <CardHeader className="relative pb-3 z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* Company logo with enhanced glow effect */}
              <div className="relative">
                <div className="text-4xl p-4 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 neon-blue">
                  {company.logo}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow" />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 animate-neon-pulse">
                  {company.name}
                </h3>
                <Badge
                  className={`mt-2 bg-gradient-to-r ${getIndustryGradient(company.industry)} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 neon-purple`}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {company.industry}
                </Badge>
              </div>
            </div>

            {/* Rating with enhanced animation */}
            <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 backdrop-blur-sm rounded-full px-3 py-1 border border-yellow-400/40 neon-pink">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                {company.rating}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative pt-0 z-10">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2 leading-relaxed">
            {company.description}
          </p>

          {/* Company details with enhanced icons */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 neon-blue">
                <Building className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                {company.headquarters}
              </span>
            </div>

            {indiaLocations.length > 0 && (
              <div className="flex items-center gap-3 text-sm">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 neon-green">
                  <MapPin className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-slate-600 dark:text-slate-300 font-medium">
                  {indiaLocations.map(loc => loc.city).join(', ')} (India)
                </span>
              </div>
            )}

            <div className="flex items-center gap-3 text-sm">
              <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 neon-purple">
                <Users className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                {company.size} employees
              </span>
            </div>
          </div>

          {/* Success rates and package info with enhanced styling */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col gap-1">
              <Badge
                className={`${getDifficultyColor(difficultyLabel)} font-semibold px-3 py-1 hover:scale-105 transition-transform duration-300 neon-pink`}
              >
                <Zap className="w-3 h-3 mr-1" />
                {difficultyLabel} Level*
              </Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                *Subjective assessment
              </span>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-slate-100/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-700/80 rounded-full px-3 py-1 border border-slate-200/50 dark:border-slate-600/50 mb-1 neon-green">
                <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {successRates.overall}% success
                </span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {company.experiences.length} experience
                {company.experiences.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          {/* Average package with enhanced design */}
          {avgPackage > 0 && (
            <div className="mb-4">
              <div className="text-center bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-3 border border-green-200/50 dark:border-green-700/50 neon-green">
                <div className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ₹{avgPackage.toFixed(1)} LPA
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Avg Package (Full-time/PPO)
                </div>
              </div>
            </div>
          )}

          {/* Experience types with enhanced badges */}
          {experienceTypes.length > 0 && (
            <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-4 mb-4">
              <div className="flex flex-wrap gap-2">
                {experienceTypes.map((type, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs bg-gradient-to-r from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-sm border-slate-300/50 dark:border-slate-600/50 hover:border-blue-400/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 neon-blue"
                  >
                    {type === 'Full-time' && (
                      <Rocket className="w-3 h-3 mr-1" />
                    )}
                    {type === 'Internship' && (
                      <Target className="w-3 h-3 mr-1" />
                    )}
                    {type === 'PPO' && <Award className="w-3 h-3 mr-1" />}
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Role tags with enhanced styling */}
          <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
            <div className="flex flex-wrap gap-2">
              {allRoles.slice(0, 3).map((role, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs bg-gradient-to-r from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-sm border-slate-300/50 dark:border-slate-600/50 hover:border-purple-400/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 neon-purple"
                >
                  {role}
                </Badge>
              ))}
              {allRoles.length > 3 && (
                <Badge
                  variant="outline"
                  className="text-xs bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/40 dark:to-purple-900/40 border-blue-300/50 dark:border-blue-600/50 text-blue-700 dark:text-blue-300 font-semibold hover:scale-105 transition-transform duration-300 neon-blue"
                >
                  +{allRoles.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        {/* Enhanced hover glow effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl animate-pulse-glow" />
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-3xl" />
      </Card>
    </Link>
  );
}
