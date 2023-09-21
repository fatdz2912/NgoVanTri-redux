import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button, Modal, Form, Input, InputNumber } from "antd";
const CreateModal = ({
  isShowCreateModal,
  setIsShowCreateModal,
  handleCreateUser,
}) => {
  const [createForm] = Form.useForm();

  useEffect(() => {
    if (isShowCreateModal) {
      createForm.resetFields();
    }
  }, [isShowCreateModal]);

  return (
    <Modal
      title="Create user"
      open={isShowCreateModal}
      onCancel={() => setIsShowCreateModal(false)}
      footer={null}
    >
      <Form
        form={createForm}
        name="createUser"
        layout="vertical"
        onFinish={(values) => handleCreateUser(values)}
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
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your age!",
            },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Button type="primary" block onClick={() => createForm.submit()}>
        Create
      </Button>
      <Button block onClick={() => createForm.resetFields()}>
        Reset
      </Button>
    </Modal>
  );
};

export default CreateModal;
