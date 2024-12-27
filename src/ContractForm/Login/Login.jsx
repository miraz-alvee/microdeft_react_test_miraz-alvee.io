import React, { useState } from 'react';
import image from '../../../public/login.svg'
import { Link, Navigate } from 'react-router-dom';

const Login = ({ }) => {
    const [responseMessage, setResponseMessage] = useState("");

    const handleSignIn = async (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        const userData = {

            email,
            password,
        };

        try {
            const response = await fetch("https://react-interview.crd4lc.easypanel.host/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) throw new Error("Invalid credentials");

            const data = await response.json();
            localStorage.setItem("authToken", data.token);
            setResponseMessage("Login successful!");

            form.reset();
            Navigate("/display-courses");
        } catch (error) {
            setResponseMessage(error.message);
        }

    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">

                <div className="w-full mr-12">
                    <img src={image} alt="" />
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center p-5">Login now!</h1>
                    <form className="card-body" onSubmit={handleSignIn}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>

                    {responseMessage && (
                        <div className="mt-4 text-center">
                            <p className="text-lg text-green-600">{responseMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;