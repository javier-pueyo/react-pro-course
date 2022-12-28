import { ErrorMessage, useField } from "formik";

interface IProps {
    label: string;
    name: string;
    [extraProps: string]: any;
}

export const MySelect = ({ label, ...props }: IProps) => {
    const [field] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}></label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </div>
    );
};
