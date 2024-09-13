import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';
import '../../assets/stylesheets/login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: (values) => {
            login(values.email, values.password);
        },
    });

    return (
        <div className="loginContainer">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="formContainer">
                        <h3 className="text-center">Login</h3>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? <div className="invalid-feedback">{formik.errors.password}</div> : null}
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                        <div className="text-center pt-3">
                            <p>Don't have an account? </p>
                            <Link to={"/register"}>Signup</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;
