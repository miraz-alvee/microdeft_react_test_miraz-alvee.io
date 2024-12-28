import React, { useState } from 'react';
import image from '../../../public/login.svg'
import { Link } from 'react-router-dom';

const Register = () => {
    const [responseMessage, setResponseMessage] = useState("");

    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const userData = {
            name,
            email,
            password,
        };

        try {
            const response = await fetch("https://react-interview.crd4lc.easypanel.host/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const contentType = response.headers.get("content-type");

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                setResponseMessage(`Registration successful: ${data.message}`);
            } else {
                const text = await response.text();
                throw new Error(`Unexpected response format: ${text}`);
            }

            form.reset();
        } catch (error) {
            setResponseMessage(error.message);
        }

    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-full mr-12">
                    <img src={image} alt="" />
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold p-5">Register now!</h1>
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already have an Account! <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
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

export default Register;
