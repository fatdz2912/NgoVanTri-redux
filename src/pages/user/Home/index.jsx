import { useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, generatePath } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Input,
  InputNumber,
  Select,
  Button,
  Space,
  Checkbox,
  Modal,
  Form,
} from "antd";

import CustomButton from "../../../components/Button";

import { ROUTES } from "../../../constants/routes";
import * as S from "./styles";

const HomePage = () => {
  const [isShowCreateModal, setIsShowCreateModal] = useState(false);
  const [text, setText] = useState("");

  const [list, setList] = useState([
    {
      id: 1,
      name: "iPhone 14",
      price: 20,
    },
    {
      id: 2,
      name: "Samsung S23",
      price: 15,
    },
    {
      id: 3,
      name: "Xiaomi Mi13",
      price: 10,
    },
    {
      id: 4,
      name: "Xiaomi Mi13",
      price: 10,
    },
    {
      id: 5,
      name: "Xiaomi Mi13",
      price: 10,
    },
    {
      id: 6,
      name: "Xiaomi Mi13",
      price: 10,
    },
    {
      id: 7,
      name: "Xiaomi Mi13",
      price: 10,
    },
    {
      id: 8,
      name: "Xiaomi Mi13",
      price: 10,
    },
  ]);

  const handleCreateProduct = (values) => {
    setList([
      ...list,
      {
        id: uuidv4(),
        name: values.name,
        price: values.price,
      },
    ]);
    setIsShowCreateModal(false);
  };

  const renderProductList = useMemo(() => {
    return list.map((item) => {
      return (
        <Col lg={6} md={8} sm={8} xs={12} key={item.id}>
          <Card size="small" title={item.name}>
            <p>${item.price}</p>
            <Space size={24}>
              <Button type="primary">Mua</Button>
              <Link
                to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}
              >
                Chi tiết
              </Link>
            </Space>
          </Card>
        </Col>
      );
    });
  }, [list]);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col md={6} xs={24}>
          <Card size="small" title="Filter">
            <Row>
              <Col span={24}>
                <Checkbox>Apple</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox>Samsung</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox>Xiaomi</Checkbox>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={18} xs={24}>
          <Row gutter={[16, 16]}>
            <Col sm={16} xs={24}>
              <Input placeholder="Search..." />
            </Col>
            <Col sm={8} xs={24}>
              <Select placeholder="Order by" style={{ width: "100%" }}>
                <Select.Option>A -> Z</Select.Option>
                <Select.Option>Z -> A</Select.Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: 16, marginBottom: 16 }}>
            {renderProductList}
          </Row>
          <Input onChange={(e) => setText(e.target.value)} />
          <Button onClick={() => setIsShowCreateModal(true)}>
            Create product
          </Button>
          <Modal
            title="Create product"
            open={isShowCreateModal}
            onCancel={() => setIsShowCreateModal(false)}
            footer={null}
          >
            <Form
              name="createProduct"
              layout="vertical"
              onFinish={(values) => handleCreateProduct(values)}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Please input your name!",
                  },
                  {
                    min: 3,
                    max: 16,
                    type: "string",
                    message: "Tên phải từ 3 đến 16 kí tự",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                  {
                    min: 10000,
                    type: "number",
                    message: "Giá phải lớn hơn 10.000",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Button htmlType="submit" type="primary" block>
                Create
              </Button>
            </Form>
          </Modal>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
