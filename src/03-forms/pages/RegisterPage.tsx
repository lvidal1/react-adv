import React, { } from 'react';
import { useForm } from '../hooks/useForm';
import "../styles/styles.css";

export const RegisterPage = () => {

    const { name, email, password, passwordConfirm, onChange, onSubmit, onResetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }); 

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} className={`has-error`} />
                { name.trim().length <= 0 && <span>It is required!</span> }
                <input type="text" name="email" placeholder="Email" value={email} onChange={onChange} className={ `has-error`} />
                { !isValidEmail(email) && <span>Email is invalid!</span> }
                <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
                { password.trim().length <= 0 && <span>It is required!</span> }
                { password.trim().length < 6 && password.trim().length > 0 && <span>It must contain at least 6 chars!</span> }
                <input type="password" name="passwordConfirm" placeholder="Confirm Password" value={passwordConfirm} onChange={onChange} />
                { passwordConfirm.trim().length <= 0 && <span>It is required!</span> }
                { passwordConfirm !== password && passwordConfirm.trim().length > 0 && <span>Password should match!</span> }
                <button type="submit" >Register</button>
                <button type="button" onClick={onResetForm}>Clear</button>
            </form>
        </div>
    )
}
