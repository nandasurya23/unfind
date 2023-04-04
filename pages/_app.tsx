import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/df82hir2r/image/upload/v1680536221/xdradio/unifind/Logo_obqj9h.svg"
          type="image/x-icon"
        />
        <title>Unifind</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
