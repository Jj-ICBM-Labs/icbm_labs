import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <title>ICBM Labs</title>
        <meta property="og:title" content="ICBM Labs" key="title" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
