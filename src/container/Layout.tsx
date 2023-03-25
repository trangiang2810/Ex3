import Sidebar from "../Layouts/sidebar";
import Head from "../Layouts/header";
import React, { ReactNode } from "react";
import { Layout } from "antd";
import Foot from "../Layouts/footer";
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
