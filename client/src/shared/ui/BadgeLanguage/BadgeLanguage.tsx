import {
  ProgrammingLanguagesContainer,
  LanguageContainer,
  AndMore,
} from './BadgeLanguage.styles';
import { languageOptions } from '../../constant/programmingLanguages';

export const BadgeLanguage = () => {
  // TODO: Replace with "person" context
  const personLanguages = ['C++', 'JS', 'GO'];
  const personLanguagesCount = personLanguages.length;

  return (
    <>
      <ProgrammingLanguagesContainer>
        {personLanguages
          .slice(0, personLanguagesCount < 2 ? personLanguagesCount : 2)
          .map((item, id) => {
            let andMore = <></>;

            if (id === 1 && personLanguagesCount > 2) {
              andMore = (
                <AndMore makeWhite={false}>{personLanguagesCount - 2}+</AndMore>
              );
            }
            if (personLanguagesCount === 1) {
              return (
                <LanguageContainer key={item} width="100%">
                  {languageOptions[item]}
                </LanguageContainer>
              );
            }

            return (
              <LanguageContainer key={item}>
                {andMore}
                {languageOptions[item]}
              </LanguageContainer>
            );
          })}
      </ProgrammingLanguagesContainer>
    </>
  );
};
