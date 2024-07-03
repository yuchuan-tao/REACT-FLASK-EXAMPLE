import './index.scss';
import { Card, Col, Row } from 'antd';
import Plot from 'react-plotly.js';

const Layout = () => {
  return (
    <div className="layout">
      <Row className="layout-container">
        <Col span={12}>
          <Card>
            <Plot
              data={[
                {
                  x: [1, 2, 3],
                  y: [2, 6, 3],
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'red'},
                },
                {
                  x: [1, 2, 3],
                  y: [5, 9, 7],
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'blue'},
                },
              ]}
              layout={ {width: 600, height: 400, title: 'A Fancy Plot'} }
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Plot
              data={[
                {
                  x: [1, 2, 3],
                  y: [2, 6, 3],
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'red'},
                },
                {
                  x: [1, 2, 3],
                  y: [5, 9, 7],
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'blue'},
                },
              ]}
              layout={ {width: 600, height: 400, title: 'A Fancy Plot'} }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;