import { Formik, Form, FormikHelpers, FormikValues } from "formik";
import { MySelect, MyTextinput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";
import { text } from "../data/validations-default.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(text.required);
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value,
        `Mínimo de ${(rule as any).value || 2} caracteres debe tener`
      );
    }
    if (rule.type === "email") {
      schema = schema.email(text.email);
    }
  }

  requiredFields[input.name] = schema;
}

console.log({ requiredFields });

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextinput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }
              if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`El type: ${type}, no es soportado`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
