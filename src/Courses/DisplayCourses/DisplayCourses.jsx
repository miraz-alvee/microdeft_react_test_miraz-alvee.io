import React, { useEffect, useState } from 'react';

const DisplayCourses = () => {
    const [courses, setCourses] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            const token = localStorage.getItem("authToken");

            try {
                const response = await fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch courses");

                const data = await response.json();
                // console.log(data)
                setCourses(data.data.data);
            } catch (error) {
                setErrorMessage("Error: Unable to fetch courses.");
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="p-6 bg-base-200 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-6">Available Courses</h2>
            {errorMessage && <p className="text-center text-red-600">{errorMessage}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="card bg-base-100 shadow-lg hover:shadow-xl transform transition-transform hover:scale-105">
                            <div className="relative">
                                <img
                                    src="../../../public/terms.jpg" 
                                    alt={course.title}
                                    className="w-full h-48 object-cover rounded-t-lg"/>

                                <span
                                    className="absolute top-2 left-2 px-3 py-1 text-xs font-bold text-white rounded"
                                    style={{ backgroundColor: course.badge_color }}>
                                    {course.badge_text}
                                </span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                                <p className="text-sm font-medium text-gray-700">
                                    <span className="font-bold">Instructor:</span> {course.instructor_name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
       
    );
};

export default DisplayCourses;
