import { Flex, Typography } from '@/shared/ui';
import { useState, useEffect } from 'react';

import styles from './select-fields.module.scss';
import { IOptionItem } from '@/widgets/search/types';
import { Search } from '../ui/shared';
import { useFormContext } from 'react-hook-form';
import { fields } from './fields';

const MAX_LANGS = 8;

interface SelectFieldsProps {
  fieldsName: keyof typeof fields;
  fieldsList: { value: string; label: string }[];
  recommendedList: { value: string; label: string }[];
  formName: string;
}

export const SelectFields = ({
  recommendedList,
  fieldsName,
  fieldsList,
  formName,
}: SelectFieldsProps) => {
  const {
    component: FieldComponent,
    placeholder: Placeholder,
    containerClass,
    selectedContainerClass,
    selected: SelectedField,
  } = fields[fieldsName];
  const [text, setText] = useState('');
  const { setValue, getValues } = useFormContext();

  const [selectedFields, setFields] = useState<IOptionItem[]>(getValues()[formName] ?? []);

  useEffect(() => {
    setValue(String(formName), selectedFields);
  }, [selectedFields, formName, getValues, setValue]);

  function toggleField(Field: IOptionItem) {
    setFields(prev => {
      let index = -1;
      const appearedLang = Array.from(prev as IOptionItem[]).find((lang, i) => {
        index = i;
        return lang.value === Field.value;
      });
      if (appearedLang) {
        return prev.slice(0, index).concat(prev.slice(index + 1));
      } else {
        if (prev.length === MAX_LANGS) return prev;
        return [...prev, Field];
      }
    });
  }

  function filterBySearch(item: IOptionItem) {
    const trimmedText = text.trim().toLowerCase();
    return (
      item.label.toLowerCase().includes(trimmedText) ||
      item.value.toLowerCase().includes(trimmedText)
    );
  }

  return (
    <Flex width='100%' height='100%' direction='column'>
      <div className={styles.fields}>
        <div className={styles.top}>
          <div className={styles.selected_fields}>
            <div className={selectedContainerClass}>
              {Array(8)
                .fill(null)
                .map((_, index) => {
                  const FieldsItem = selectedFields[index];
                  if (FieldsItem) {
                    return (
                      <div key={index} onClick={() => toggleField(FieldsItem)}>
                        <SelectedField key={index} isActive={true} data={FieldsItem.label} />
                      </div>
                    );
                  }
                  return <Placeholder key={index} />;
                })}
            </div>
          </div>
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
        </div>
        <div className={styles.fields_list}>
          {recommendedList.length > 0 && text === '' && (
            <div className={styles.recommended}>
              <Typography size='body_s' color='greyNormal'>
                Recommended for you
              </Typography>

              <div className={containerClass}>
                {recommendedList.filter(filterBySearch).map((lang, index) => (
                  <FieldComponent
                    isActive={Boolean(selectedFields.find(option => option.label === lang.label))}
                    data={lang.label}
                    key={index}
                    onClick={() => toggleField(lang)}
                  />
                ))}
              </div>
            </div>
          )}
          <div className={styles.recommended}>
            <Typography size='body_s' color='greyNormal'>
              All Fields
            </Typography>
            <div className={containerClass}>
              {fieldsList.filter(filterBySearch).map((lang, index) => (
                <FieldComponent
                  isActive={Boolean(selectedFields.find(option => option.label === lang.label))}
                  onClick={() => toggleField(lang)}
                  data={lang.label}
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
