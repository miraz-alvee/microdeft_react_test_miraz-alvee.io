import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }, [navigate]);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <h1 className="text-3xl font-bold">Logging out...</h1>
        </div>
    );
};

export default LogOut;