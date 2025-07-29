import { Company } from '@/types/company';
import { companiesBasicInfo } from './companies-list';
import { companyExperiences } from './experiences';

export const companies: Company[] = companiesBasicInfo.map(company => ({
  ...company,
  experiences: companyExperiences[company.id] || [],
}));

// Helper function to calculate success rates (excluding internship stipends from average package)
export const calculateSuccessRates = (experiences: any[]) => {
  const total = experiences.length;
  if (total === 0)
    return { overall: 0, internship: 0, fullTime: 0, ppoConversion: 0 };

  const selected = experiences.filter(exp => exp.selected).length;
  const internships = experiences.filter(
    exp => exp.experienceType === 'Internship'
  );
  const fullTime = experiences.filter(
    exp => exp.experienceType === 'Full-time'
  );
  const ppoExperiences = experiences.filter(
    exp => exp.experienceType === 'PPO'
  );

  const internshipSelected = internships.filter(exp => exp.selected).length;
  const fullTimeSelected = fullTime.filter(exp => exp.selected).length;
  const ppoSelected = ppoExperiences.filter(exp => exp.selected).length;

  return {
    overall: total > 0 ? Math.round((selected / total) * 100) : 0,
    internship:
      internships.length > 0
        ? Math.round((internshipSelected / internships.length) * 100)
        : 0,
    fullTime:
      fullTime.length > 0
        ? Math.round((fullTimeSelected / fullTime.length) * 100)
        : 0,
    ppoConversion:
      ppoExperiences.length > 0
        ? Math.round((ppoSelected / ppoExperiences.length) * 100)
        : 0,
  };
};

// Helper function to calculate average package (excluding internships)
export const calculateAveragePackage = (experiences: any[]) => {
  const fullTimeAndPPO = experiences.filter(
    exp => exp.experienceType === 'Full-time' || exp.experienceType === 'PPO'
  );

  if (fullTimeAndPPO.length === 0) return 0;

  const totalPackage = fullTimeAndPPO.reduce((acc, exp) => {
    const packageValue = parseFloat(exp.package.replace(/[₹LPA\s]/g, ''));
    return acc + packageValue;
  }, 0);

  return totalPackage / fullTimeAndPPO.length;
};

// Helper function to get dynamic statistics
export const getDynamicStats = () => {
  const totalCompanies = companies.length;
  const totalExperiences = companies.reduce(
    (acc, company) => acc + company.experiences.length,
    0
  );
  const totalSelected = companies.reduce(
    (acc, company) =>
      acc + company.experiences.filter(exp => exp.selected).length,
    0
  );
  const overallSuccessRate =
    totalExperiences > 0
      ? Math.round((totalSelected / totalExperiences) * 100)
      : 0;

  // Calculate average rating
  const avgRating =
    companies.reduce((acc, company) => acc + company.rating, 0) /
    companies.length;

  // Count different experience types
  const fullTimeCount = companies.reduce(
    (acc, company) =>
      acc +
      company.experiences.filter(exp => exp.experienceType === 'Full-time')
        .length,
    0
  );
  const internshipCount = companies.reduce(
    (acc, company) =>
      acc +
      company.experiences.filter(exp => exp.experienceType === 'Internship')
        .length,
    0
  );
  const ppoCount = companies.reduce(
    (acc, company) =>
      acc +
      company.experiences.filter(exp => exp.experienceType === 'PPO').length,
    0
  );

  return {
    totalCompanies,
    totalExperiences,
    overallSuccessRate,
    avgRating: avgRating.toFixed(1),
    fullTimeCount,
    internshipCount,
    ppoCount,
  };
};
