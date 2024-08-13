import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditPacient from "./EditPaciente";
import TablePacients from "./TablasPaciente";

const PatientManage = ({ patients }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentEditId, setCurrentEditId] = useState(null);

    const handleEdit = (id) => {
        setCurrentEditId(id);
        setShowEditModal(true);
    };

    const handleUpdate = (updatedPatient) => {
        setShowEditModal(false);
        window.location.reload(); // Refrescar para ver los cambios
    };

    const handleCancel = () => {
        setShowEditModal(false);
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <TablePacients key={patient._id} obj={patient} onEdit={handleEdit} />
                    ))}
                </tbody>
            </table>

            <Modal show={showEditModal} onHide={handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showEditModal && (
                        <EditPacient
                            editId={currentEditId}
                            onUpdate={handleUpdate}
                            onCancel={handleCancel}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PatientManage;