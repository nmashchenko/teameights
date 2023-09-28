# A guide to writing styles

## Introduction

In our project, maintaining a consistent and understandable naming convention for CSS classes is crucial for readability and maintainability of the code. We have chosen to use SCSS Modules to ensure a structured and organized styling approach, which allows us to use simplified class names due to local scoping.

## Naming Convention in SCSS Modules

With SCSS Modules, each component has its own styles file, and the class names within are simple and descriptive. The local scoping feature of SCSS Modules minimizes the risk of style conflicts across components, allowing for simpler class names compared to global styles.

#### Examples:
```scss
// ButtonGroup.module.scss
.container {
  // styles
}

.item {
  // styles

  // Modifier
  &--active {
    // styles
  }
}
```

```typescript jsx
// Usage in JSX/TSX
<div className={styles.container}>
  <button className={styles.item}>Button 1</button>
  <button className={clsx(styles.item, styles['item--active'])}>Button 2</button>
</div>
```

## Project-Specific Naming Rules

* Keep class names descriptive and concise.
* Maintain a consistent naming convention across all components.
* For modifiers and states, adhere to the BEM convention using -- for modifiers.

## Implementation with SCSS Modules

Structure your SCSS files to mirror the component structure, with a separate SCSS module for each component.

#### Examples:
```scss
// Card.module.scss
.container {
  // styles
}

.header {
  // styles
  
  // Modifier
  &--highlighted {
    // styles
  }
}

.body {
  // styles
}
```

```typescript jsx
// Usage in JSX/TSX
<div className={styles.container}>
  <div className={clsx(styles.header, styles['header--highlighted'])}>Title</div>
  <div className={styles.body}>Content</div>
</div>
```
