import { LanguageItem } from '@/app/onboarding/ui';
import { BadgeIcon } from '@/shared/ui';
import { FrameworkItem } from '@/app/onboarding/ui/framework-item/framework-item';
import styles from './select-fields.module.scss';

interface ComponentProps {
  data: string;
  onClick: () => void;
  isActive: boolean;
}

interface PlaceholderProps extends Omit<ComponentProps, 'onClick'> {}
interface Fields {
  [key: string]: {
    component: (props: ComponentProps) => JSX.Element;
    placeholder: (props: PlaceholderProps) => JSX.Element;
    containerClass: string;
  };
}

export const fields: Fields = {
  badgeIcon: {
    component: ({ data, onClick, isActive }) => (
      <LanguageItem language={data} onClick={onClick} isActive={isActive} />
    ),
    placeholder: ({ isActive, data }) => <BadgeIcon isActive={isActive} data={data} />,
    containerClass: styles.badge_icon_container,
  },
  badgeText: {
    component: ({ data, onClick, isActive }) => (
      <FrameworkItem framework={data} onClick={onClick} isActive={isActive} />
    ),
    placeholder: ({ isActive, data }) => <BadgeIcon isActive={isActive} data={data} />,
    containerClass: styles.badge_text_container,
  },
};
