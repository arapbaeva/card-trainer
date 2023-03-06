import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export const Registration = () => {
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
                message: 'Must min 5 characters',
            }),
            confirmPassword: Yup.string()
                .required("Please confirm your password")
                .oneOf([Yup.ref('password'), ], "Passwords do not match"),

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2)); //thunk для регистр
            formik.resetForm()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}

            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                type="password"
                {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
            ) : null}
            <button type="submit">Submit</button>
        </form>
    );
};