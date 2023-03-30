import React, { useState } from "react";
import { Layout, Menu } from "antd";
import styles from "./styles.module.scss";
import type { MenuProps } from "antd";

import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];
const { Sider } = Layout;
function getItem(
  label: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(<Link href="/dashboard">Dashboarch</Link>),
  getItem(<Link href="/products">Product</Link>),
  getItem(<Link href="/category">Category</Link>),
  getItem(<Link href="/postProduct">Add Product</Link>),
  getItem(<Link href="/testlogin">testlogin</Link>),
];

const Sidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Sider className={styles.container}>
      <div>
        <h1>D</h1>
      </div>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
