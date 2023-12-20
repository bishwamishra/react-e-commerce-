import { Link, NavLink } from "react-router-dom";
import "../layout/Navbar.css";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";

import {
  BrightnessAltHigh,
  Cart,
  Heart,
  MoonFill,
} from "react-bootstrap-icons";
import useThemeContext from "../../hook/useThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import React from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const { userInfo, handleLogoutFn } = useContext(AuthContext);
  // console.log(userInfo, "userInfo from navbar");
  const { handleDarkMode, isDarkMode } = useThemeContext();
  const handleToggleDarkMode = () => {
    handleDarkMode();
  };

  return (
    // <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    //   <div className="container">
    //     <NavLink className="navbar-brand" to="/">
    //       Home
    //     </NavLink>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarColor01"
    //       aria-controls="navbarColor01"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarColor01">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <div onClick={handleToggleDarkMode}>
    //             {isDarkMode ? (
    //               <MoonFill color="#ffffff" size={25} />
    //             ) : (
    //               <BrightnessAltHigh color="#ffffff" size={25} />
    //             )}
    //           </div>
    //         </li>
    //         {userInfo?.id && userInfo?.isAdmin && (
    //           <>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="/admin/dashboard">
    //                 Dashboard
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <button
    //                 onClick={() => handleLogoutFn()}
    //                 className="nav-link"
    //                 to="/auth/login"
    //               >
    //                 Logout
    //               </button>
    //             </li>
    //           </>
    //         )}

    //         {userInfo?.id && !userInfo?.isAdmin && (
    //           <>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="/my-account/profile">
    //                 My account
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="/my-account/wishlist">
    //                 <Heart />
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="/my-account/cart">
    //                 <Cart />
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <button
    //                 onClick={() => handleLogoutFn()}
    //                 className="nav-link"
    //                 to="/auth/login"
    //               >
    //                 Logout
    //               </button>
    //             </li>
    //           </>
    //         )}

    //         {!userInfo.accessToken && (
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/auth/login">
    //               Login
    //             </NavLink>
    //             <div className="container ">
    //               <NavLink to="/auth/admin-login">Admin Login</NavLink>
    //             </div>
    //           </li>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {userInfo?.id && userInfo?.isAdmin && (
          <>
            <li>
              <Link style={{ textDecoration: "none" }} to="/admin/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <NavLink
                className="nav-link"
                style={{ textDecoration: "none" }}
                to="/auth/login"
              >
                LogOut
              </NavLink>
            </li>
          </>
        )}

        {/* {!userInfo.accessToken && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/auth/login">
              Login
            </NavLink>
            <div className="container ">
              <NavLink to="/auth/admin-login">Admin Login</NavLink>
            </div>
          </li>
        )} */}

        {!userInfo.accessToken && (
          <div className="nav-login-cart">
            <li>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/auth/admin-login"
              >
                <button>Admin Login</button>
              </NavLink>
            </li>
            <NavLink className="nav-link" to="/auth/login">
              Login
            </NavLink>
            <li>
              <Link style={{ textDecoration: "none" }} to="/cart">
                <img src={cart} alt="cart-icon" />
              </Link>
              <div className="nav-cart-count">0</div>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
