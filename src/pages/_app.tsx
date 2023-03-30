import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/container/Layout";
import { SessionProvider } from "next-auth/react";

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MainLayout>
  );
};

export default App;
