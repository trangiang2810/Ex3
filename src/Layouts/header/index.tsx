import { signIn, signOut } from "next-auth/react";
import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { BellOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, theme, Input } from "antd";
import Link from "next/link";
import { ShoppingCartContext } from "@/contexts/ShoppingContext";

const { Header } = Layout;
const { Search } = Input;
type MenuItem = Required<MenuProps>["items"][number];

export default function Head() {
  const { cartQuantity }: any = useContext(ShoppingCartContext);
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
          <Link href="/cart" className={styles.icon}>
            <ShoppingCartOutlined />
            <span className={styles.quantity}>{cartQuantity}</span>
          </Link>
          {/* <button
            className={styles.btnLogin}
            onClick={() => {
              signIn();
            }}
          >
            Login
          </button> */}
          <Link href="/login">
            <button className={styles.btnLogin}>Login</button>
          </Link>
          {/* <button className={styles.btnSignOut} onClick={() => signOut()}>
            SignOut
          </button> */}
        </div>
      </Header>
    </>
  );
}

// export default ;
