import { Experience } from '@/types/company';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Lightbulb,
  BookOpen,
  MapPin,
  Info,
  Award,
  GraduationCap,
  Globe,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CommentSection from './CommentSection';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  };

  const getExperienceTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800';
      case 'Internship':
        return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800';
      case 'PPO':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'High':
        return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800';
      case 'Medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800';
      case 'Low':
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  };

  return (
    <Card className="mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-foreground">
                {experience.role}
              </h3>
              {experience.selected ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
              {experience.isPPOConverted && (
                <span title="PPO Converted">
                  <Award className="h-5 w-5 text-purple-600" />
                </span>
              )}
              {experience.isOffCampus && (
                <span title="Off-campus Placement">
                  <Globe className="h-5 w-5 text-blue-600" />
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                Shared by{' '}
                <span className="font-medium">{experience.studentName}</span>{' '}
                (Batch {experience.batch})
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap className="h-4 w-4" />
                <span className="font-medium">{experience.college}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              className={getExperienceTypeColor(experience.experienceType)}
            >
              {experience.experienceType}
            </Badge>
            <div className="flex items-center gap-1">
              <Badge className={getDifficultyColor(experience.difficulty)}>
                {experience.difficulty}
              </Badge>
              <div className="group relative">
                <Info className="h-3 w-3 text-muted-foreground cursor-help" />
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-popover text-popover-foreground text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 max-w-xs">
                  {experience.difficultyNote}
                </div>
              </div>
            </div>
            <Badge variant={experience.selected ? 'default' : 'secondary'}>
              {experience.selected ? 'Selected' : 'Not Selected'}
            </Badge>
            {experience.isOffCampus && (
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                Off-campus
              </Badge>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span>{experience.package}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{experience.timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(experience.date).toLocaleDateString()}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="process">
            <AccordionTrigger className="text-left font-semibold">
              Interview Process ({experience.process.length} rounds)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {experience.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="bg-primary text-primary-foreground text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="requirements">
            <AccordionTrigger className="text-left font-semibold">
              Requirements & Expectations
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {experience.requirements.map((req, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      {req.category}
                    </h4>
                    <ul className="space-y-1">
                      {req.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="topics">
            <AccordionTrigger className="text-left font-semibold">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Study Topics & Resources
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {experience.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 bg-muted/30"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">
                        {topic.subject}
                      </h4>
                      <Badge
                        className={getImportanceColor(topic.importance)}
                        variant="outline"
                      >
                        {topic.importance} Priority
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-medium">
                        Recommended Resources:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {topic.resources.map((resource, resourceIndex) => (
                          <Badge
                            key={resourceIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tips">
            <AccordionTrigger className="text-left font-semibold">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Pro Tips & Advice
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {experience.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500"
                  >
                    <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Comments Section */}
        <CommentSection experienceId={experience.id} />
      </CardContent>
    </Card>
  );
}
