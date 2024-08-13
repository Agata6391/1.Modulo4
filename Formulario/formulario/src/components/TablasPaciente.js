import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";


const TablePacients = ({ obj }) => {
    const DeletePacient = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
            axios.delete(`http://localhost:5000/api/registration/${obj._id}`)
                .then(() => {
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Hubo un error al eliminar el paciente:", error);
                });
        }
    };
 
    return (
        <tr>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.password}</td>
            <td>
                <Button onClick={DeletePacient} variant="danger">Eliminar Registro</Button>
                <Button onClick={() => onEdit(obj._id)} variant="primary">Editar registro</Button>
            </td>
        </tr>
    );
};

export default TablePacients;