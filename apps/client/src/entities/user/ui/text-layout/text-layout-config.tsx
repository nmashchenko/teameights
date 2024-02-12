type TextType = 'full' | 'half' | 'empty' | 'extra';
type TextLayout = TextType[];

interface TextLayoutConfig {
  readonly default: Readonly<TextLayout>;

  readonly [badgeCount: number]: Readonly<TextLayout>;
}

export const textLayoutConfig: TextLayoutConfig = {
  1: ['empty', 'full'],
  2: ['full', 'full'],
  3: ['half', 'half', 'full'],
  4: ['half', 'half', 'half', 'half'],
  default: ['half', 'half', 'half', 'extra'],
} as const;
