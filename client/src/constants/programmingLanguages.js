// * Logos
import C from '../assets/LanguageLogo/C'
import Cplusplus from '../assets/LanguageLogo/Cplusplus'
import Csharp from '../assets/LanguageLogo/Csharp'
import CSS from '../assets/LanguageLogo/CSS'
import Dart from '../assets/LanguageLogo/Dart'
import GO from '../assets/LanguageLogo/GO'
import Html from '../assets/LanguageLogo/Html'
import Java from '../assets/LanguageLogo/Java'
import JS from '../assets/LanguageLogo/JS'
import Kotlin from '../assets/LanguageLogo/Kotlin'
import Lua from '../assets/LanguageLogo/Lua'
import Perl from '../assets/LanguageLogo/Perl'
import Php from '../assets/LanguageLogo/Php'
import Python from '../assets/LanguageLogo/Python'
import R from '../assets/LanguageLogo/R'
import Ruby from '../assets/LanguageLogo/Ruby'
import Rust from '../assets/LanguageLogo/Rust'
import Scala from '../assets/LanguageLogo/Scala'
import SQL from '../assets/LanguageLogo/SQL'
import Swift from '../assets/LanguageLogo/Swift'
import TS from '../assets/LanguageLogo/TS'

const programmingLanguageOptions = [
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
]

const languageOptions = Object.freeze({
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
  Lua: <Lua />,
})

export { languageOptions, programmingLanguageOptions }
