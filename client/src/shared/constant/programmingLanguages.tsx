// * Logos
import { C } from '../assets/Icons/LanguageLogo/C';
import { Cplusplus } from '../assets/Icons/LanguageLogo/Cplusplus';
import { Csharp } from '../assets/Icons/LanguageLogo/Csharp';
import { CSS } from '../assets/Icons/LanguageLogo/CSS';
import { Dart } from '../assets/Icons/LanguageLogo/Dart';
import { GO } from '../assets/Icons/LanguageLogo/GO';
import { Html } from '../assets/Icons/LanguageLogo/Html';
import { Java } from '../assets/Icons/LanguageLogo/Java';
import { JS } from '../assets/Icons/LanguageLogo/JS';
import { Kotlin } from '../assets/Icons/LanguageLogo/Kotlin';
import { Lua } from '../assets/Icons/LanguageLogo/Lua';
import { Perl } from '../assets/Icons/LanguageLogo/Perl';
import { Php } from '../assets/Icons/LanguageLogo/Php';
import { Python } from '../assets/Icons/LanguageLogo/Python';
import { R } from '../assets/Icons/LanguageLogo/R';
import { Ruby } from '../assets/Icons/LanguageLogo/Ruby';
import { Rust } from '../assets/Icons/LanguageLogo/Rust';
import { Scala } from '../assets/Icons/LanguageLogo/Scala';
import { SQL } from '../assets/Icons/LanguageLogo/SQL';
import { Swift } from '../assets/Icons/LanguageLogo/Swift';
import { TS } from '../assets/Icons/LanguageLogo/TS';

interface LanguageOption {
  label: string;
  value: string;
}

const programmingLanguageOptions: LanguageOption[] = [
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
  { label: 'Lua', value: 'lua' }
];

interface LanguageOptions {
  [lang: string]: JSX.Element;
}

const languageOptions: LanguageOptions = {
  JS: <JS />,
  'C++': <Cplusplus />,
  C: <C />,
  Python: <Python />,
  Swift: <Swift />,
  Ruby: <Ruby />,
  Scala: <Scala />,
  PHP: <Php />,
  Go: <GO />,
  'C#': <Csharp />,
  Java: <Java />,
  HTML: <Html />,
  CSS: <CSS />,
  Dart: <Dart />,
  Perl: <Perl />,
  SQL: <SQL />,
  TS: <TS />,
  Kotlin: <Kotlin />,
  Rust: <Rust />,
  R: <R />,
  Lua: <Lua />
};

export { languageOptions, programmingLanguageOptions };
