import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="./logo.png" alt="" />
          <span className="font-bold">SoloSphere</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "bg-red-400" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "bg-red-400" : "")}
              to="/alljobs"
            >
              All Jobs
            </NavLink>
          </li>

          {!user && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "bg-red-400" : "")}
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50 pl-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div
                className="w-10 rounded-full"
                title={user?.displayName || "Unknown User"}
              >
                <img
                  referrerPolicy="no-referrer" //Used when importing issue from images from google
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="text-center font-semibold justify-center">{user?.displayName}</div>
              </li>
              <li>
                <Link to='/addjob' className="justify-between">Add Job</Link>
              </li>
              <li>
                <Link to='/mypostedjob'>My Posted Jobs</Link>
              </li>
              <li>
                <Link to='/mybids'>My Bids</Link>
              </li>
              <li>
                <Link to='/bidrequest'>Bid Requests</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={() => logOut()}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
