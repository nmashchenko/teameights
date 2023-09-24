# Storybook documentation

## Introduction to Storybook

Storybook is a powerful tool for developing and showcasing components in isolation. It allows developers to create "stories" which are visual representations of components with various props applied. This is especially useful for testing different states of a component, and for sharing the component's states with others.

In the project, storybooks are described for each component.
Requests to the server are mocked with storybook-addon-mock.

## Getting Started

To launch Storybook, run the following command in your project directory:

```bash
npm run storybook
```

This will start the Storybook server and open the Storybook UI in your web browser, where you can browse and interact with your project's components.

## Creating a Story

Stories are written in .stories.tsx files, and are usually located alongside the component files they relate to. Here's how you can create a story for a component:

1. **Create a new file** with the extension `.stories.tsx` next to the component file.
2. **Import necessary dependencies** including React, Storybook APIs, the component itself, and any other dependencies your component relies on.
3. **Define default props** if necessary, to create a standardized representation of your component.
4. **Define a template for your story** using the `StoryObj` type, and rendering your component with any args passed to it.
5. **Create and export your stories** by creating objects with a `render` method, and spreading the template into those objects.
6. **Define and export meta information** about your stories, such as the component, title, and argTypes, which define the controls in the Storybook UI.

## Example

##### Replace placeholders such as `YourComponent`, `your-component`, `Path/To/YourComponent`, and `// ...` with the actual names, paths, and values relevant to the component you are documenting

Below is an example story for a hypothetical YourComponent component:

```typescript jsx
import React from 'react';
import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { YourComponent, YourComponentProps } from './your-component';
import { SomeDependency } from '@/shared/assets';

// Default props for YourComponent
const yourComponentProps: YourComponentProps = {
  // ...default props
};

// Defining meta information for Storybook
type Story = StoryObj<typeof YourComponent>;
const YourComponentTemplate: Story = { render: args => <YourComponent {...args} /> };

export const Playground = { ...YourComponentTemplate };
Playground.args = yourComponentProps;

// Additional stories can go here

// Export meta information
const yourComponentArgTypes: ArgTypes = {
  // ...arg types
};

export default {
  title: 'Path/To/YourComponent',
  component: YourComponent,
  argTypes: yourComponentArgTypes,
} as Meta;
```

## JSDoc in Storybook

It is also possible to use JSDoc features that will be displayed in the storybook.

## Example:

```typescript jsx
import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';

import styles from './ComponentName.module.scss';

export interface ComponentNameProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Description for prop1.
   */
  prop1: PropType1;
  /**
   * Description for prop2.
   */
  prop2: PropType2;
  // ... additional prop descriptions
}

/**
 * Description for ComponentName.
 *
 * Show example:
 * 
 * ```tsx
 * import { ComponentName } from './ComponentName';
 *
 * <ComponentName
 *   prop1={value1}
 *   prop2={value2}
 *   // ... additional prop values
 * />
 * `` `
*/
export const ComponentName: React.FC<ComponentNameProps> = props => {
  const { prop1, prop2, ...rest } = props;
  
  return (
    <Element {...rest}>
      // ... component implementation
    </Element>
  );
};
```

## Additional Resources

- [Official Storybook Documentation](https://storybook.js.org/docs/react/get-started/install)
- [Auto docs in storybook](https://storybook.js.org/docs/react/writing-docs/autodocs)
- [storybook-addon-mock Documentation](https://www.npmjs.com/package/storybook-addon-mock)
