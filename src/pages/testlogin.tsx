import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
import Product from "@/container/product";

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();
  // console.log(session);
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);
  return (
    <div>
      <h1 style={{ color: "red" }}>ĐĂNG NHẬP THÀNH CÔNG</h1>
      <Product />
    </div>
  );
};
export default Protected;
