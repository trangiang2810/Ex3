import Sidebar from "./sidebar";
import Head from "./header";
import React from "react";
import { Layout } from "antd";
import Foot from "./footer";

const MainLayout: React.FC = ({ children }) => (
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
