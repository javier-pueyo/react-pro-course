import "../styles/styles.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
//https://www.npmjs.com/package/yup
import * as Yup from "yup";

/**
 * Formik mediante el patrón function children (formik) => <Form></Form>
 * Podemos utilizar componentes propios de formik: Field, Form, ErrorMessage...
 * Estos componentes implicitamente tienen propiedades/Eventos que no hacen falta añadir, por ejemplo: onBlur, onChange...
 * Con indentificar <Field> con name="firstName" y type="text" es suficiente.
 */

interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
    terms: boolean;
    jobType: string;
}

export const FormikComponents = () => {
    const initialValues: IFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        terms: false,
        jobType: "",
    };
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, " Debe tener 15 caracteres o menos")
                        .required("Required"),
                    lastName: Yup.string()
                        .max(10, " Debe tener 10 caracteres o menos")
                        .required("Required"),
                    email: Yup.string()
                        .email("El email no tiene un formato válido")
                        .required("Required"),
                    terms: Yup.boolean()
                        .oneOf(
                            [true],
                            "Debes aceptar las condiciones"
                        )
                        .required("Required"),
                    jobType: Yup.string()
                        .required("Required")
                        .notOneOf(
                            ["it-jr"],
                            "Esta opción no es permitida"
                        ),
                })}
            >
                {(formik) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage
                            name="firstName"
                            component="span"
                        />

                        <label htmlFor="lastName">lastName</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage
                            name="lastName"
                            component="span"
                        />

                        <label htmlFor="email">email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="terms">
                            <Field name="terms" type="checkbox" />
                            terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <label htmlFor="jobType">job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">
                                developer
                            </option>
                            <option value="desinger">desinger</option>
                            <option value="it-senior">
                                it-senior
                            </option>
                            <option value="it-jr">it-jr</option>
                        </Field>
                        <ErrorMessage
                            name="jobType"
                            component="span"
                        />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
