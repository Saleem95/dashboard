// import React from "react";
// import { FaBell, FaCog, FaSearch } from 'react-icons/fa';
// import { FaRegMessage } from "react-icons/fa6";
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const profilePhotoUrl = '/images/pic1.jpg';

//   return (
//     <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       <div className="flex items-center w-1/2 max-w-md">
//         <div className="relative w-full">
//           <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//             <FaSearch className="text-gray-400" />
//           </span>
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded w-full focus:outline-none focus:bg-gray-600"
//           />
//         </div>
//       </div>
//       <div className="header">
//         <nav>
//           <ul className="flex space-x-4">
//             <li className=" bg-gray-900 rounded-full p-2">
//               <NavLink to="/message" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
//                 <FaRegMessage className="w-10 size-5" />
//               </NavLink>
//             </li>
//             <li className=" bg-gray-900 rounded-full p-2">
//               <NavLink to="/settings" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
//                 <FaCog className="w-10 size-5" />
//               </NavLink>
//             </li>
//             <li className=" bg-gray-900 rounded-full p-2">
//               <NavLink to="/notification" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
//                 <FaBell className="w-10 size-5" />
//               </NavLink>
//             </li>
//             <li className=" bg-gray-900 rounded-full p-2">
//               <NavLink to="/profile" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
//                 <img
//                   src={profilePhotoUrl}
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full"
//                 />
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import { FaBell, FaCog, FaSearch } from 'react-icons/fa';
import { FaRegMessage } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const profilePhotoUrl = '/images/pic1.jpg';

  return (
    <div className="header-main bg-gray-800  text-white p-4 flex justify-between items-center">

      {/* Search Bar */}
      <div className="flex items-center w-full md:w-1/2 max-w-md">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded w-full focus:outline-none focus:bg-gray-600"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="header sm:block space-x-4">
        <nav>
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 bg-gray-900 rounded-full p-2">
              <NavLink to="/message" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
                <FaRegMessage className="w-10 size-5" />
              </NavLink>
            </li>
            <li className="w-10 h-10 bg-gray-900 rounded-full p-2">
              <NavLink to="/settings" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
                <FaCog className="w-10 size-5" />
              </NavLink>
            </li>
            <li className="w-10 h-10 bg-gray-900 rounded-full p-2">
              <NavLink to="/notification" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
                <FaBell className="w-10 size-5" />
              </NavLink>
            </li>
            <li className="bg-gray-900 rounded-full p-2">
              <NavLink to="/profile" className={({ isActive }) => isActive ? "flex items-center text-blue-500" : "flex items-center"}>
                <img
                  src={profilePhotoUrl}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
