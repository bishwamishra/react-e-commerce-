import { NavLink } from "react-router-dom";
import { FaHome, FaList, FaUsers, FaBox, FaTags, FaUser } from "react-icons/fa";
import "../layout/Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="glass">
      <div className="d-flex flex-column flex-shrink-0 p-3  me-2 sidebar">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none"
        >
          <img src={logo} alt="logo" />
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="d-flex">
            <NavLink
              exact
              to="/"
              className="nav-link link-dark d-flex"
              activeClassName="bg-primary text-white"
            >
              <FaHome className="me-2" />
              <span>Home Page</span>
            </NavLink>
          </li>
          <li className="d-flex">
            <NavLink
              exact
              to="/admin/dashboard"
              className="nav-link link-dark d-flex"
              activeClassName="bg-primary text-white"
            >
              <FaHome className="me-2" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="d-flex ">
            <NavLink
              to="/admin/orders/list"
              className="nav-link link-dark d-flex"
              activeClassName="bg-primary text-white"
            >
              <FaList className="me-2" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li className="d-flex ">
            <NavLink
              to="/admin/employees/list"
              className="nav-link link-dark d-flex"
              activeClassName="bg-primary text-white"
            >
              <FaUsers className="me-2" />
              <span>Employees</span>
            </NavLink>
          </li>
          <li className="d-flex ">
            <NavLink
              to="/admin/products/list"
              className="nav-link link-dark d-flex"
              activeClassName="bg-primary text-white"
            >
              <FaBox className="me-2" />
              <span>Products</span>
            </NavLink>
          </li>
          <li className="d-flex ">
            <NavLink
              to="/admin/categories/list"
              className="nav-link link-dark d-flex"
              activeClassName="bg-primary text-white"
            >
              <FaTags className="me-2" />
              <span>Categories</span>
            </NavLink>
          </li>
          <li className="d-flex ">
            <NavLink
              to="/admin/customers/list"
              className="nav-link link-dark d-flex"
              activeClassName="bg-primary text-white"
            >
              <FaUser className="me-2" />
              <span>Customers</span>
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
