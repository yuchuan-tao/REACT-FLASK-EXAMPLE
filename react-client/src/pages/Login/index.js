import './index.scss';
import axios from 'axios';
import { Card, Form, Input, Button, Alert } from 'antd';
import { useState } from 'react';
import { setToken } from '@/utils/token';
import { useNavigate } from 'react-router-dom';
import { setEmail } from '@/utils/user';

// Login component
const Login = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [error, setError] = useState(''); // State to manage error message

  // Function to handle form submission
  const onFinish = async (values) => {
    try {
      // Send a POST request to the login API with form values
      const response = await axios.post('http://localhost:5000/login', values);
      
      // If response data is present, set token and email, then navigate to layout page
      if (response.data) {
        setToken(response.data); // Save the received token
        setEmail(values.email); // Save the email
        navigate('/layout'); // Navigate to the layout page
      } else {
        // If no response data, set error message
        setError('Login unsuccessful. Please check your credentials and try again.');
      }
    } catch (error) {
      // If there's an error during the request, set error message
      setError('Login unsuccessful. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login">
      <Card className="login-container">
        {/* Display error message if login is not successful */}
        {error && (
          <div className="error-message">
            <Alert message={error} type="error" showIcon />
          </div>
        )}
        
        {/* Form for user login */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          {/* Email input field */}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Email is required',
              },
              {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Please provide a valid email',
              },
            ]}
          >
            <Input size="large" placeholder="email" />
          </Form.Item>

          {/* Password input field */}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Password is required',
              },
            ]}
          >
            <Input.Password size="large" placeholder="password" />
          </Form.Item>

          {/* Submit button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
