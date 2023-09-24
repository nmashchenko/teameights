# App

![app-themed-bordered](https://feature-sliced.design/assets/images/decompose-github-a0eeb839a4b5ef5c480a73726a4451b0.jpg)

## Description

In terms of NextJS App and Pages folders are reserved for building routing system so we are going to use App (as recommended)

There are usually placed (in non-nextjs env):

- initialization of processes and other background logic
- initialization of providers, wrappers
- connecting global application styles

**The methodology does not yet regulate the content of this layer in any way, so it depends on the specific project**

## Can use

`shared`, `entities`, `features`, `widgets`, `pages`, `processes`

## Examples

### Initializing the router

```tsx title=app/providers/withRouter.tsx
export const withRouter = (component: Component) => () => (
  <Router>
    <Suspense fallback={<Spin overlay />}>
      <QueryParamProvider ReactRouterRoute={Route}>{component()}</QueryParamProvider>
    </Suspense>
  </Router>
);
```

### Initializing external libraries

```tsx title=app/providers/withAntd.tsx
export const withAntd = (component: Component) => () => (
    <ConfigProvider getPopupContainer={...}>
        {component()}
    </ConfigProvider>
);
```

```tsx title=app/providers/withApollo.tsx
const client = new ApolloClient({ ... });

export const withApollo = (component: Component) => () => (
    <ApolloProvider client={client}>
        {component()}
    </ApolloProvider>
);
```

### Enabling initialization

_Only one of the methods is shown here, if you use HOC for providers and logic initialization_

```tsx title=app/providers/index.ts
import compose from "compose-function";
import { withRouter } from "./with-router";
import { withAntd } from "./with-antd";
...

// 1. The compose library is often exported from some dependencies that you already use
// e.g.: `import { compose } from "redux"`
// 2. It is worth considering the order of HOCs connection
// e.g.: withHOC2 cannot be started until there is a wrapper withHOC1, etc.
export const withProviders = compose(withRouter, withAntd,...);
```

```tsx title=app/index.ts
import { withProviders } from "./providers";
...

const App = () => { ... }

export default withProviders(App);
```
