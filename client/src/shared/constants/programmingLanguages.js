// * Logos
import C from 'shared/assets/LanguageLogo/C'
import Cplusplus from 'shared/assets/LanguageLogo/Cplusplus'
import Csharp from 'shared/assets/LanguageLogo/Csharp'
import Dart from 'shared/assets/LanguageLogo/Dart'
import GO from 'shared/assets/LanguageLogo/GO'
import Html from 'shared/assets/LanguageLogo/Html'
import Java from 'shared/assets/LanguageLogo/Java'
import JS from 'shared/assets/LanguageLogo/JS'
import Perl from 'shared/assets/LanguageLogo/Perl'
import Php from 'shared/assets/LanguageLogo/Php'
import Python from 'shared/assets/LanguageLogo/Python'
import Ruby from 'shared/assets/LanguageLogo/Ruby'
import Scala from 'shared/assets/LanguageLogo/Scala'
import SQL from 'shared/assets/LanguageLogo/SQL'
import Swift from 'shared/assets/LanguageLogo/Swift'

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
  { label: 'HTML/CSS', value: 'html/css' },
  { label: 'Dart', value: 'dart' },
  { label: 'Perl', value: 'perl' },
  { label: 'SQL', value: 'sql' },
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
  'HTML/CSS': <Html />,
  Dart: <Dart />,
  Perl: <Perl />,
  SQL: <SQL />,
})

export { languageOptions, programmingLanguageOptions }
