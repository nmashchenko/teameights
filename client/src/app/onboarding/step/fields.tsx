import { EmptyTile, LanguageItem } from '@/app/onboarding/ui';
import { BadgeIcon } from '@/shared/ui';
import { FrameworkItem } from '@/app/onboarding/ui/framework-item/framework-item';
import styles from './select-fields.module.scss';

interface ComponentProps {
  data: string;
  onClick: () => void;
  isActive: boolean;
}

interface Fields {
  [key: string]: {
    selected: (props: Omit<ComponentProps, "onClick">) => JSX.Element;
    component: (props: ComponentProps) => JSX.Element;
    placeholder: () => JSX.Element;
    containerClass: string;
    selectedContainerClass: string;
  };
}

export const fields: Fields = {
  badgeIcon: {
    component: ({ data, onClick, isActive }) => (
      <LanguageItem language={data} onClick={onClick} isActive={isActive} />
    ),
    selected: ({ data, isActive}) => (<BadgeIcon isActive={isActive} data={data} />),
    placeholder: EmptyTile,
    containerClass: styles.badge_icon_container,
    selectedContainerClass: styles.badge_icon_placeholder_container,
  },
  badgeText: {
    component: ({ data, onClick, isActive }) => (
      <FrameworkItem framework={data} onClick={onClick} isActive={isActive} />
    ),
    selected: ({ data, isActive }) => (
      <FrameworkItem framework={data} isActive={isActive} />
    ),
    placeholder: EmptyTile,
    containerClass: styles.badge_text_container,
    selectedContainerClass: styles.badge_text_placeholder_container,
  },
};
