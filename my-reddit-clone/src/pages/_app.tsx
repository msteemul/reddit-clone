import type { AppProps } from "next/app";
import * as React from "react";
import { theme } from "./chakra/theme";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/layout/layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
