import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";

import App from "../App";
import Login from "../ContractForm/Login/Login";
import Register from "../ContractForm/Register/Register";
import CreateCourse from "../Courses/CreateCourse.jsx/CreateCourse";
import DisplayCourses from "../Courses/DisplayCourses/DisplayCourses";
import LogOut from "../ContractForm/Login/LogOut";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Register></Register>
      },
      {
        path:"/create-course" ,
        element: <CreateCourse></CreateCourse>
      },
      {
        path:"/display-courses",
        element:<DisplayCourses></DisplayCourses>
      },
      {
        path: '/logout',
        element:<LogOut></LogOut>
      }
       
     ],
  },
]);