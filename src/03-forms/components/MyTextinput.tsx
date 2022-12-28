import { ErrorMessage, useField } from "formik";

interface IProps {
    label: string;
    name: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    [extraProps: string]: any;
}
//Debe declararse si o si el name, para que formik establezca la conexión con useField.
//Utilizamos MyTextInput para inputs del tipo text, email y password.
// [x: string]: any --> Nos permite enviar cualquier otra ...props no definida en la interfaz

export const MyTextinput = ({ label, ...props }: IProps) => {
    //Hook de
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}></label>
            {/* Enviamos las props necesitarias de formik al input para manejarlo */}
            <input className="text-input" {...field} {...props} />
            <ErrorMessage
                name={props.name}
                component="span"
                className="error-input__custom"
            />
            {/* meta incluye funciones para manerjar los errores */}
            {/* meta.touched && meta.error && (
                <span className="error">{meta.error}</span>
            ) */}
        </div>
    );
};
