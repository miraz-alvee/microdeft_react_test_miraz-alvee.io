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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="card bg-base-100 shadow-md p-4">
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <p className="text-sm text-gray-700 mb-4">{course.description}</p>
                        <div className="badge" style={{ backgroundColor: course.badge_color }}>
                            {course.badge_text}
                        </div>
                        <p className="text-sm mt-4">Instructor: {course.instructor_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayCourses;
