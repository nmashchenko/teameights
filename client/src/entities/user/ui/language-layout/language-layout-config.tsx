type LanguageType = 'single' | 'more' | 'empty';
type LanguageLayout = LanguageType[];

interface LanguageLayoutConfig {
  readonly default: Readonly<LanguageLayout>;

  readonly [languageCount: number]: Readonly<LanguageLayout>;
}

export const languageLayoutConfig: LanguageLayoutConfig = {
  1: ['single', 'empty'],
  2: ['single', 'single'],
  3: ['single', 'more'],
  default: ['single', 'more'],
} as const;
