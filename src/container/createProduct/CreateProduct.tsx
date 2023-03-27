import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CreateProduct: React.FC = () => {
  // const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <>
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item> */}
        {/* <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item> */}
        <Form.Item label="Tên sản phẩm">
          <Input />
        </Form.Item>
        <Form.Item label="Phân loại">
          <Select>
            <Select.Option value="Tu">Tu</Select.Option>
            <Select.Option value="Ghe">Ghe</Select.Option>
            <Select.Option value="Den">Den</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Giá">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Mô tả">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Tải ảnh lên" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Tải ảnh</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button>Update</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
