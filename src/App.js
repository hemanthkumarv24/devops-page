import React from "react";
import { Layout, Typography, Row, Col, Card, Divider, Avatar } from "antd";
import {
  SmileOutlined,
  ToolOutlined,
  StarOutlined,
  CodeOutlined,
} from "@ant-design/icons";

import "antd/dist/reset.css"; // Resets Ant styles
import "./App.css"; // Optional: custom styles

const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const devOpsTools = [
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitHub Actions",
  "Terraform",
  "Ansible",
  "Prometheus",
  "Grafana",
];

function App() {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#001529" }}>
        <Title level={2} style={{ color: "white", textAlign: "center", margin: 0 }}>
          DevOps Overview
        </Title>
      </Header>

      <Content style={{ padding: "40px 20px", backgroundColor: "#f0f2f5" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", fontSize: '20px' }}>
          <Card 
            title={
              <span>
                <SmileOutlined /> What is DevOps?
              </span>
            }
            bordered={false}
          >
            <Paragraph>
              DevOps is a set of practices that combines software development (Dev)
              and IT operations (Ops). It aims to shorten the software development
              lifecycle and deliver high-quality software continuously.
            </Paragraph>
            <img
              src="https://browserstack.wpenginepowered.com/wp-content/uploads/2023/02/devsecops-diagram.png"
              alt="DevOps Lifecycle"
              style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
            />
          </Card>

          <Divider />

          <Card
            title={
              <span>
                <ToolOutlined /> Key DevOps Features
              </span>
            }
            bordered={false}
          >
            <ul>
              <li>Continuous Integration / Continuous Deployment (CI/CD)</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>Automated Testing and Monitoring</li>
              <li>Rollback and Recovery</li>
              <li>Collaboration and Feedback Loops</li>
            </ul>
          </Card>

          <Divider />

          <Card
            title={
              <span>
                <CodeOutlined /> Popular Tools
              </span>
            }
            bordered={false}
          >
            <Row gutter={[16, 16]}>
              {devOpsTools.map((tool) => (
                <Col xs={12} sm={8} md={6} key={tool}>
                  <Card hoverable style={{ textAlign: "center" }} size="small">
                    <Avatar style={{ backgroundColor: "#1890ff", marginBottom: 8 }}>
                      {tool.charAt(0)}
                    </Avatar>
                    <div>{tool}</div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          <Divider />

          <Card
            title={
              <span>
                <StarOutlined /> Benefits of DevOps
              </span>
            }
            bordered={false}
          >
            <ul>
              <li>Faster software delivery</li>
              <li>Higher deployment frequency</li>
              <li>Improved collaboration between teams</li>
              <li>Shorter lead time for fixes</li>
              <li>Better customer satisfaction</li>
            </ul>
          </Card>
        </div>
      </Content>

      <Footer style={{ textAlign: "center", backgroundColor: "#001529", color: "white" }}>
        Created by Hemanth Kumar V © 2025
      </Footer>
    </Layout>
  );
}

export default App;
