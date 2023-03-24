import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/Layouts/Layout";

// const App: React.FC = ({ Component, pageProps }: AppProps) => (
//   return (
//     <La>
//       <Component {...pageProps} />
//     </La>
//   );
// );

// export default App;

const App: React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
