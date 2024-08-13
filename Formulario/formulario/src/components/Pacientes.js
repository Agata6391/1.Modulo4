import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TablePacients from "./TablasPaciente";


const Pacientes = () => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/registration")
            .then(({ data }) => {
                setPacientes(data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const Table = () => {
        return pacientes.map((res, i) => {
            return <TablePacients obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>{Table()}</tbody>
            </Table>
        </div>
    );
};

export default Pacientes;