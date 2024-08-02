import React from "react";
import {Card, Col, Row} from "antd";

const proyects = [
    {
        title:'Proyecto 1',
        description:'Descripcion del proyecto ',
        link:'##'
    },
    {
        title:'Proyecto 2',
        description:'Descripcion del proyecto ',
        link:'##'
    },
    {
        title:'Proyecto 2',
        description:'Descripcion del proyecto ',
        link:'##'
    },
];

const Proyect=()=>{
    return(
        <div>
            <h2>Proyectos</h2>
            <Row gutter={16}>
                {proyects.map((proyect,index)=>(
                    <Col span={8} key={index}>
                        <Card title={proyect.title}>
                            <p>
                                {proyect.description}
                            </p>
                            <a href={proyect.link}>Ver Proyecto</a>
                        </Card>
                    </Col>
                ))}             
            </Row>
        </div>
    );
};
export default Proyect;
