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
        if (editId ,(window.confirm("¿Estás seguro de que quieres Editar este registro?"))) {
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
                    (window.confirm("Correo Duplicado Intente Nuevamente"))
                    window.location.reload();
                    
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
        <div>
            <h2>Lista de Pacientes</h2>

        
        
        <div className="consulta-container">
           
            
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
                <div className="edit-container">
                    <h3>Editar Paciente</h3>
                    <div className="form-control">
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nombre"
                    />
                    </div>
                    <div className="form-control">
                    <label htmlFor="mail">Mail</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email"
                    />
                    </div>
                    <div className="form-control">
                    <label htmlFor="password">Clave</label>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Password"
                    />
                    </div>
                    <Button onClick={handleSave} variant="success">Guardar Cambios</Button>
                </div>
            )}
        </div>
        </div>
    );
};


export default Consulta;