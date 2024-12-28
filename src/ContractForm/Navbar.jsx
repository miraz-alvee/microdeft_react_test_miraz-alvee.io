import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className='pl-10 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F40752] to-[#F9AB8F]'>Microdeft</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 pr-10">
            
          <Link to="/logout" className="btn btn-primary">Logout</Link>
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;