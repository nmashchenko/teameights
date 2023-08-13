import clsx from 'clsx';
import { FC, TextareaHTMLAttributes, useRef } from 'react';
import styles from './TextArea.module.scss';
import useAutosizeTextArea from './useAutosizeTextArea';

type CounterPosition = 'top' | 'bottom';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  maxLength?: number;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  counterPosition?: CounterPosition;
  maxWidth?: string;
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

  useAutosizeTextArea(textAreaRef.current, value);

  const LetterCounter = () => (
    <span className={styles.counter}>
      {value.length}/{maxLength}
    </span>
  );

  return (
    <div
      className={clsx(styles.TextArea, {}, [className])}
      style={{ maxWidth: maxWidth }}
    >
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
