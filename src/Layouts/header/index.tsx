// import "antd/dist/reset.css";
import React, { useState } from "react";
import styles from "./styles.module.scss";

import {
  RightOutlined,
  LeftOutlined,
  AppstoreOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, theme, Input } from "antd";
import Link from "next/link";

const { Header, Footer, Sider } = Layout;
const { Search } = Input;
type MenuItem = Required<MenuProps>["items"][number];

export default function Head() {
  const [collapsed, setCollapsed] = useState(false);
  const onSearch = (value: string) => console.log(value);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header className={styles.nav_wraper}>
        <Link href="/App">furniture</Link>

        {/* right  */}
        <div className={styles.nav_tools}>
          <div>
            <Search placeholder="Search..." onSearch={onSearch} />
          </div>
          <div>
            <AppstoreOutlined />
          </div>
          <div>
            <BellOutlined />
          </div>
          <div>
            <SettingOutlined />
          </div>
        </div>
      </Header>
    </>
  );
}

// export default ;