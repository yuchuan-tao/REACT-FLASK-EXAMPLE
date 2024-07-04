import './index.scss';
import { Card, Col, Row, Button } from 'antd';
import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getEmail } from '@/utils/user';
import { useNavigate } from 'react-router-dom'
import { removeToken } from '@/utils/token';
import { removeEmail } from '@/utils/user';

function useGetList() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    async function getList() {
      const email = getEmail();
      const res = await axios.get('http://localhost:5000/data/' + email);
      setDataList(res.data.data);
    };
    getList();
  }, []);

  return {
    dataList,
    setDataList
  };
}

const Layout = () => {
  const {dataList, setDataList} = useGetList();
  const navigate = useNavigate();

  function logout() {
    removeToken();
    removeEmail();
    navigate('/');
  }

  return (
    <div className="layout">
      <Button className="layout-button" type="primary" onClick={logout}>Logout</Button>
      <Row className="layout-container">
        <Col span={12}>
          <Card>
            <Plot
              data={[
                {
                  x: dataList.sepalLength,
                  y: dataList.sepalWidth,
                  name: 'sepal.width',
                  type: 'scatter',
                  mode: 'markers',
                  marker: {color: 'red'},
                },
                {
                  x: dataList.sepalLength,
                  y: dataList.petalLength,
                  name: 'petal.length',
                  type: 'scatter',
                  mode: 'markers',
                  marker: {color: 'green'},
                },
                {
                  x: dataList.sepalLength,
                  y: dataList.petalWidth,
                  name: 'petal.width',
                  type: 'scatter',
                  mode: 'markers',
                  marker: {color: 'blue'},
                },
              ]}
              layout={ {width: 600, height: 400, title: 'sepal.length'} }
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Plot
              data={[
                {
                  x: dataList.petalLength,
                  y: dataList.sepalLength,
                  name: 'sepal.length',
                  type: 'scatter',
                  mode: 'markers',
                  marker: {color: 'red'},
                },
                {
                  x: dataList.petalLength,
                  y: dataList.sepalWidth,
                  name: 'sepal.width',
                  type: 'scatter',
                  mode: 'markers',
                  marker: {color: 'green'},
                },
                {
                  x: dataList.petalLength,
                  y: dataList.petalWidth,
                  name: 'petal.width',
                  type: 'scatter',
                  mode: 'markers',
                  marker: {color: 'blue'},
                },
              ]}
              layout={ {width: 600, height: 400, title: 'petal.length'} }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;