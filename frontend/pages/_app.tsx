import theme from "theme";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { LayoutContextProvider } from "context/layoutContext";
import Header from "layout/header";
import SideBar from "layout/sidebar";
import "styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import type { AppProps } from "next/app";

export const client = new ApolloClient({
  uri: "http://localhost:55438",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return (
    <LayoutContextProvider>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <SideBar />
          <div className="mainContent">
            <Header />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </ApolloProvider>
    </LayoutContextProvider>
  );
}

export default MyApp;
