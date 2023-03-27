import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useState, FormEventHandler } from "react";
import Link from "next/link";
import Router from "next/router";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { Form, Input, Layout } from "antd";

interface Props {}
const SignIn: NextPage = (props): JSX.Element => {
  const { status, data } = useSession();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    console.log(res);
  };
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Đăng nhập</h1>
        <form onSubmit={handleSubmit}>
          <Input
            value={userInfo.email}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            type="email"
            placeholder="giang@gmail.com"
          />
          <Input
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type="password"
            placeholder="1234"
          />
          <button className={styles.btn}>Login</button>
          {/* <input type="submit" value="Login" /> */}
        </form>
      </div>
    </Layout>
  );
};
export default SignIn;
