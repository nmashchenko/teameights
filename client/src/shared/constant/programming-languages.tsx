// * Logos
import {
  C,
  CPlusPlus,
  CSharp,
  CSS,
  Dart,
  Go,
  HTML,
  Java,
  JS,
  Kotlin,
  Lua,
  Perl,
  Php,
  Python,
  R,
  Ruby,
  Rust,
  Scala,
  SQL,
  Swift,
  TS,
} from '@/shared/assets';

interface LanguageOption {
  label: string;
  value: string;
}

export const programmingLanguageOptions: LanguageOption[] = [
  { label: 'JS', value: 'js' },
  { label: 'C++', value: 'c++' },
  { label: 'C', value: 'c' },
  { label: 'Python', value: 'python' },
  { label: 'Swift', value: 'swift' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Scala', value: 'scala' },
  { label: 'PHP', value: 'php' },
  { label: 'Go', value: 'go' },
  { label: 'C#', value: 'c#' },
  { label: 'Java', value: 'java' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'Dart', value: 'dart' },
  { label: 'Perl', value: 'perl' },
  { label: 'SQL', value: 'sql' },
  { label: 'TS', value: 'ts' },
  { label: 'Kotlin', value: 'kotlin' },
  { label: 'Rust', value: 'rust' },
  { label: 'R', value: 'r' },
  { label: 'Lua', value: 'lua' },
];

interface LanguageOptions {
  [lang: string]: JSX.Element;
}

export const languageOptions: LanguageOptions = {
  JS: <JS />,
  'C++': <CPlusPlus />,
  C: <C />,
  Python: <Python />,
  Swift: <Swift />,
  Ruby: <Ruby />,
  Scala: <Scala />,
  PHP: <Php />,
  Go: <Go />,
  'C#': <CSharp />,
  Java: <Java />,
  HTML: <HTML />,
  CSS: <CSS />,
  Dart: <Dart />,
  Perl: <Perl />,
  SQL: <SQL />,
  TS: <TS />,
  Kotlin: <Kotlin />,
  Rust: <Rust />,
  R: <R />,
  Lua: <Lua />,
};
