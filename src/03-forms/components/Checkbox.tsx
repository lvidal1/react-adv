import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    label: string;
    [x: string]: any;
}

export const Checkbox = ({ label, ...props }: Props) => {

    const [field] = useField({...props, type: 'checkbox'})

    return (
        <>
            <label htmlFor={ props.id || props.name }>
                <input type="checkbox" className="text-input" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
