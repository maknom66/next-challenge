import React from "react";
import { AppProps } from "next/app";

import { AppBar } from "~/lib/_app/AppBar/AppBar";
import { Footer } from "~/lib/_app/Footer/Footer";
import { Head } from "~/lib/_app/Head/Head";
import { StaticPropsContextProvider } from "~/lib/components/StaticPropsContextProvider";

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <StaticPropsContextProvider value={pageProps}>
        <AppBar />
        <Component {...pageProps} />
        <Footer />
      </StaticPropsContextProvider>
    </>
  );
};
