import {Form,Input,} from 'antd';
const FormDisabledDemo = () => {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal" className='form-cont'
      >
        
       
        <Form.Item className='inputs-container' >
          <Input className='map-form-card-input' />
          <Input  className='map-form-card-input' />
       
        </Form.Item>
      
        <Form.Item className='inputs-container' >
          <Input className='map-form-card-input' />
          <Input />
          <Input />
          <Input />
        </Form.Item>
  
    
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;