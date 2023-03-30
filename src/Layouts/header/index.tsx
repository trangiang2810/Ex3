import { signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import styles from "./styles.module.scss";

import {
  AppstoreOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, theme, Input } from "antd";
import Link from "next/link";

const { Header } = Layout;
const { Search } = Input;
type MenuItem = Required<MenuProps>["items"][number];

export default function Head() {
  const onSearch = (value: string) => console.log(value);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header className={styles.nav_wraper}>
        <Link href="/">furniture</Link>

        {/* right  */}
        <div className={styles.nav_tools}>
          <div className={styles.search}>
            <Search placeholder="Search..." onSearch={onSearch} />
          </div>
          <div className={styles.icon}>
            <AppstoreOutlined />
          </div>
          <div className={styles.icon}>
            <BellOutlined />
          </div>
          <button
            className={styles.btnLogin}
            onClick={() => {
              signIn();
            }}
          >
            Login
          </button>
          <button className={styles.btnSignOut} onClick={() => signOut()}>
            SignOut
          </button>
        </div>
      </Header>
    </>
  );
}

// export default ;
