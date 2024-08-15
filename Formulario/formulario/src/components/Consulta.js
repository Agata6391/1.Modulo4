import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import './Registro.css';

const Consulta = () => {
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/registration')
            .then(response => {
                setPacientes(response.data);
            })
            .catch(error => {
                setError('Error al cargar los datos');
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleEdit = (id) => {
        const paciente = pacientes.find(p => p._id === id);
        if (paciente) {
            setFormData({ name: paciente.name, email: paciente.email, password: paciente.password });
            setEditId(id);
        }
    };

    const handleSave = () => {
        if (editId) {
            axios.put(`http://localhost:5000/api/registration/${editId}`, formData)
                .then(() => {
                    setPacientes(pacientes.map(paciente => 
                        paciente._id === editId ? { ...paciente, ...formData } : paciente
                    ));
                    setEditId(null);
                    setFormData({ name: '', email: '', password: '' });
                })
                .catch(error => {
                    console.error("Error al actualizar el registro:", error);
                    setError('Error al actualizar el registro');
                });
        }
    };

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
            axios.delete(`http://localhost:5000/api/registration/${id}`)
                .then(() => {
                    setPacientes(pacientes.filter(paciente => paciente._id !== id));
                })
                .catch(error => {
                    console.error("Error al eliminar el registro:", error);
                    setError('Error al eliminar el registro');
                });
        }
    };

    return (
        <div className="consulta-container">
            <h2>Lista de Pacientes</h2>
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
                    {pacientes.map(paciente => (
                        <tr key={paciente._id}>
                            <td>{paciente.name}</td>
                            <td>{paciente.email}</td>
                            <td>{paciente.password}</td>
                            <td>
                                <Button onClick={() => handleDelete(paciente._id)} size="sm" variant="warning" style={{ marginRight: '20px' }}>Eliminar</Button>
                                <Button onClick={() => handleEdit(paciente._id)} size="sm" variant="warning" style={{ marginRight: '20px' }}>Editar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editId && (
                <div>
                    <h3>Editar Paciente</h3>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nombre"
                    />
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email"
                    />
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Password"
                    />
                    <Button onClick={handleSave} variant="success">Guardar Cambios</Button>
                </div>
            )}
        </div>
    );
};


export default Consulta;