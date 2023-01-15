import { useFormik, Formik, Form, FormikValues } from 'formik';
import * as Yup from "yup";

import '../styles/styles.css';
import { MyTextinput } from '../components/MyTextinput';


export const RegisterFormikPage = () => {

    interface IInitialValues {
        name: string;
        email: string;
        password1: string;
        password2: string;
    }

    const initialValues = {
        name: '',
        email: '',
        password1: '',
        password2: '',
    }

    const { errors, touched, dirty, values: {name, email, password1, password2} ,handleSubmit, handleChange, resetForm} = useFormik<IInitialValues>({
        initialValues: initialValues,
        onSubmit: (values => console.log(values)),
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Debe tener  más de 2 carácteres")
                .max(15, " Debe tener menos de 15 caracteres")
                .required("Required"),
            email: Yup.string()
                .email("El email no tiene un formato válido")
                .required("Required"),
            password1: Yup.string()
                .min(6, "Debe tener  más de 6 carácteres")
                .required("Required"),
            password2: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords debe hacer match')
                .required("Required"),
        }),
    });

    return (
        <div>
            <h1>Register Page</h1>
            <Formik
                initialValues={initialValues as IInitialValues}
                onSubmit={values => console.log(values)}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, "Debe tener  más de 2 carácteres")
                        .max(15, " Debe tener menos de 15 caracteres")
                        .required("Required"),
                    email: Yup.string()
                        .email("El email no tiene un formato válido")
                        .required("Required"),
                    password1: Yup.string()
                        .min(6, "Debe tener  más de 6 carácteres")
                        .required("Required"),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], 'Passwords debe hacer match')
                        .required("Required"),
                })}
            >
                {({handleReset}) => (
                    <Form>
                        <MyTextinput label="Name" name="name" placeholder="Fernando" />
                        <MyTextinput label="Email" name="email" placeholder="Email" />
                        <MyTextinput label="Password" name="password1" placeholder="*****" />
                        <MyTextinput label="Repeat Password" name="password2" />
                        <button type="submit">Create</button>                  
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>
                )}
                </Formik>
        </div>
    )
}
