import { Flex } from '@/shared/ui';
import { FC, useState } from 'react';
import { Search } from '../../shared/search/search';
import styles from './icons-selector.module.scss';
import isEmpty from 'lodash.isempty';
import { useFormContext } from 'react-hook-form';
import { Placeholders } from '@/app/onboarding/ui/steps/icons-selector/ui/placeholders/placeholders';
import { Options } from '@/app/onboarding/ui/steps/icons-selector/ui/options/options';
import { IOption, IRoleToOptionsMap } from '@/shared/interfaces';

const MAX_ICONS = 8;

interface IconsSelector {
  icons: IOption[];
  recommendedIcons?: IRoleToOptionsMap;
  formFieldToUpdate: string;
  description: string;
  type?: 'text' | 'icon';
}

export const IconsSelector: FC<IconsSelector> = ({
  icons,
  recommendedIcons,
  formFieldToUpdate,
  description,
  type = 'icon',
}) => {
  const [text, setText] = useState('');
  const { setValue, watch } = useFormContext();

  const selectedIcons: IOption[] = watch(formFieldToUpdate);
  const focus: string = watch('focus');

  function toggleIcon(clickedIcon: IOption) {
    const check = selectedIcons.find(icon => icon.label === clickedIcon.label);

    if (!check) {
      selectedIcons.length < 8 && setValue(formFieldToUpdate, [...selectedIcons, clickedIcon]);
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
      <Placeholders selectedIcons={selectedIcons} toggleIcon={toggleIcon} type={type} />
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
      <Flex direction='column' gap='24px'>
        {text === '' && !isEmpty(recommendedIcons) && (
          <Options
            icons={recommendedIcons[focus] ?? []}
            selectedIcons={selectedIcons}
            type={type}
            filterFn={filterBySearch}
            toggleFn={toggleIcon}
            description='Recommended for you'
          />
        )}
        <Options
          className={styles.all_icons}
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
