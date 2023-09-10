# Entities

![entities-themed-bordered](https://feature-sliced.design/assets/images/decompose-twitter-7b9a50f879d763c49305b3bf0751ee35.png)

## Description

There are usually placed:

- business entities, for building the business logic of the application
  > _For example: `user`, `order`, `post`, `journal`, `navigation`, ..._
- components with the representation of entities, for building the UI of the overlying layers
  > _For example: `UserCard`, `TweetCard`, ..._

## Can use

`shared`

## Structure

```sh
└── entities/{slice}
          ├── lib/
          ├── model/
          ├── ui/
          └── index.ts
```

## Examples

### Using the Entity Model

```tsx title=**/**/index.ts
import { viewerModel } from "entities/viewer";

export const Wallet = () => {
    const viewer = viewerModel.useViewer();
    const { moneyCount } = viewer;

    ...
}
```

### Using Entity components

```ts title=entities/book/index.ts
export { BookCard, ... } from "./ui";
export * as bookModel from "./model";
```

```tsx title=pages/**/index.ts
import { BookCard } from "entities/book";

export const CatalogPage = () => {
    const bookQuery = ...;
    return (
        ...
        {bookQuery.map((book) => (
            <BookCard key={book.id} data={book} />
        ))}
        ...
    )
}
```
