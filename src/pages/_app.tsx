import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { ConfigCatProvider, PollingMode } from "configcat-react";

const sdkKey = process.env.NEXT_PUBLIC_CONFIG_CAT_API_KEY;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigCatProvider
      sdkKey={sdkKey as string}
      pollingMode={PollingMode.AutoPoll}
      options={{ pollIntervalSeconds: 95 }}
    >
      <ChakraProvider>
        <Head>
          <title>Ant Builder</title>
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </ConfigCatProvider>
  );
}
