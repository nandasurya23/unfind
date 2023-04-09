import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/df82hir2r/image/upload/v1681029671/xdradio/Logo_SVG_p0nim9.svg"
          type="image/x-icon"
        />
        <title>Unifind</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
