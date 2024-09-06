import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const userInfo = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
        dispatch(logout());
    };

    if (!userInfo) {
        return <div>Please log in to view this page.</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Welcome, {userInfo.username || userInfo.name || 'User'}!</p>
            {userInfo.email && <p>Email: {userInfo.email}</p>}

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default User;