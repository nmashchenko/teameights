# 🚀 Breaking Changes: Frontend Update 🚀

## Stack Changes 💻

### New Technology Stack 🛠️

We have introduced a new technology stack to enhance our frontend development workflow, including:

- **Redux Toolkit**: Simplifies Redux code and accelerates development. ![Redux Logo](![Alt text](image.png))
- **RTK Query**: Automatically manages our API cache, simplifying data fetching logic. ![RTK Query Logo](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/5186775737696256/image/download/6611525209948160)
- **TypeScript**: Provides strong typing, improving code quality and maintainability. ![TypeScript Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png)
- **React Hook Forms**: Offers better performance and more concise code for forms. ![React Hook Forms Logo](https://react-hook-form.com/images/logo/react-hook-form-logo-only.png)
- **Storybook**: Enables the development of UI components in isolation. ![Storybook Logo](https://static-00.iconduck.com/assets.00/storybook-icon-icon-412x512-341bo8r1.png)
- **Jest**: Ensures that all components work as intended by allowing for comprehensive testing. ![Jest Logo](https://assets.stickpng.com/images/62a765c8bd73a4af5c5d4fbc.png)
- **CSS-Modules + SASS**: A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. ![Styled-components Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--fmg7rAhn--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://cl.ly/2t460f1X081o/Image%25202018-06-14%2520at%25208.12.28%2520PM.png)
- **Next.js**: Provides a framework for server-rendered React applications, improving performance and SEO. ![Next.js Logo](https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs)

### Old Technology Stack 📜

Previously, our technology stack consisted of:

- React
- JavaScript (JS)
- Formik
- Tanstack Query
- Redux Toolkit
- Styled Components

### Why the New Stack? 🌟

The new stack offers several advantages over the old one:

- **Efficiency**: Using TypeScript, Redux Toolkit with RTK Query, and Next.js simplifies development, offering better performance and SEO benefits.
- **Robustness**: Strong typing with TypeScript and comprehensive testing with Jest make the codebase more stable.
- **Usability**: React Hook Forms and Styled-components offer a more intuitive way of handling forms and styling.
- **Flexibility**: Storybook allows us to build components in isolation, accelerating the development process.

## FSD (Feature Slice Design) Architecture 🏗️

![FSD](https://raw.githubusercontent.com/feature-sliced/documentation/master/static/img/banner.jpg)
We are adopting the FSD (Feature Slice Design) architecture, which brings numerous benefits:

- **Enhanced Modularity**: Features are divided into slices, making the codebase easier to navigate and maintain. 🔍
- **Better Scalability**: Slices can be developed and tested independently, improving scalability. 📈
- **Improved Reusability**: Shared logic and components can be reused across different features. ♻️

### Examples of Usage 🧩

1. **Authentication Slice**: All logic related to authentication can be placed in a single slice, containing actions, reducers, selectors, and UI components related to user login and registration.
2. **Product Slice**: Product-related logic can be organized into a separate slice, containing actions, reducers, selectors, and UI components related to product display and management.

![Arch](https://feature-sliced.design/assets/ideal-img/visual_schema.b6c18f6.1030.jpg)

![Example](https://feature-sliced.design/assets/images/decompose-github-a0eeb839a4b5ef5c480a73726a4451b0.jpg)

### Positive Sides Compared to Non-Architecture Approach ✅

The FSD architecture contrasts with the non-architecture approach in several key ways:

- **Structure**: FSD organizes code into meaningful slices, enhancing readability, and maintainability. Traditional non-architecture approaches may lead to a more chaotic and intertwined codebase. 📑
- **Development Speed**: With clear boundaries and responsibilities, developers can work on different slices simultaneously, reducing development time. ⏱️
- **Testing**: Slices can be tested independently, making it easier to isolate and fix bugs. Non-architecture approaches may result in more complex testing scenarios. 🧪

By embracing the FSD architecture, we're introducing a systematic, organized, and efficient way to develop our frontend code, resulting in a more maintainable and robust product. 🚀

## Personal Toolkit & Optimization 🧰

We will develop our personal toolkit with shared components to ensure reusability across the project. This approach emphasizes optimization, minimizing unnecessary renders, and boosting performance. 📈

## Git Semantic Commits 🧠

We are adopting Git Semantic Commits, a practice that standardizes our Git commit messages to make them more human-readable and easier to follow. This will enhance collaboration and help us keep a clean and informative commit history. 📘

### New Git Commands 🛠️

We've introduced 8 new Git commands to standardize our commit messages:

1. **Feature Commits**:

   - **Command**: `git feat "commit message here"`
   - **Equivalent**: `git commit -m 'feat: commit message here'`
   - **Usage**: For introducing new features. 🌟

2. **Documentation Commits**:

   - **Command**: `git docs "commit message here"`
   - **Equivalent**: `git commit -m 'docs: commit message here'`
   - **Usage**: For updating documentation. 📝

3. **Chore Commits**:

   - **Command**: `git chore "commit message here"`
   - **Equivalent**: `git commit -m 'chore: commit message here'`
   - **Usage**: For routine tasks and maintenance. ⚙️

4. **Fix Commits**:

   - **Command**: `git fix "commit message here"`
   - **Equivalent**: `git commit -m 'fix: commit message here'`
   - **Usage**: For bug fixes. 🐛

5. **Refactor Commits**:

   - **Command**: `git refactor "commit message here"`
   - **Equivalent**: `git commit -m 'refactor: commit message here'`
   - **Usage**: For code refactoring. 🔧

6. **Style Commits**:

   - **Command**: `git style "commit message here"`
   - **Equivalent**: `git commit -m 'style: commit message here'`
   - **Usage**: For code styling changes. 🎨

7. **Test Commits**:

   - **Command**: `git test "commit message here"`
   - **Equivalent**: `git commit -m 'test: commit message here'`
   - **Usage**: For adding or updating tests. 🧪

8. **Localization Commits**:
   - **Command**: `git localize "commit message here"`
   - **Equivalent**: `git commit -m 'localize: commit message here'`
   - **Usage**: For localization and internationalization adjustments. 🌍

By adopting these standardized commit practices, we aim to maintain a clear and meaningful commit history, facilitating effective collaboration and understanding within our development team. 🚀

## Testing, Stories & Linter Checks 🧪

- **Testing**: All new components will be thoroughly tested using Jest to ensure quality. 🧪
- **Stories**: Storybook will be used to automate the flow, facilitating collaboration and reducing manual effort. 📚
- **Linter Checks**: All code will undergo linter checks, adhering to our coding standards and ensuring consistency. ✔️

## Repository Structure 🏢

In alignment with our evolving technology stack, we are introducing changes to our repository structure to ensure smooth development and maintenance.

### Two Development Branches 🌳

We will now have two development branches:

1. **`dev`**: This branch will continue to contain the old code, allowing us to maintain our existing functionality. It will be used for regular development, bug fixes, and enhancements related to the old stack.
2. **`dev-nextjs`**: This branch will contain the new code built with the updated technology stack, including Next.js. It will be the main development branch for all new features and updates related to the new stack.

### Branch Naming Conventions 🏷️

To differentiate between the two development branches and avoid confusion, we have introduced specific naming conventions:

- Branches related to the current main development (`dev`) should be named regularly. For example, `feature/user-profile`.
- Branches related to the new development (`dev-nextjs`) must have `-nextjs` at the end of the name. For example, `feature/user-profile-nextjs`.

### Why This Structure? 🧩

- **Clarity**: Having separate branches for the old and new codebases helps in clearly distinguishing between the two, reducing confusion.
- **Synchronization**: This structure allows us to keep all code in one place, facilitating easy synchronization with the backend across both branches.
- **Transition**: As we gradually move towards the new technology stack, having two distinct branches ensures a smooth transition without disrupting ongoing development.

This approach represents our commitment to a well-organized and efficient development workflow. By adopting this structure, we are setting the stage for a successful implementation of our new technology stack, while maintaining flexibility and control. 💪

---

By embracing these changes, we are positioning ourselves to deliver a more robust, efficient, and maintainable codebase. It represents a significant evolution in our development approach, providing the tools and practices to build better products faster. ✨

For any questions or further details, please consult the updated documentation or contact the development team. 📧

## Package manager 🧰

YARN will be forced to use across the app, any adds of packages, installs and other are required to be done via YARN. YARN is also used for vercel deployments.

We are using yarn stable version:

```
yarn set version stable
```

Stable is used to prevent all isues with storybook/etc.
