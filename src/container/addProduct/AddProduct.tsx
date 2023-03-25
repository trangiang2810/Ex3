import React, { useState, useEffect } from "react";
import { Layout, Input } from "antd";

const AddProduct: React.FC = () => (
  <Layout>
    <div>
      <label htmlFor="1">Tên sản phẩm:</label>
      <Input id="1" placeholder="Nhập tên sản phẩm" />
      <div>
        <input type="file" name="image" placeholder="Image" />
      </div>
      <div>Giá bán</div>
    </div>
  </Layout>
);

export default AddProduct;
