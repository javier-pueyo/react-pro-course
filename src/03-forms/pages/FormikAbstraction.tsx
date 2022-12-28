import "../styles/styles.css";
import { Formik, Form } from "formik";
//https://www.npmjs.com/package/yup
import * as Yup from "yup";
import { MyCheckbox, MyTextinput, MySelect } from "../components";

/**
 *
 * Custom components mediante:
 * - patrón children function formik
 * - Hooks de Formik (useField)
 * Nos permite tener los beneficios de los componentes simples de formik (Field, ErrorMessage)
 * usando custom components y enviando las propiedades mediante useField:
 *
 * export const  MyTextinput = ({ label, ...props }) => {
 * const [field, meta] = useField(props);
 * <input className="text-input" {...field} {...props} />
 */

interface IFormValues {
    firstName: "";
    lastName: "";
    email: "";
    terms: false;
    jobType: "";
}

export const FormikAbstraction = () => {
    const initialValues: IFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        terms: false,
        jobType: "",
    };
    return (
        <div>
            <h1>Formik Abstraction</h1>

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
                        <MyTextinput
                            label="First Name"
                            name="firstName"
                            placeholder="Fernando"
                        />

                        <MyTextinput
                            label="Last Name"
                            name="lastName"
                            placeholder="Herrera"
                        />

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">
                                developer
                            </option>
                            <option value="designer">designer</option>
                            <option value="it-senior">
                                it-senior
                            </option>
                            <option value="it-jr">it-jr</option>
                        </MySelect>

                        <MyCheckbox
                            label="Terms & Conditions"
                            name="terms"
                        />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
