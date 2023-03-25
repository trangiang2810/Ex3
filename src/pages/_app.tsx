import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/container/Layout";
import { ProductContextProvider } from "../context/Context";

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <ProductContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProductContextProvider>
  );
};

export default App;
