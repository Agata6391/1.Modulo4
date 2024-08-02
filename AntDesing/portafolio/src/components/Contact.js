import React from "react";
import { Form, Input, Button, notification} from "antd";

const { TextArea } = Input;
const Contact = () => {
  const onFinish = (values) => {
    //aqui se podria poner los datos a un servidor
    console.log("Formulario enviado", values);
    notification.success({
      message: "Formulario enviado",
      description: "Tu mensaje se ha enviado exitosamente",
    });
  };
  return (
    <div>
      <h2>Contacto</h2>
      <Form name="contact" layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Nombre"
          rules={[{ required: true, message: "Ingresa tu nombre" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Correo Electronico"
          rules={[{ required: true, message: "Ingresa tu Correo Electronico" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Message"
          label="Describe tu solicitus"
          rules={[{ required: true, message: "Ingresa tu Mensaje " }]}
        >
          <TextArea rows={4}/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit"> Enviar</Button>
          
        </Form.Item>
      </Form>
    </div>
  );
};


export default Contact;