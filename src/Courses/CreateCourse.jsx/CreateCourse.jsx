import React, { useState } from 'react';

const CreateCourse = () => {
    const [responseMessage, setResponseMessage] = useState("");

    const handleCreateCourse = async (event) => {
        event.preventDefault();
        const form = event.target;

        const courseData = {
            title: form.title.value,
            description: form.description.value,
            badge_text: form.badge_text.value,
            badge_color: form.badge_color.value,
            instructor_name: form.instructor_name.value,
        };

        const token = localStorage.getItem("authToken");

        try {
            const response = await fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(courseData),
            });
        
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to create course");
            }
        
            setResponseMessage("Course created successfully!");
            form.reset();
        } catch (error) {
            console.error("Error creating course:", error.message);
            setResponseMessage("Error: Unable to create course.");
        }
        
    };

    return (
        <div className="p-6 bg-base-200 min-h-screen flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-6">Create a New Course</h2>
            <form className="bg-base-100 p-8 shadow-lg rounded-lg w-full max-w-md" onSubmit={handleCreateCourse}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Course Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" placeholder="Course Description" className="textarea textarea-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Badge Text</span>
                    </label>
                    <input type="text" name="badge_text" placeholder="Badge Text" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Badge Color</span>
                    </label>
                    <input type="text" name="badge_color" placeholder="Badge Color (e.g., #ff0000)" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" name="instructor_name" placeholder="Instructor Name" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Create Course</button>
                </div>
            </form>
            {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
        </div>
    );
};

export default CreateCourse;
