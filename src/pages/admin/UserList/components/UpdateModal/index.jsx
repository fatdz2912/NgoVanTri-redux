import { useEffect, useMemo } from "react";
import { Button, Modal, Form, Input, InputNumber } from "antd";

const UpdateModal = ({
  isShowUpdateModal,
  setIsShowUpdateModal,
  handleUpdateUser,
  updateData,
}) => {
  const [updateForm] = Form.useForm();

  useEffect(() => {
    if (isShowUpdateModal) {
      updateForm.setFieldsValue({
        name: updateData.name,
        age: updateData.age,
        address: updateData.address,
      });
    }
  }, [isShowUpdateModal]);

  return (
    <Modal
      title="Update user"
      open={isShowUpdateModal}
      onCancel={() => setIsShowUpdateModal(false)}
      footer={null}
    >
      <Form
        form={updateForm}
        name="updateUser"
        layout="vertical"
        onFinish={(values) => handleUpdateUser(updateData.id, values)}
        initialValues={{
          name: updateData.name,
          age: updateData.age,
          address: updateData.address,
        }}
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
        <Button htmlType="submit" type="primary" block>
          Update
        </Button>
      </Form>
    </Modal>
  );
};

export default UpdateModal;
