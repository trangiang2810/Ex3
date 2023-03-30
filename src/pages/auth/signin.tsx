import { NextPage } from "next";
import { signIn, signOut } from "next-auth/react";
import { useState, FormEventHandler } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { Button, Input, Layout } from "antd";

interface Props {}
const SignIn: NextPage = (props): JSX.Element => {
  const { status: session, data } = useSession();

  const router = useRouter();
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
  const handleLogin = () => {
    router.push("/testlogin");
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
          <button className={styles.btn} onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default SignIn;
