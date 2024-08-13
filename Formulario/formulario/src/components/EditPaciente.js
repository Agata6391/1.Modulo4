import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPacient = ({ editId, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/registration/${editId}`)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error("Error al obtener los datos del paciente:", error);
            });
    }, [editId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/registration/${editId}`, formData)
            .then(response => {
                onUpdate(response.data);  // Llamar a la función de actualización en el componente principal
            })
            .catch(error => {
                console.error("Error al actualizar el paciente:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Guardar Cambios</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default EditPacient;





// import React,{useState} from "react";
// import axios from "axios";
// import Pacientes from "./Pacientes";
// import { useResolvedPath } from "react-router-dom";
// editPacient=()=>{
// const[ editId, setEditId ] = useState(null);
// const[formData , setFormData]=useState({name:'', email:'', password:''});
// useEffect(() => {
//     axios.get("http://localhost:5000/api/registration")
//         .then(response => {
//             setPacientes(response.data);
//         })
//         .catch(error => {
//             console.error("Error al obtener los pacientes:", error);
//         });
// }, []);

// const handleEditPacient =(id)=>{
//     axios.put(`http://localhost:5000/api/registration/${id}`);
//     const pacient =pacientes.find(e=> e._id ===id);

// setEditId(id);
// setFormData ({name:paciente.name, email:paciente.email, password:paciente.password});
   
// };


// export default editPacient;