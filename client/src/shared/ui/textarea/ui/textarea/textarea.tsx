'use client';
import clsx from 'clsx';
import { FC, TextareaHTMLAttributes, useRef } from 'react';
import { useAutosize } from '../../lib/use-autosize';
import styles from './textarea.module.scss';

/**
 * TextArea Component
 *
 * A customizable textarea component with autosize capabilities and an optional character counter.
 *
 * Props:
 *
 * @prop {string} label - The label associated with the textarea.
 * @prop {('top' | 'bottom')} counterPosition - Determines the position of the character counter (either above or below the textarea). Default is 'bottom'.
 * @prop {string} maxWidth - The maximum width of the textarea container.
 * @prop {string} value - The current value of the textarea.
 * @prop {...TextareaHTMLAttributes<HTMLTextAreaElement>} props - Any other properties valid for a native textarea element.
 *
 * Usage:
 *
 * ```tsx
 * import { TextArea } from 'path-to-textarea-component';
 *
 * <TextArea
 *   label="Description"
 *   counterPosition="top"
 *   maxLength={300}
 *   placeholder="Enter description here..."
 *   value={description}
 *   onChange={(e) => setDescription(e.target.value)}
 * />
 * ```
 *
 * Note:
 * - The component uses the `useAutosize` hook to auto-resize the textarea based on its content.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are properly set in the SCSS file.
 * - The component uses the `maxLength` prop to restrict the maximum number of characters and display them in the character counter.
 * - The character counter displays the format "currentCount/maxLength".
 *
 * Styling:
 * You can customize the appearance of the textarea and the character counter using the 'styles.module.scss' file.
 *
 * Accessibility:
 * - The component uses native `<textarea>` for text input to ensure good accessibility.
 * - An associated label can be provided for accessibility and usability.
 *
 * Dependencies:
 * - The component depends on the `useAutosize` hook to manage the resizing of the textarea.
 * - The component uses `clsx` for conditional class joining.
 */

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
