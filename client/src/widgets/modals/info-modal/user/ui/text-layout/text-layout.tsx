import { BadgeText } from '@/shared/ui';
import { ISkills, Nullable } from '@teameights/types';
import styles from './text-layout.module.scss';
import { FC } from 'react';

interface TextLayout {
  skills?: Nullable<ISkills>;
}

export const TextLayout: FC<TextLayout> = ({ skills }) => {
  return (
    <>
      {skills?.frameworks && (
        <div className={styles.grid_container}>
          {skills?.frameworks.map((framework, index) => <BadgeText data={framework} key={index} />)}
        </div>
      )}
      {skills?.fields && (
        <div className={styles.grid_container}>
          {skills?.fields.map((field, index) => <BadgeText data={field} key={index} />)}
        </div>
      )}
      {skills?.methodologies && (
        <div className={styles.grid_container}>
          {skills?.methodologies.map((methodology, index) => (
            <BadgeText data={methodology} key={index} />
          ))}
        </div>
      )}
    </>
  );
};
