# Features

![features-themed-bordered](https://feature-sliced.design/assets/images/decompose-twitter-7b9a50f879d763c49305b3bf0751ee35.png)

## Description

Each feature is a part of the business logic, while it necessarily has meaning and value for the end user

- _`ProductList`, `OfficeMap` - can hardly be called features_
- _`WalletAddFunds`, `AddToCart` - already makes more sense for the end user_

At the same time:

- the underlying layers are used to build the logic
  - _`shared`, `entities`_
- one feature **cannot** import another
  - _If there is such a need - the dependency needs to be transferred to the layer above / below, or solved through the composition through children-props_
- features cannot be nested, but they can be combined by a common folder, i.e. structurally
  - _At the same time, you can not create intermediate files that are necessary for a specific group of features_
- _You can only use re-export files_

## Can use

`shared`, `entities`

## Structure

```sh
└── features/{slice}
          ├── lib/
          ├── model/
          ├── ui/
          └── index.tsx
```

Thus, the feature stores information about:

1. What data is needed for its operation
1. By what rules do data changes occur
1. What **entities** are needed for the complete construction of the feature
1. How the data is presented to the user

## Rules

### One feature = one functionality

The feature contains code that implements **one** useful functionality for the user.

### Structural grouping of features

Often there is a need to put together a number of somewhat related features _(at the same time, they can and should not import each other directly)_

The methodology recommends avoiding **nested features**, i.e. features that are strongly connected under a common wrapper with an additional one. by logic

Instead, the methodology suggests that, if necessary, **group the necessary features by folders** _(at the same time, you can not link these features directly, folders are only needed for structural grouping by meaning)_

```diff
features/order/            Feature group
   ├── add-to-cart         Full-fledged feature
   ├── total-info          Full-fledged feature
-  ├── model.ts            General logic for the group
-  ├── hooks.ts            General hooks for the group
   ├── index.tsx            Public API with re-export of features
```

### Features should not depend on each other

This rule is not always possible to comply with, but it is better to minimize the number of such violations.

Usually, it is precisely because of the neglect of this rule that there is a high coupling between the modules of the system and unpredictable side effects during development.

One of the ways to solve the problem is to use **entity**.

## Examples

_From the point of view of the code: not all changes for the user are `features`, but all `features` are changes for the user._

### Changing the application interface language

- `Feature` for the user and the developer.

> At the same time, the `i18n` logic itself can be used not only in this feature, but even in entities. Therefore, this should rather be placed in `shared/lib` or `shared/config`
>
> _A separate guide will be added later_

### Transfer of funds between accounts

- `Feature` for the user and the developer.

### Filter by tags

- For the user: `feature`.
- For the developer: **entity** `tags` allow you to implement a filter by tags inside `feature`.

### Hints when filling in the form fields

- For the user: `feature`.
- For the developer: part of `form` **entity**.

### Authorization by phone

```tsx title=features/auth/by-phone/ui.tsx
import { viewerModel } from "entities/viewer";

export const AuthByPhone = () => {
    return (
        // for redux - dispatch is additionally needed
        <Form onSuccess={(user) => viewerModel.setUser(user)}>
            <Form.Input
                type="phone"
                ...
            />
            <Form.Button
                ...
            />
        </Form>
    )
}
```
