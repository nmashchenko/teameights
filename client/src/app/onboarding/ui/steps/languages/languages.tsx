import { Flex, Typography, BadgeIcon } from '@/shared/ui';
import { EmptyTile } from './ui/empty-tile';
import { useState } from 'react';
import { Search } from './ui/search';
import styles from './languages.module.scss';
import { programmingLanguages } from '@/shared/constant';
import { LanguageItem } from './ui/language-item';
import { IOptionItem } from '@/widgets/search/types';

export const Languages = () => {
  const [text, setText] = useState('');
  const [languages, setLanguages] = useState<IOptionItem[]>([]);

  function toggleLanguage(language: IOptionItem) {
    setLanguages(prev => {
      let index = -1;
      const appearedLang = Array.from(prev as IOptionItem[]).find((lang, i) => {
        index = i;
        return lang.value === language.value;
      });
      if (appearedLang) {
        return prev.slice(0, index).concat(prev.slice(index + 1));
      } else {
        return [...prev, language];
      }
    });
  }
  return (
    <Flex width='100%' height='100%' direction='column'>
      <div className={styles.languages}>
        <div className={styles.top}>
          <div className={styles.selected_languages}>
            <Flex wrap='wrap' gap='24px'>
              {Array(8)
                .fill(null)
                .map((value, index) => {
                  const languagesItem = languages[index];
                  if (languagesItem) {
                    return (
                      <div onClick={() => toggleLanguage(languagesItem)} key={languagesItem.label}>
                        <BadgeIcon isActive={true} data={languagesItem.label} />
                      </div>
                      // <LanguageItem
                      //   onClick={() => toggleLanguage(languagesItem)}
                      //   key={index}
                      //   language={languagesItem.label}
                      // />
                    );
                  }
                  return <EmptyTile key={index} />;
                })}
            </Flex>
          </div>
          <div className={styles.search}>
            <Flex>
              <Search placeholder='Search' defaultValue={text} onChange={setText} />
            </Flex>
          </div>
        </div>
        <div className={styles.languages_list}>
          <div className={styles.recommended}>
            <Typography size='body_s' color='greyNormal'>
              Recommended for you
            </Typography>
            <div className={styles.recommended_languages}>
              {programmingLanguages.map((lang, index) => (
                <LanguageItem
                  onClick={() => toggleLanguage(lang)}
                  language={lang.label}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className={styles.recommended}>
            <Typography size='body_s' color='greyNormal'>
              All languages
            </Typography>
            <div className={styles.recommended_languages}>
              {programmingLanguages.map((lang, index) => (
                <LanguageItem
                  isActive={Boolean(languages.find(option => option.label === lang.label))}
                  onClick={() => setLanguages(prev => [...prev, lang])}
                  language={lang.label}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
};
