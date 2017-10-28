import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Header style={{ position: 'fixed', width: '100%' }}>
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">Im a cool boy</Menu.Item>
                            <Menu.Item key="2">Projects</Menu.Item>
                            <Menu.Item key="3">Resume</Menu.Item>
                            <Menu.Item key="4">Contact Me</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ width: '100%', marginTop: 64 }}>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default App;
