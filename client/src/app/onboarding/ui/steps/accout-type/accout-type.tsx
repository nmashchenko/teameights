import { Flex, Typography } from '@/shared/ui';
import { SelectableBlock } from '../../shared';
import styles from './account-type.module.scss';
import Image from 'next/image';
import { accountTypes } from '@/app/onboarding/ui/steps/accout-type/account-types';
import { useState } from 'react';

export const AccountType = () => {
  const [selectedType, setSelectedType] = useState('');
  return (
    <Flex direction='column' gap='32px' width='100%' maxWidth='470px'>
      <Flex direction='column' className={styles.align_text}>
        <Typography size='heading_m' color='white'>
          I’d like to join the platform as...
        </Typography>
      </Flex>
      <Flex gap='24px'>
        {accountTypes.map(accountType => (
          <SelectableBlock
            text={accountType.name}
            onClick={() => setSelectedType(accountType.name)}
            selected={accountType.name === selectedType}
            key={accountType.name}
          >
            <Image src={accountType.image} alt={accountType.name} width={48} height={48} />
          </SelectableBlock>
        ))}
      </Flex>
    </Flex>
  );
};
