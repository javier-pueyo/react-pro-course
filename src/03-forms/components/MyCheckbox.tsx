import { ErrorMessage, useField } from "formik";

interface IProps {
    label: string;
    name: string;
    [extraProps: string]: any;
}
//Debe declararse si o si el name, para que formik establezca la conexión con useField.
//Utilizamos MyTextInput para inputs del tipo text, email y password.
// [x: string]: any --> Nos permite enviar cualquier otra ...props no definida en la interfaz

export const MyCheckbox = ({ label, ...props }: IProps) => {
    //Hook de
    const [field, meta] = useField({ ...props, type: "checkbox" });

    return (
        <div>
            <label>
                <input
                    className="text-input"
                    type="checkbox"
                    {...field}
                    {...props}
                />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" />
        </div>
    );
};
