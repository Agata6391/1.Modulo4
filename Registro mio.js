import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';//llama todas las carateristicas por eso el *
import './Registro.css';

const Registro = () => {
    const initialValues = {
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const validationSchema = Yup.object({
        nombre: Yup.string().required('Requerido'),
        email: Yup.string().email('Email invalido').required('Requerido'),
        password: Yup.string().min(6,'No cumple con los requisitos Minimos de 6 Caracteres').required('Requerido'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contrasenas no coinsiden').required('Requerido'),
    });
    const onSubmit = (values) => {
        console.log('Formulario enviado');
        console.log(values);
    };
    return (
        <div className="registro-container">
            <h2>Registro de Pacientes</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="form-control">
                        <label htmlFor="nombre">Nombre</label>
                        <Field type="text" id="nombre" name="nombre" />
                        <ErrorMessage name="nombre" component="div" className="error" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Clave</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirmPassword">Confirmar Clave</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />
                    </div>
                    <button type="submit"> Enviar </button>
                </Form>
            </Formik>

        </div>
    );
};

export default Registro;