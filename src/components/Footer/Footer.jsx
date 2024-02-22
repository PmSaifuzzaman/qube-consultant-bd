import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {

    const facebookUrl = "https://www.facebook.com/qubeconsultant";



    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <img className="w-36" src={logo} alt="" />
                    <p className="text-base text-gray-700 font-bold">Qube Consultant BD. <br /> Qube Associates.<br />Providing reliable services since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to={"/interior"} className="link link-hover">Interior</Link>
                    <Link to={"/building"} className="link link-hover">Building Design</Link>
                    <Link to={"/flat"} className="link link-hover">Flat buy-sell</Link>
                    <Link to={"/civil"} className="link link-hover">Civil Contructor</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to={"/"} className="link link-hover">Home</Link>
                    <Link to={"/aboutUs"} className="link link-hover">About us</Link>
                    <Link to={"/contactUs"} className="link link-hover">Contact Us</Link>
                    <a className="link link-hover">Jobs</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Office Address</h6>
                    <Link to={"/contactUs"} className="link link-hover">House #23, Road #05, Apt #1B (1st Floor) <br /> Nikunjo #02, Khilkhet, Uttara, Dhaka-1229 </Link>
                    <p className="font-bold">Cell no: +8801713063260  ,  +8801778470014</p>
                    <p className="font-bold">Email: threequbeconsultantltd@hotmail.com</p>

                    <div className="flex gap-4">
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 text-cyan-600 cursor-pointer">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 text-cyan-600 cursor-pointer">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 text-cyan-600 cursor-pointer">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 text-cyan-600 cursor-pointer">
                            <FaWhatsapp className="text-2xl" />
                        </a>
                    </div>

                </nav>
            </footer>
            <p className="bg-base-200 text-center pb-2 font-bold">Copyright © 2024 - All right reserved by Qube Consultant BD.</p>
        </>

    );
};

export default Footer;