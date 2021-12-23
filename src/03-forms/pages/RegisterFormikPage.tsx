import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { TextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Formik Yup</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirm: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Must be 2 characters or more')
                        .max(15, 'Must be 2 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .min(6, 'Must be 6 characters or more')
                        .required('Required'),
                    passwordConfirm: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Required'),
                })}
            >
                {({handleReset}) => (

                    <Form>

                        <TextInput label="Name" name="name" placeholder='Write...' />

                        <TextInput label="Email" name="email" type="email" placeholder='Write...' />

                        <TextInput label="Password" name="password" type="password" placeholder='Write...' />

                        <TextInput label="Confirm Password" name="passwordConfirm" type="password" placeholder='Write...' />

                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>

                )}

            </Formik>


        </div>
    )
}
