import React from "react";
import {List, Card} from "antd";

const skills=[
  

    'Diagnóstico de sistemas eléctricos',
    'Instalación y mantenimiento de sistemas eléctricos',
    'Interpretación de esquemas eléctricos',
    'Conocimientos básicos de redes (Cisco)',
    'Protocolos de comunicación',
    'Configuración y mantenimiento de redes',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Resolución de problemas de hardware',
    'Resolución de problemas de software',
    'Atención al cliente',
    'Mantenimiento de equipos informáticos',
    'Git',
    'Visual Studio Code',
    'React',
    'Resolución de problemas',
    'Trabajo en equipo',
    'Gestión del tiempo',
    'Aprendizaje continuo',
    'Documentación técnica',
    'Atención al detalle',

];

const Skill=()=>{
    return(
        <Card title="Habilidades" bordered={false}>
            <List
                dataSource={skills}
                renderItem={item=>(
                    <List.Item>{item}</List.Item>
                )}
                />
        </Card>

    );
};
export default Skill;