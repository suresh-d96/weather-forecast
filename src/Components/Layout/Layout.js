import React from 'react';
import './style.css';
import { Layout } from 'antd';
const { Header, Content } = Layout;

function LayoutComponent(props) {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <a href='.'><p className='title'>Weather Forecast</p></a>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                {props.children}
            </Content>

        </Layout>
    );
}

export default LayoutComponent;
