import { AccountType } from '@/app/onboarding/ui/steps/accout-type/accout-type';
import { PersonalInfo } from '@/app/onboarding/ui/steps/personal-info/personal-info';
import { Specialty } from '@/app/onboarding/ui/steps/specialty/specialty';
import { SocialLinks } from '@/app/onboarding/ui/steps/social-links/social-links';

export interface Steps {
  step: () => JSX.Element;
  title: string;
}

export const steps: Steps[] = [
  { step: AccountType, title: 'Account type' },
  { step: PersonalInfo, title: 'Personal info' },
  { step: Specialty, title: 'Speciality' },
  { step: SocialLinks, title: 'Social links' },
];
