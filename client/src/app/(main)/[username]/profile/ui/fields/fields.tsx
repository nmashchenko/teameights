import { Card } from '../card/card';
import { Flex, Typography } from '@/shared/ui';
import { useState } from 'react';
import styles from './fields.module.scss';
import { Skills } from './skills';
import { WorkExperience } from './work-experience';
import { Education } from './education';
import layoutStyles from '../../layout.module.scss';
export const Fields = () => {
  const [field, setField] = useState<keyof typeof fields>('Skills');

  const fields = {
    Skills: <Skills />,
    Projects: null,
    'Work experience': <WorkExperience />,
    Education: <Education />,
    Tournaments: null,
  };

  return (
    <Card className={layoutStyles.lg_card}>
      <Flex direction='column' gap='24px' className={styles.fields_container}>
        <Flex className={styles.nav_bar} gap='16px'>
          {Object.keys(fields).map(key => {
            const classProps = field === key ? { className: styles.selected } : {};
            return (
              <button
                onClick={() => setField(key as keyof typeof fields)}
                {...classProps}
                key={key}
              >
                <Typography
                  className={styles.field_text}
                  color={field === key ? 'greenBright' : 'greyNormal'}
                >
                  {key}
                </Typography>
              </button>
            );
          })}
        </Flex>
        {fields[field]}
      </Flex>
    </Card>
  );
};
