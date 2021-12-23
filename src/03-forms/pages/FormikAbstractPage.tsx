import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { TextInput, Select, Checkbox } from '../components';

export const FormikAbstractPage = () => {

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

                        <TextInput label="First Name" name="firstName" placeholder='Write...' />

                        <TextInput label="Last Name" name="lastName" placeholder='Write...' />

                        <TextInput label="Email" name="email" type="email" placeholder='Write...' />

                        <Select name="jobType" label={'Job Type'} >
                            <option value="">Select</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Internship">Internship</option>
                        </Select>

                        <Checkbox name="terms" id="terms" label="Terms & Conditions" />

                        <button type="submit">Submit</button>
                    </Form>

                )}

            </Formik>


        </div>
    )
}
