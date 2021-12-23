import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    [x: string]: any;
}

export const TextInput = ({ label, ...props }: Props) => {

    const [field] = useField(props)

    return (
        <>
            <label htmlFor={ props.id || props.name }>{label}</label>
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}
