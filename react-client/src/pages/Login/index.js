import './index.scss';
import axios from 'axios';
import { Card, Form, Input, Button } from 'antd';
import { getToken, setToken } from '@/utils/token';
import { useNavigate } from 'react-router-dom'
import { setEmail } from '@/utils/user';

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const response = await axios.post('http://localhost:5000/login', values);
    if (response.data) {
      setToken(response.data);
      setEmail(values.email);
      navigate('/layout');
    }
  };

  return (
    <div className="login">
      <Card className="login-container">
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Email is required',
              },
              {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Please provide a valid email'
              }
            ]}>
            <Input size="large" placeholder="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'password',
              },
            ]}>
            <Input.Password  size="large" placeholder="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login