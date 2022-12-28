import "../styles/styles.css";
import { useFormik } from "formik";
//https://www.npmjs.com/package/yup
/**
 * Yup es una libreria extrechamente conectada con formik.
 * Nos permite crear schema builder para validaciones en forkik
 * validationScheme: Yup.object({<<Añadir objeto schema de validaciones>>})
 * Formik+Yup permite tener un patrón de formulario similar a Angular (Angular reactive formbuilder)
 */

import * as Yup from "yup";

interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {
    const { handleSubmit, errors, touched, getFieldProps } =
        useFormik<IFormValues>({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
            },
            onSubmit: (values) => {
                console.log(values);
            },
            validationSchema: Yup.object({
                firstName: Yup.string()
                    .max(15, " Debe tener 15 caracteres o menos")
                    .required("Required"),
                lastName: Yup.string()
                    .max(10, " Debe tener 10 caracteres o menos")
                    .required("Required"),
                email: Yup.string()
                    .email("El email no tiene un formato válido")
                    .required("Required"),
            }),
        });

    return (
        <div>
            <h1>Formik Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps("firstName")} />
                {touched.firstName && errors.firstName && (
                    <span>{errors.firstName}</span>
                )}

                <label htmlFor="lastName">lastName</label>
                <input type="text" {...getFieldProps("lastName")} />
                {touched.lastName && errors.lastName && (
                    <span>{errors.lastName}</span>
                )}

                <label htmlFor="email">email</label>
                <input type="text" {...getFieldProps("email")} />
                {touched.email && errors.email && (
                    <span>{errors.email}</span>
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
