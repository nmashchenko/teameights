import * as ICONS from './index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconOptions = Record<keyof typeof ICONS, any>;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ICON_OPTIONS = Object.entries(ICONS).reduce<IconOptions>(
  (acc, [iconName, IconComponent]) => {
    acc[iconName.replace(/icon$/i, '') as keyof typeof ICONS] = IconComponent({});
    return acc;
  },
  {} as IconOptions
);
