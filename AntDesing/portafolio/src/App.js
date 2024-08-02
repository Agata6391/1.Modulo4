import React from "react";
import { Layout,Menu } from "antd";
import {UserOutlined , LaptopOutlined, MessageOutlined,StarOutlined} from '@ant-design/icons'
import AboutMe from "./components/AboutMe";
import Proyect from "./components/Proyects";
import Contact from "./components/Contact";
import Skill from "./components/Skills";
import "./App.css";
const {Header, Content , Footer} = Layout;

const App=()=>{
  return(
    <Layout>
      <Header>
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[1]}>
          <Menu.Item key='1' icon={<UserOutlined/>}>Sobre Mi</Menu.Item>
          <Menu.Item key='2' icon={<LaptopOutlined/>}>Proyectos</Menu.Item>
          <Menu.Item key='3' icon={<StarOutlined/>}>Habilidades</Menu.Item>
          <Menu.Item key='4' icon={<MessageOutlined/>}>Contacto</Menu.Item>
        </Menu>
      </Header>
      <Content style={{padding:'0 50px'}}>
      <AboutMe/>
      <Proyect/>
      <Skill/>
      <Contact/>
      </Content>
      <Footer style={{textAlign: 'center'}}>Daniel Vasquez Portafolio 2024</Footer>
      </Layout>
      
  );

};
export default App;
