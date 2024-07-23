import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup, selectUserStatus, selectUserError } from '../../features/userSlice';
import '../Login/login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(selectUserStatus);
    const error = useSelector(selectUserError);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            dispatch(login({ email: formData.email, password: formData.password, username:formData.username }))
                .unwrap()
                .then(() => navigate('/user'))
                .catch((error) => console.error('Failed to login:', error));
        } else {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords don't match");
                return;
            }
            dispatch(signup({ 
                username: formData.username, 
                email: formData.email, 
                password: formData.password 
            }))
                .unwrap()
                .then(() => toggleForm())
                .catch((error) => console.error('Failed to signup:', error));
        }
    };

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div className='mb-5'>
            <div className={isLogin ? 'login container' : 'signup container'}>
                <div className="row">
                    {isLogin ? (
                        <>
                            <div className="col">
                                <div className='title p-3 m-1'>Sign In</div>
                                <form className='p-3' onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="InputEmail" className="form-label">Email</label>
                                        <input 
                                            name="email"
                                            type="email"
                                            className="form-control inputs" 
                                            id="InputEmail" 
                                            placeholder='Email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="InputPassword" className="form-label">Password</label>
                                        <input 
                                            name="password"
                                            type="password" 
                                            className="form-control inputs" 
                                            id="InputPassword" 
                                            placeholder='Password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="" disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Signing In...' : 'Sign In'}
                                    </button>
                                    {error && <p className="text-danger mt-2">{error}</p>}
                                </form>
                            </div>
                            <div className="col login-side text-center">
                                <div className="side-text">
                                    <div className="welcome mb-1">Welcome Back!</div>
                                    <div>Don't have an account?</div>
                                    <div className="sign-up mt-4 p-2" onClick={toggleForm}>Sign Up</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="login-side col text-center">
                                <div className="side-text">
                                    <div className="welcome mb-1">Create your account</div>
                                    <div>Already have an account?</div>
                                    <div className="sign-up mt-4 p-2" onClick={toggleForm}>Log In</div>
                                </div>
                            </div>
                            <div className="col">
                                <div className='title p-1 m-1'>Sign Up</div>
                                <form className='p-3' onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <label htmlFor="InputUsername" className="form-label">Username</label>
                                        <input 
                                            name="username"
                                            type="text" 
                                            className="form-control inputs" 
                                            id="InputUsername" 
                                            placeholder='Username'
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="InputEmail1" className="form-label">Email</label>
                                        <input 
                                            name="email"
                                            type="email" 
                                            className="form-control inputs" 
                                            id="InputEmail1" 
                                            placeholder='Email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="InputPassword1" className="form-label">Password</label>
                                        <input 
                                            name="password"
                                            type="password" 
                                            className="form-control inputs" 
                                            id="InputPassword1" 
                                            placeholder='Password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="InputPasswordConfirm" className="form-label">Confirm Password</label>
                                        <input 
                                            name="confirmPassword"
                                            type="password" 
                                            className="form-control inputs" 
                                            id="InputPasswordConfirm" 
                                            placeholder='Confirm Password'
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="" disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Signing Up...' : 'Sign Up'}
                                    </button>
                                    {error && <p className="text-danger mt-2">{error}</p>}
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;