import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/container/Layout";
import { SessionProvider } from "next-auth/react";
import { DarkModeProvider } from "@/contexts/Context";

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <DarkModeProvider>
      <MainLayout>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MainLayout>
    </DarkModeProvider>
  );
};

export default App;
