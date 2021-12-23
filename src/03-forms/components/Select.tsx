import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    label: string;
    [x: string]: any;
}

export const Select = ({ label, ...props }: Props) => {

    const [field] = useField(props)

    return (
        <>
            <label htmlFor={ props.id || props.name }>{label}</label>
            <select className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
