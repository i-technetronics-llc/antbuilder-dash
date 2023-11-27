import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Ant Builder</title>
        {/* <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        /> */}
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
