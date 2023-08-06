# 🚀 Breaking Changes: Frontend Update 🚀

## Stack Changes 💻

### New Technology Stack 🛠️

We have introduced a new technology stack to enhance our frontend development workflow, including:

- **Redux Toolkit**: Simplifies Redux code and accelerates development. ![Redux Logo](https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png)
- **RTK Query**: Automatically manages our API cache, simplifying data fetching logic. ![RTK Query Logo](https://raw.githubusercontent.com/rtk-incubator/rtk-query/main/logo.png)
- **TypeScript**: Provides strong typing, improving code quality and maintainability. ![TypeScript Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png)
- **React Hook Forms**: Offers better performance and more concise code for forms. ![React Hook Forms Logo](https://react-hook-form.com/images/logo/react-hook-form-logo-only.png)
- **Storybook**: Enables the development of UI components in isolation. ![Storybook Logo](https://static-00.iconduck.com/assets.00/storybook-icon-icon-412x512-341bo8r1.png)
- **Jest**: Ensures that all components work as intended by allowing for comprehensive testing. ![Jest Logo](https://assets.stickpng.com/images/62a765c8bd73a4af5c5d4fbc.png)
- **Styled-components**: Helps in writing CSS that's scoped to a single component, enhancing the styling workflow. ![Styled-components Logo](https://www.cdnlogo.com/logos/s/10/styled-components.svg)
- **Next.js**: Provides a framework for server-rendered React applications, improving performance and SEO. ![Next.js Logo](https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs)

### Old Technology Stack 📜

Previously, our technology stack consisted of:

- React
- JavaScript (JS)
- Formik
- Tanstack Query
- Redux Toolkit

### Why the New Stack? 🌟

The new stack offers several advantages over the old one:

- **Efficiency**: Using TypeScript, Redux Toolkit with RTK Query, and Next.js simplifies development, offering better performance and SEO benefits.
- **Robustness**: Strong typing with TypeScript and comprehensive testing with Jest make the codebase more stable.
- **Usability**: React Hook Forms and Styled-components offer a more intuitive way of handling forms and styling.
- **Flexibility**: Storybook allows us to build components in isolation, accelerating the development process.

## FSD (Feature Slice Design) Architecture 🏗️

We are adopting the FSD (Feature Slice Design) architecture, which brings numerous benefits:

- **Enhanced Modularity**: Features are divided into slices, making the codebase easier to navigate and maintain. 🔍
- **Better Scalability**: Slices can be developed and tested independently, improving scalability. 📈
- **Improved Reusability**: Shared logic and components can be reused across different features. ♻️

### Examples of Usage 🧩

1. **Authentication Slice**: All logic related to authentication can be placed in a single slice, containing actions, reducers, selectors, and UI components related to user login and registration.
2. **Product Slice**: Product-related logic can be organized into a separate slice, containing actions, reducers, selectors, and UI components related to product display and management.

### Positive Sides Compared to Non-Architecture Approach ✅

The FSD architecture contrasts with the non-architecture approach in several key ways:

- **Structure**: FSD organizes code into meaningful slices, enhancing readability, and maintainability. Traditional non-architecture approaches may lead to a more chaotic and intertwined codebase. 📑
- **Development Speed**: With clear boundaries and responsibilities, developers can work on different slices simultaneously, reducing development time. ⏱️
- **Testing**: Slices can be tested independently, making it easier to isolate and fix bugs. Non-architecture approaches may result in more complex testing scenarios. 🧪

By embracing the FSD architecture, we're introducing a systematic, organized, and efficient way to develop our frontend code, resulting in a more maintainable and robust product. 🚀

## Personal Toolkit & Optimization 🧰

We will develop our personal toolkit with shared components to ensure reusability across the project. This approach emphasizes optimization, minimizing unnecessary renders, and boosting performance. 📈

## Testing, Stories & Linter Checks 🧪

- **Testing**: All new components will be thoroughly tested using Jest to ensure quality. 🧪
- **Stories**: Storybook will be used to automate the flow, facilitating collaboration and reducing manual effort. 📚
- **Linter Checks**: All code will undergo linter checks, adhering to our coding standards and ensuring consistency. ✔️

---

By embracing these changes, we are positioning ourselves to deliver a more robust, efficient, and maintainable codebase. It represents a significant evolution in our development approach, providing the tools and practices to build better products faster. ✨

For any questions or further details, please consult the updated documentation or contact the development team. 📧
