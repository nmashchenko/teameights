import clsx from 'clsx';
import { FC, TextareaHTMLAttributes, useRef } from 'react';
import { useAutosize } from './lib';
import styles from './styles.module.scss';

type CounterPosition = 'top' | 'bottom';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  counterPosition?: CounterPosition;
  maxWidth?: string;
  value?: string;
}

export const TextArea: FC<TextAreaProps> = ({
  className,
  label,
  maxLength = 230,
  placeholder,
  name,
  counterPosition = 'bottom',
  value,
  maxWidth,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosize(textAreaRef.current, value);

  const LetterCounter = () => {
    if (!value) return null;

    return (
      <span className={styles.counter}>
        {value.length}/{maxLength}
      </span>
    );
  };

  return (
    <div className={clsx(styles.container, {}, [className])} style={{ maxWidth: maxWidth }}>
      <div className={styles.label__wrapper}>
        <label className={styles.label}>{label}</label>
        {counterPosition === 'top' && <LetterCounter />}
      </div>
      <textarea
        name={name}
        maxLength={maxLength}
        className={styles.textarea}
        placeholder={placeholder}
        ref={textAreaRef}
        value={value}
        {...props}
      />
      {counterPosition === 'bottom' && <LetterCounter />}
    </div>
  );
};
