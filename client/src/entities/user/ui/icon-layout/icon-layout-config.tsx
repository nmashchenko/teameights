type IconType = 'single' | 'more' | 'empty';
type IconLayout = IconType[];

interface IconLayoutConfig {
  readonly default: Readonly<IconLayout>;

  readonly [iconCount: number]: Readonly<IconLayout>;
}

export const iconLayoutConfig: IconLayoutConfig = {
  1: ['single', 'empty'],
  2: ['single', 'single'],
  3: ['single', 'more'],
  default: ['single', 'more'],
} as const;
