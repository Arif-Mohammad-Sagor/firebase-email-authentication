import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from './ContextProvider'

const Header = () => {
  const { logOut, user } = useContext(userContext);

  console.log(user);

  const handleLogout = () => {
       logOut()
       .then(() => {})
       .catch(() => {});
  }
  return (
    <div>
      <div className="navbar bg-slate-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Context API</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>

            {user ? (
              <li>
                <small className="text-xs">{user.email}</small>
                <Link onClick={handleLogout} to="/register">
                  LogOut
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header