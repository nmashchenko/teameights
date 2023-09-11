import { useEffect } from 'react';

// Updates the height of a <textarea> when the value changes.
export const useAutosize = (textAreaReference: HTMLTextAreaElement | null, value?: string) => {
  useEffect(() => {
    if (textAreaReference) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaReference.style.height = '0px';
      const { scrollHeight } = textAreaReference;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaReference.style.height = `${scrollHeight}px`;
    }
  }, [textAreaReference, value]);
};
