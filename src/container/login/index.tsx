import React from "react";
import styles from "./styles.module.scss";
import { Input, Button, Form, message, Divider } from "antd";
import Link from "next/link";
import { useApi } from "../../apis/api";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

const Login: React.FC = () => {
  const $api = useApi();
  const router = useRouter();
  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    const dataResLogin: IDataResLogin = await $api.getUser(values);
    if (dataResLogin.success) {
      message.success("Đăng nhập thành công");
      console.log(dataResLogin.data.token);
      setCookie("accessToken", dataResLogin.data.token);

      router.push("/products");
    } else {
      message.error("Đăng nhập thất bại");
    }
  };

  //   getCookie('accessToken');
  return (
    <div className={styles.container}>
      <h1>Đăng nhập</h1>

      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label={<p className={styles.title}>Tên tài khoản</p>}
          name="username"
        >
          <Input name="username"></Input>
        </Form.Item>

        <Form.Item
          label={<p className={styles.title}>Mật khẩu</p>}
          name="password"
        >
          <Input.Password
            name="password"
            className={styles.form_input}
          ></Input.Password>
        </Form.Item>

        <div className={styles.node}>
          <div>
            <input id={"remember-password"} type={"checkbox"} />
            <label style={{ cursor: "pointer" }} htmlFor="remember-password">
              &nbsp;Ghi nhớ
            </label>
          </div>
          <Link href={"/"}>Quên mật khẩu</Link>
        </div>
        <div className={styles.btnSubmit}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </div>

        <div className={styles.link}>
          <Link href={"/"}>Bạn chưa có tài khoản?</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
