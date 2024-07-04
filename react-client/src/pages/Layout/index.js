import './index.scss';
import { Card, Col, Row, Button, Slider } from 'antd';
import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getEmail } from '@/utils/user';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '@/utils/token';
import { removeEmail } from '@/utils/user';

// Custom hook to fetch data list
function useGetList() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    async function getList() {
      const email = getEmail(); // Get user email
      const res = await axios.get('http://localhost:5000/data/' + email); // Fetch data from API
      setDataList(res.data.data); // Update state with fetched data
    }
    getList();
  }, []);

  return {
    dataList,
    setDataList,
  };
}

// Layout component
const Layout = () => {
  const { dataList } = useGetList(); // Use custom hook to get data list
  const navigate = useNavigate(); // Navigation hook

  // State for y-axis bounds
  const [yAxisBounds, setYAxisBounds] = useState([0, 10]);

  // Logout function
  function logout() {
    removeToken(); // Remove token from storage
    removeEmail(); // Remove email from storage
    navigate('/'); // Navigate to home page
  }

  // Handle slider change
  const onSliderChange = (value) => {
    setYAxisBounds(value);
  };

  return (
    <div className="layout">
      {/* Logout button */}
      <Button className="layout-button" type="primary" onClick={logout}>
        Logout
      </Button>

      {/* Slider for controlling y-axis bounds */}
      <div className="slider-container">
        <Slider
          range
          min={0}
          max={10}
          defaultValue={yAxisBounds}
          onChange={onSliderChange}
        />
      </div>

      {/* Row containing two columns */}
      <Row className="layout-container">
        <Col span={12}>
          {/* Card containing first plot */}
          <Card>
            <Plot
              data={[
                {
                  x: dataList.sepalLength,
                  y: dataList.sepalWidth,
                  name: 'sepal.width',
                  type: 'scatter',
                  mode: 'markers',
                  marker: { color: 'red' },
                },
                {
                  x: dataList.sepalLength,
                  y: dataList.petalLength,
                  name: 'petal.length',
                  type: 'scatter',
                  mode: 'markers',
                  marker: { color: 'green' },
                },
                {
                  x: dataList.sepalLength,
                  y: dataList.petalWidth,
                  name: 'petal.width',
                  type: 'scatter',
                  mode: 'markers',
                  marker: { color: 'blue' },
                },
              ]}
              layout={{
                width: 600,
                height: 400,
                title: 'sepal.length',
                yaxis: { range: yAxisBounds },
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          {/* Card containing second plot */}
          <Card>
            <Plot
              data={[
                {
                  x: dataList.petalLength,
                  y: dataList.sepalLength,
                  name: 'sepal.length',
                  type: 'scatter',
                  mode: 'markers',
                  marker: { color: 'red' },
                },
                {
                  x: dataList.petalLength,
                  y: dataList.sepalWidth,
                  name: 'sepal.width',
                  type: 'scatter',
                  mode: 'markers',
                  marker: { color: 'green' },
                },
                {
                  x: dataList.petalLength,
                  y: dataList.petalWidth,
                  name: 'petal.width',
                  type: 'scatter',
                  mode: 'markers',
                  marker: { color: 'blue' },
                },
              ]}
              layout={{
                width: 600,
                height: 400,
                title: 'petal.length',
                yaxis: { range: yAxisBounds },
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
