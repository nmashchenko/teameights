type BadgeFrameworkType = 'full' | 'half' | 'empty' | 'extra';
type BadgeFrameworkLayout = BadgeFrameworkType[];

interface badgeFrameworkLayoutConfig {
  readonly default: Readonly<BadgeFrameworkLayout>;

  readonly [badgeCount: number]: Readonly<BadgeFrameworkLayout>;
}

export const badgeFrameworkLayoutConfig: badgeFrameworkLayoutConfig = {
  1: ['empty', 'full'],
  2: ['full', 'full'],
  3: ['half', 'half', 'full'],
  4: ['half', 'half', 'half', 'half'],
  default: ['half', 'half', 'half', 'extra'],
} as const;
