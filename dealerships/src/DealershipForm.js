import React, { useState } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const DealershipForm = ({ formData, onChange, onSubmit }) => {
  const [visible, setVisible ] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  const submit = async () => {
    try {
      await form.validateFields()
      await onSubmit();
      form.resetFields();
      hideDrawer();
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> New Dealership
      </Button>

      <Drawer
        title="Create a new Dealership"
        width={420}
        onClose={hideDrawer}
        visible={visible}
        bodyStyle={{ paddingBottom: 100}}
        
        >
          <Form 
            form={form} 
            layout="vertical" 
            onFinish={submit} 
            initialValues={formData}>
          <Row>
              <Col span={24}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{required: true, message: 'Please enter dealer name'}]}>
                  <Input 
                    name="name"
                    onChange={onChange} 
                    placeholder="Please enter dealership name" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="telephone"
                  label="Telephone"
                  rules={[{required: true, message: 'Please enter dealer phone'}]}>
                  <Input 
                    name="telephone"
                    onChange={onChange} 
                    placeholder="Please enter dealership Phone" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="contactName"
                  label="Contact Name"
                  rules={[{required: true, message: 'Please enter dealer contact name'}]}>
                  <Input  
                    name="contactName"
                    onChange={onChange} 
                    placeholder="Please enter dealership contact name" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="streetAddress"
                  label="Street Address"
                  rules={[{required: true, message: 'Please enter dealer street address'}]}>
                  <Input  
                    name="streetAddress"
                    onChange={onChange} 
                    placeholder="Please enter dealership street address" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[{required: true, message: 'Please enter dealer city'}]}>
                  <Input  
                    name="city"
                    onChange={onChange} 
                    placeholder="Please enter dealership city" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  name="state"
                  label="State"
                  rules={[{required: true}]}>
                  <Select  
                    name="state"
                    onChange={value => onChange({ target: { name: 'state', value }})} 
                    placeholder="Select State">
                    <Select.Option value="AZ">AZ</Select.Option>
                    <Select.Option value="IL">IL</Select.Option>
                    <Select.Option value="MI">MI</Select.Option>
                    <Select.Option value="WI">WI</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={14} offset={2}>
                <Form.Item
                  name="postalCode"
                  label="Postal Code"
                  rules={[{required: true, message: 'Please enter dealer postal code'}]}>
                  <Input  
                    name="postalCode"
                    onChange={onChange} 
                    placeholder="Please enter postal code" />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="end">
              <Button 
                onClick={hideDrawer} 
                style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button 
                htmlType="submit"
                type="primary">
                Submit
              </Button>
            </Row>
          </Form>
        </Drawer>
    </>
  )
}

export default DealershipForm;