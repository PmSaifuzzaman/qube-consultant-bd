import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png"
import { FaFacebook } from "react-icons/fa";


const Navbar = () => {


    const facebookUrl = "https://www.facebook.com/qubeconsultant";



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Contact us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Services
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <Link><img className="h-24" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Services
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 text-cyan-600 cursor-pointer">
                    <FaFacebook className="text-5xl " />
                </a>
            </div>
        </div>
    );
};

export default Navbar;