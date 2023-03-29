import React, { useState } from "react";
import { Layout, Menu } from "antd";
import styles from "./styles.module.scss";
import type { MenuProps } from "antd";

import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];
const { Sider } = Layout;
function getItem(
  label: React.ReactNode,
  // key: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    // key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(<Link href="dashboard">Dashboarch</Link>),
  getItem(<Link href="products">Product</Link>),
  getItem(<Link href="category">Category</Link>),
  getItem(<Link href="/post/postProduct">Add Product</Link>),
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
        // items={[
        //   {
        //     key: "1",
        //     label: "Ghế",
        //   },
        //   {
        //     key: "2",
        //     label: "Tủ",
        //   },
        //   {
        //     key: "3",
        //     label: "Đèn",
        //   },
        // ]}
      />
    </Sider>
  );
};

export default Sidebar;
