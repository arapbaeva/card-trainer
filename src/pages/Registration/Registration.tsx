import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/store";
import {registerTC} from "../../features/Registration/register-reducer";
import './Registration.scss';



export const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Password is required').matches(/.{8,}/, {
                excludeEmptyString: true,
                message: 'Must min 8 characters',
            }),
            confirmPassword: Yup.string()
                .required("Please confirm your password")
                .oneOf([Yup.ref('password'),], "Passwords do not match"),

        }),
        onSubmit: data => {
            formik.resetForm()
            dispatch(registerTC(data))
            navigate('/login');
        },
    });

    return (
        <div className={'form signup'}>
            <div className={'form-content'}>
                <header>Sign Up</header>
                <form onSubmit={formik.handleSubmit}>
                    <div className={'field input-field'}>
                        {/*<label htmlFor="email">Email Address</label>*/}
                        <input
                            id="email"
                            type="email"
                            className={'input'}
                            placeholder={'Email'}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className={'field input-field'}>
                        <input
                            id="password"
                            className={'password'}
                            placeholder={'Password'}
                            type={showPassword ? 'text' : 'password'}
                            {...formik.getFieldProps('password')}

                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                        <i className='bx bxs-show' onClick={toggleShowPassword}></i>
                    </div>

                    <div className={'field input-field'}>
                        <input
                            id="confirmPassword"
                            className={'password'}
                            placeholder={'Confirm password'}
                            type={showConfirmPassword ? 'text' : 'password'}
                            {...formik.getFieldProps('confirmPassword')}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div>{formik.errors.confirmPassword}</div>
                        ) : null}
                        <i className='bx bxs-show' onClick={toggleShowConfirmPassword}></i>

                    </div>
                    <div className={'field button-field'}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>

                <div className={'form-link'}>
                    <span>Already have an account?</span>

                        <div>
                            <a href="#" className="link login-link">Sign In</a>
                        </div>

                </div>
            </div>

        </div>

    );
};