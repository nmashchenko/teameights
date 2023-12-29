import { AccountType } from '@/app/onboarding/ui/steps/accout-type/accout-type';
import {
  DuelsIllustration,
  HackathonsIllustration,
  MentorshipIllustration,
  ProjectsIllustration,
  SearchIllustration,
  TeamIllustration,
} from '@/shared/assets';
import { PersonalInfo } from '@/app/onboarding/ui/steps/personal-info/personal-info';
import { Specialty } from '@/app/onboarding/ui/steps/specialty/specialty';
import { IconsSelector } from '@/app/onboarding/ui/steps/icons-selector/icons-selector';
import {
  designerTools,
  frameworks,
  managerTools,
  methodologies,
  programmingLanguages,
  recommendedLanguages,
} from '@/shared/constant';
import { SocialLinks } from '@/app/onboarding/ui/steps/social-links/social-links';

export interface StepProps {
  step: JSX.Element;
  title: string;
  centered: boolean;
  submissionStep: boolean;
  meta: {
    details: string;
    description: string;
    illustration: JSX.Element;
  };
}

const duelsMeta = {
  details: 'Coding Duels',
  description:
    'Engage in fast-paced coding 1v1 battles against fellow coders, solve problems under timed conditions and strive to climb the leaderboard.',
  illustration: <DuelsIllustration />,
};

const hackathonsMeta = {
  details: 'Hackathons',
  description:
    'Participate in dynamic hackathons tp expand your coding abilities. Compete with peers, learn new skills, and win money prizes.',
  illustration: <HackathonsIllustration />,
};

export const accountTypeStep: StepProps = {
  step: <AccountType />,
  title: 'Account type',
  centered: true,
  submissionStep: false,
  meta: {
    details: 'Teammates Search',
    description:
      'Use our intuitive search filters to find the right teammates based on a set of criteria and Instantly connect with them through the chat function.',
    illustration: <SearchIllustration />,
  },
};

export const personalInfoStep: StepProps = {
  step: <PersonalInfo />,
  title: 'Personal info',
  centered: true,
  submissionStep: false,
  meta: {
    details: 'Team Creation',
    description:
      'Connect with like-minded individuals for collaborative work, form teams, engage in group projects, and learn from one another.',
    illustration: <TeamIllustration />,
  },
};

export const specialityStep: StepProps = {
  step: <Specialty />,
  title: 'Speciality',
  centered: true,
  submissionStep: false,
  meta: {
    details: 'Mentorship Program',
    description:
      'Newcomers can connect with experienced mentors in the field to receive personalized guidance, support, and detailed feedback.',
    illustration: <MentorshipIllustration />,
  },
};

export const linksStep: StepProps = {
  step: <SocialLinks />,
  title: 'Links',
  centered: true,
  submissionStep: true,
  meta: {
    details: 'AI generated Projects',
    description:
      'Gain access to our AI generated projects catering to all levels of experience, work on real-world applications, improve skills, and build a portfolio.',
    illustration: <ProjectsIllustration />,
  },
};

export const developerSteps: StepProps[] = [
  {
    step: (
      <IconsSelector
        icons={programmingLanguages}
        recommendedIcons={recommendedLanguages}
        formFieldToUpdate='coreTools'
        description='All Languages'
      />
    ),
    title: 'Languages',
    centered: false,
    submissionStep: false,
    meta: duelsMeta,
  },
  {
    step: (
      <IconsSelector
        icons={frameworks}
        formFieldToUpdate='additionalTools'
        description='All Frameworks'
        type='text'
      />
    ),
    title: 'Frameworks',
    centered: false,
    submissionStep: false,
    meta: hackathonsMeta,
  },
];

export const projectManagerSteps: StepProps[] = [
  {
    step: (
      <IconsSelector icons={managerTools} formFieldToUpdate='coreTools' description='All Tools' />
    ),
    title: 'Tools',
    centered: false,
    submissionStep: false,
    meta: duelsMeta,
  },
  {
    step: (
      <IconsSelector
        icons={methodologies}
        formFieldToUpdate='additionalTools'
        description='All methodologies'
        type='text'
      />
    ),
    title: 'Methodologies',
    centered: false,
    submissionStep: false,
    meta: hackathonsMeta,
  },
];

export const designerSteps: StepProps[] = [
  {
    step: (
      <IconsSelector icons={designerTools} formFieldToUpdate='coreTools' description='All Tools' />
    ),
    title: 'Tools',
    centered: false,
    submissionStep: false,
    meta: duelsMeta,
  },
];
