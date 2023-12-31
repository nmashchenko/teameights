import * as ICONS from './icons';
import * as ILLUSTRATIONS from './illustrations';
import * as LOGOS from './logos';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconOptions = Record<keyof typeof ICONS, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IllustrationOptions = Record<keyof typeof ILLUSTRATIONS, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LogoOptions = Record<keyof typeof LOGOS, any>;

export const ICON_OPTIONS = Object.entries(ICONS).reduce<IconOptions>(
  (acc, [iconName, IconComponent]) => {
    acc[iconName as keyof typeof ICONS] = IconComponent({});
    return acc;
  },
  {} as IconOptions
);

export const ILLUSTRATION_OPTIONS = Object.entries(ILLUSTRATIONS).reduce<IllustrationOptions>(
  (acc, [illustrationName, IllustrationComponent]) => {
    acc[illustrationName as keyof typeof ILLUSTRATIONS] = IllustrationComponent({});
    return acc;
  },
  {} as IllustrationOptions
);

export const LOGO_OPTIONS = Object.entries(LOGOS).reduce<LogoOptions>(
  (acc, [logoName, logoComponent]) => {
    acc[logoName as keyof typeof LOGOS] = logoComponent({});
    return acc;
  },
  {} as LogoOptions
);
