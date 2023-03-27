import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/container/Layout";
import { ProductContextProvider } from "../context/Context";
import { SessionProvider } from "next-auth/react";

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <ProductContextProvider>
      <MainLayout>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MainLayout>
    </ProductContextProvider>
  );
};

export default App;
