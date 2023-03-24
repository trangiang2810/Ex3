import Sidebar from "./sidebar";
import Head from "./header";
import React, { ReactNode } from "react";
import { Layout } from "antd";
import Foot from "./footer";
type Props = {
  children: ReactNode;
};

const MainLayout: any = ({ children }: Props) => (
  <Layout>
    <Sidebar />
    <Layout>
      <Head />
      {children}
      <Foot />
    </Layout>
  </Layout>
);

export default MainLayout;
