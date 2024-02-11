import { Card } from './card';
import { Flex, Typography } from '@/shared/ui';
import { useState } from 'react';
import styles from './fields.module.scss';
import { Skills } from './fields/skills';
import { WorkExperience } from './fields/work-experience';
import { Education } from './fields/education';
export const Fields = () => {
  const [field, setField] = useState('Skills');

  const fields = {
    Skills: <Skills />,
    Projects: null,
    'Work experience': <WorkExperience />,
    Education: <Education />,
    Tournaments: null,
  };

  return (
    <Card style={{ width: '60%' }}>
      <Flex direction='column' gap='24px' className={styles.fields_container}>
        <Flex gap='16px'>
          {Object.keys(fields).map(key => {
            const classProps = field === key ? { className: styles.selected } : {};
            return (
              <button onClick={() => setField(key)} {...classProps} key={key}>
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
        {/*хз че это но поправить*/}
        {/*{fields[field]}*/}
      </Flex>
    </Card>
  );
};
