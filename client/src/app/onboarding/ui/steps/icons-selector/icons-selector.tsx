import { Flex } from '@/shared/ui';
import { FC, useState } from 'react';
import { Search } from '../../shared/search/search';
import styles from './icons-selector.module.scss';
import { useFormContext } from 'react-hook-form';
import { Placeholders } from '@/app/onboarding/ui/steps/icons-selector/ui/placeholders/placeholders';
import { Options } from '@/app/onboarding/ui/steps/icons-selector/ui/options/options';
import { IOption } from '@/shared/interfaces';

const MAX_ICONS = 8;

interface IconsSelector {
  icons: IOption[];
  // recommendedIcons?: IRoleToOptionsMap;
  formFieldToUpdate: string;
  description: string;
  type?: 'text' | 'icon';
}

export const IconsSelector: FC<IconsSelector> = ({
  icons,
  // recommendedIcons,
  formFieldToUpdate,
  description,
  type = 'icon',
}) => {
  const [text, setText] = useState('');
  const {
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const selectedIcons: IOption[] = watch(formFieldToUpdate);

  function toggleIcon(clickedIcon: IOption) {
    clearErrors(formFieldToUpdate);
    const check = selectedIcons.find(icon => icon.label === clickedIcon.label);

    if (!check) {
      selectedIcons.length < MAX_ICONS &&
        setValue(formFieldToUpdate, [...selectedIcons, clickedIcon]);
    } else {
      const filtered = selectedIcons.filter(icon => icon.label !== clickedIcon.label);
      setValue(formFieldToUpdate, filtered);
    }
  }

  function filterBySearch(item: IOption) {
    const trimmedText = text.trim().toLowerCase();
    return (
      item.label.toLowerCase().includes(trimmedText) ||
      item.value.toLowerCase().includes(trimmedText)
    );
  }

  return (
    <Flex width='100%' direction='column' padding='36px 0'>
      <Placeholders
        selectedIcons={selectedIcons}
        toggleIcon={toggleIcon}
        type={type}
        error={errors[formFieldToUpdate]?.message as string}
      />
      <div className={styles.search}>
        <Flex>
          <Search
            placeholder='Search'
            defaultValue={text}
            onChange={e => {
              return setText(e);
            }}
          />
        </Flex>
      </div>
      <Flex direction='column' gap='8px'>
        <Options
          icons={icons}
          selectedIcons={selectedIcons}
          type={type}
          filterFn={filterBySearch}
          toggleFn={toggleIcon}
          description={description}
        />
      </Flex>
    </Flex>
  );
};
