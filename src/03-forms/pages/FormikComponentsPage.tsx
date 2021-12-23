import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponentsPage = () => {

    return (
        <div>
            <h1>Formik Yup</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string()
                        .required('Required')
                        .notOneOf(['Internship'], 'Option not allowed'),
                })}
            >
                {formik => (

                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email"  component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select" >
                            <option value="">Select</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Internship">Internship</option>
                        </Field>
                        <ErrorMessage name="jobType"  component="span" />


                        <label htmlFor="terms">Terms & Conditions
                        <Field name="terms" id="terms" type="checkbox" />
                        </label>
                       
                        <ErrorMessage name="terms"  component="span" />

                        <button type="submit">Submit</button>
                    </Form>

                )}

            </Formik>


        </div>
    )
}
