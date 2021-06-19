[![Version](https://vsmarketplacebadge.apphb.com/version/willstakayama.vscode-nextjs-snippets.svg)](https://vsmarketplacebadge.apphb.com/version-short/willstakayama.vscode-nextjs-snippets.svg)
[![Install](https://vsmarketplacebadge.apphb.com/installs/willstakayama.vscode-nextjs-snippets.svg)](https://vsmarketplacebadge.apphb.com/installs-short/willstakayama.vscode-nextjs-snippets.svg)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/willstakayama.vscode-nextjs-snippets.svg)](https://vsmarketplacebadge.apphb.com/downloads-short/willstakayama.vscode-nextjs-snippets.svg)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/willstakayama.vscode-nextjs-snippets.svg)](https://vsmarketplacebadge.apphb.com/rating-short/willstakayama.vscode-nextjs-snippets.svg)

# VSCode NextJS React snippets for TSX and JSX

JavaScript and Typescript NextJS snippets for [VS Code](https://code.visualstudio.com/)

---

## Summary

1. [Installation](#install)
2. [Search Command](#search-cmd)
3. [Supported languages](#languages)
4. [NextJS Snippets List](#snippets-list)
5. [Core NextJS - SNIPPETS](#core-snippets)
6. [NextJS Components - SNIPPETS](#components-snippets)
7. [Imports - SNIPPETS](#imports-snippets)

---

## Installation <a name="install"></a>

### Visual Studio Marketplace

Here is direct link to marketplace [VSCode NextJS React snippets for TSX and JSX](https://marketplace.visualstudio.com/items?itemName=vscode-nextjs-snippets)

Launch _Quick Open_:

- [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf): `Ctrl+P`
- [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf): `Ctrl+P`
- [macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf): `⌘P`

Paste the following command and press `Enter`:

```shell
ext install vscode-nextjs-snippets
```

## Search command <a name="search-cmd"></a>

You can search through snippets with `snippet search` command which can be run:

- [Windows] and [Linux] `CMD + SHIFT + ALT + S`
- [maxOS] `CMD + Shift + ALT + S`

## Supported languages (file extensions) <a name="languages"></a>

- JavaScript React (.jsx)
- TypeScript React (.tsx)

## NextJS Snippets List <a name="snippets-list"></a>

|                Prefix | Method                                                                                                                                                                                                                                                |
| --------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|           `nextpage→` | Next JS Page Component and SSR                                                                                                                                                                                                                        |
|       `nextdocument→` | Custom document component Next JS                                                                                                                                                                                                                     |
|            `nextapp→` | Custom app component Next JS                                                                                                                                                                                                                          |
|   `nexterrordefault→` | If you want to render the built-in error page you can by importing the `Error`component. <b>IMPORTANT:</b> if you have a custom`Error` component be sure to import that one instead. <br/>`next/error` exports the default component used by Next.js. |
|    `nexterrorcustom→` | Custom error component Next JS. You must create a file \"\_error.js\" inside your \"pages\" folder                                                                                                                                                    |
|            `next404→` | Custom 404 page NotFound. You must create a 404.jsx file inside \"page\" folder                                                                                                                                                                       |
|            `next500→` | Custom 500 page for server-side error. You must create a 500.jsx file inside \"page\" folder                                                                                                                                                          |
|    `nextgetSSRProps→` | Async function getServerSideProps - (Server-side Rendering): Fetch data on each request.                                                                                                                                                              |
| `nextgetStaticProps→` | Async function getStaticProps - (Static Generation): Fetch data at build time.                                                                                                                                                                        |
| `nextgetStaticPaths→` | Async function getStaticPaths - (Static Generation): Specify dynamic routes to pre-render pages based on data.                                                                                                                                        |
|            `nextapi→` | Next JS simple api routes                                                                                                                                                                                                                             |
|        `nextdynamic→` | A dynamic imports is a good way to split your code into manageable chunks.                                                                                                                                                                            |
| `nextdynamicloading→` | In cases where you want to overwrite a Loading Component while using dynamic imports.                                                                                                                                                                 |
|   `nextdynamicnossr→` | In cases where you don't want import on server-side (SSR) while using dynamic imports.                                                                                                                                                                |
|           `imrouter→` | Import useRouter                                                                                                                                                                                                                                      |
|             `imlink→` | Import Next Link Component                                                                                                                                                                                                                            |
|              `imimg→` | Import Next Image Component                                                                                                                                                                                                                           |
|             `imhead→` | Import Next Head Component                                                                                                                                                                                                                            |
|            `nextimg→` | Use Next Image Component                                                                                                                                                                                                                              |
|           `nextlink→` | Use Next Link Component                                                                                                                                                                                                                               |

## Core NextJS - SNIPPETS <a name="core-snippets"></a>

### `nextpage`

```tsx
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function $1Page({
  pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageComponent {...pageComponentProps}>
      <$1PageComponent />
    </PageComponent>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      pageComponentProps,
    },
  };
}
```

### `nextgetSSRProps`

```tsx
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await $1; // your fetch function here

  return {
    props: {
      $2,
    },
  };
};
```

### `nextgetStaticPaths`

```tsx
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await $1; // your fetch function here

  return {
    paths: [
      {
        params: {
          $2,
        },
      },
    ],
    fallback: "blocking",
  };
};
```

### `nextgetStaticProps`

```tsx
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await $1; // your fetch function here

  return {
    props: {
      $2,
    },
  };
};
```

### `nextapp`

```tsx
import type { AppProps } from "next/app";

import "../styles.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
```

### `nextdocument`

```tsx
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html>
        <Head>$1</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

### `next404`

```tsx
// pages/404.tsx
export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
    </>
  );
}
```

### `next500`

```tsx
// pages/500.tsx
export default function Custom500() {
  return (
    <>
      <h1>500 - Server-side error occurred</h1>
    </>
  );
}
```

### `nextapi`

```tsx
import type { NextApiRequest, NextApiResponse } from "next";

type $1Data = {
  $2name: string;
};

export default function $3(req: NextApiRequest, res: NextApiResponse<$1Data>) {
  res.status(200).json({ $2name: "Example" });
}
```

### `nexterrorcustom`

```tsx
import { NextPageContext } from "next";

export default function Error({ statusCode }: { statusCode: number }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err, ...context }: NextPageContext) => {
  if (res) {
    return { statusCode: res.statusCode };
  }
  return { statusCode: err ? err.statusCode : 400 };
};
```

### `nexterrordefault`

```tsx
import Error from "next";

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const errorCode = res.ok ? false : res.statusCode;
  const json = await res.json();

  return {
    props: { errorCode, stars: json.stargazers_count },
  };
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return <div>Next stars: {stars}</div>;
}
```

## NextJS Components - SNIPPETS <a name="components-snippets"></a>

### `nextdynamic`

```tsx
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/Component"));
```

### `nextdynamicloading`

```tsx
import dynamic from "next/dynamic";

const DynamicComponentWithCustomLoading = dynamic(
  () => import("../components/Component"),
  { loading: () => <p>My Custom Loading</p> }
);
```

### `nextdynamicnossr`

```tsx
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Component"),
  { ssr: false }
);
```

### `nextimage`

```tsx
<Image width={$1} height={$1} objectFit="cover" src={$2} alt="$3" />
```

### `nextlink`

```tsx
<Link href="$1">
  <a>$2</a>
</Link>
```

## Imports - SNIPPETS <a name="imports-snippets"></a>

### `imrouter`

```tsx
import { useRouter } from "next/router";
```

### `imimg`

```tsx
import Image from "next/image";
```

### `imlink`

```tsx
import Link from "next/link";
```

### `imhead`

```tsx
import Head from "next/head";
```
