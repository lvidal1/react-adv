import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { TextInput, Select } from '../components';
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value || '';

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required(rule.message);
        }
        if (rule.type === 'min') {
            schema = schema.min((rule as any).value || 1, rule.message);
        }
        if (rule.type === 'email') {
            schema = schema.email(rule.message);
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>Dynamic Form Page</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form>
                        {
                            formJson.map(({ type, name, placeholder, label, options }) => {
                                if (type === 'text' || type === 'email' || type === 'password') {
                                    return <TextInput key={name} label={(label as any)} name={name} placeholder={placeholder} type={type} />
                                } else if (type === 'select') {
                                    return (
                                        <Select key={name} label={(label as any)} name={name} placeholder={placeholder} type={type} >
                                            <option value="">Select</option>
                                            {
                                                options?.map(({ value, label }) => (
                                                    <option key={value} value={value}>{label}</option>
                                                ))
                                            }
                                        </Select>
                                    )
                                }

                                throw new Error('Invalid type');
                            })
                        }

                        <button type="submit">Create</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
