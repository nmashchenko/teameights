'use client';

import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from 'shared/i18n/client';
import { languages } from 'shared/i18n/settings';
import { usePathname } from 'next/navigation';

export const LanguageSwitcher = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const currentPath = usePathname();

  const changeLanguagePath = (newLang: string) => {
    const newPath = currentPath.replace(`${lng}`, `${newLang}`);
    return newPath;
  };

  return (
    <div style={{ marginTop: 50 }}>
      <Trans i18nKey='languageSwitcher' t={t}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        Switch from <strong>{{ lng }}</strong> to:
      </Trans>
      {languages
        .filter(l => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={changeLanguagePath(l)}>{l}</Link>
            </span>
          );
        })}
    </div>
  );
};
