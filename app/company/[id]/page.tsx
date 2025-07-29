import {
  companies,
  calculateSuccessRates,
  calculateAveragePackage,
} from '@/data/companies';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import ExperienceCard from '@/components/ExperienceCard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Star,
  MapPin,
  Users,
  ExternalLink,
  TrendingUp,
  Award,
  Clock,
  Target,
  Building,
  Globe,
  Info,
  Eye,
} from 'lucide-react';
import Link from 'next/link';

interface CompanyPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return companies.map(company => ({
    id: company.id,
  }));
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const company = companies.find(c => c.id === params.id);

  if (!company) {
    notFound();
  }

  const successRates = calculateSuccessRates(company.experiences);
  const avgPackage = calculateAveragePackage(company.experiences);

  // Get unique roles being hired
  const allRoles = Array.from(
    new Set(company.locations.flatMap(loc => loc.hiringFor))
  );
  const difficulties = company.experiences.map(exp => exp.difficulty);
  const difficultyCount = {
    Easy: difficulties.filter(d => d === 'Easy').length,
    Medium: difficulties.filter(d => d === 'Medium').length,
    Hard: difficulties.filter(d => d === 'Hard').length,
  };

  // Group experiences by type
  const experiencesByType = {
    'Full-time': company.experiences.filter(
      exp => exp.experienceType === 'Full-time'
    ),
    Internship: company.experiences.filter(
      exp => exp.experienceType === 'Internship'
    ),
    PPO: company.experiences.filter(exp => exp.experienceType === 'PPO'),
  };

  const totalExperiences = company.experiences.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Company Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 mb-4 inline-flex items-center gap-2"
          >
            ← Back to Companies
          </Link>

          <Card className="shadow-xl border-2 border-border">
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{company.logo}</div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {company.name}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="text-sm">
                        {company.industry}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {company.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                      {company.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span>HQ: {company.headquarters}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>
                      India:{' '}
                      {company.locations
                        .filter(loc => loc.country === 'India')
                        .map(loc => loc.city)
                        .join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{company.size} employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {successRates.overall}%
              </div>
              <p className="text-sm text-muted-foreground">Overall Success</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {avgPackage > 0 ? `₹${avgPackage.toFixed(1)} LPA` : 'N/A'}
              </div>
              <p className="text-sm text-muted-foreground">
                Avg Package (FT/PPO)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {allRoles.length}
              </div>
              <p className="text-sm text-muted-foreground">Different Roles</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {totalExperiences}
              </div>
              <p className="text-sm text-muted-foreground">Total Experiences</p>
            </CardContent>
          </Card>
        </div>

        {/* Success Rates by Type */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Full-time Success Rate</h3>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {successRates.fullTime}%
                </div>
                <p className="text-sm text-muted-foreground">
                  {experiencesByType['Full-time'].length} experiences
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Internship Success Rate</h3>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {successRates.internship}%
                </div>
                <p className="text-sm text-muted-foreground">
                  {experiencesByType['Internship'].length} experiences
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">PPO Conversion Rate</h3>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {successRates.ppoConversion}%
                </div>
                <p className="text-sm text-muted-foreground">
                  {experiencesByType['PPO'].length} conversions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Roles and Difficulty Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Available Roles</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {allRoles.map((role, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {role}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">
                  Difficulty Distribution
                </h3>
                <div className="group relative">
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Difficulty is subjective and varies by person
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(difficultyCount).map(([difficulty, count]) => (
                  <div
                    key={difficulty}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{difficulty}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            difficulty === 'Easy'
                              ? 'bg-green-500'
                              : difficulty === 'Medium'
                                ? 'bg-yellow-500'
                                : 'bg-red-500'
                          }`}
                          style={{
                            width: `${totalExperiences > 0 ? (count / totalExperiences) * 100 : 0}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Locations */}
        <Card className="mb-8">
          <CardHeader>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Office Locations & Hiring
            </h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {company.locations.map((location, index) => (
                <div key={index} className="p-4 border rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-semibold">
                      {location.city}, {location.country}
                    </span>
                    {location.isHeadquarters && (
                      <Badge variant="secondary" className="text-xs">
                        HQ
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Hiring for:</p>
                    <div className="flex flex-wrap gap-1">
                      {location.hiringFor.map((role, roleIndex) => (
                        <Badge
                          key={roleIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experiences */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Interview Experiences ({totalExperiences})
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4" />
              <span>Experiences are subjective and may vary</span>
            </div>
          </div>

          {company.experiences.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No experiences shared yet
                </h3>
                <p className="text-muted-foreground">
                  Be the first to share your interview experience!
                </p>
              </CardContent>
            </Card>
          ) : (
            <div>
              {company.experiences.map(experience => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <Eye className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Want to Share Your Scene?
                </span>
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Help future candidates by revealing the real scene behind your{' '}
                {company.name} interview experience. Your insights could be the
                key to someone&#39;s success story.
              </p>

              <Link
                href="/contribute"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                <Eye className="w-6 h-6" />
                Share Your Scene
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
