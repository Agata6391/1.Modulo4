import React, { useEffect, useState } from "react";
import axios from "axios";
import './Registro.css';

const Consulta = () => {
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

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

    const handleEdit = (id) => {
        const paciente = pacientes.find(p => p._id === id);
        setEditingId(id);
        setFormData({ name: paciente.name, email: paciente.email, password: paciente.password });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (id) => {
        axios.put(`http://localhost:5000/api/registration/${id}`, formData)
            .then(() => {
                setPacientes(pacientes.map(p => p._id === id ? { ...p, ...formData } : p));
                setEditingId(null);
            })
            .catch(error => {
                setError('Error al actualizar los datos');
                console.error(error);
            });
    };

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
            axios.delete(`http://localhost:5000/api/registration/${id}`)
                .then(() => {
                    setPacientes(pacientes.filter(p => p._id !== id));
                })
                .catch(error => {
                    console.error("Error al eliminar el registro:", error);
                    setError('Error al eliminar el registro');
                });
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="consulta-container">
            <h2>Lista de Pacientes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map(paciente => (
                        <tr key={paciente._id}>
                            {editingId === paciente._id ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleSubmit(paciente._id)}>Guardar</button>
                                        <button onClick={() => setEditingId(null)}>Cancelar</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{paciente.name}</td>
                                    <td>{paciente.email}</td>
                                    <td>
                                        <button onClick={() => handleEdit(paciente._id)}>Editar</button>
                                        <button onClick={() => handleDelete(paciente._id)}>Eliminar</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Consulta;
