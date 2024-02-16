import Navbar from "../../components/Navbar/Navbar";
import img1 from "../../assets/images/contactUs.jpg"
import { FaCarAlt, FaMailBulk, FaPhone } from "react-icons/fa";


const ContactUs = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row lg:gap-36">
                    <img src={img1} className="max-w-sm  " />
                    <div>
                        <div className="text-center ">
                            <h2 className="text-7xl flex justify-center items-center pb-4"><FaCarAlt className="text-cyan-400"></FaCarAlt></h2>
                            <h2 className="font-bold text-3xl pb-2">Visit Us</h2>
                            <p className="font-bold">House #23, Road #05, Apt #1B (1st Floor)
                              <br/>  Nikunjo #02, Khilkhet, Uttara, Dhaka-1229
                            </p>
                        </div>
                        <div className="text-center mt-10 ">
                            <h2 className="text-7xl flex justify-center items-center pb-4"><FaPhone className="text-cyan-400"></FaPhone> </h2>
                            <h2 className="font-bold text-3xl pb-2">Call Us</h2>
                            <p className="font-bold">+8801713063260</p>
                        </div>
                        <div className="text-center mt-10 mb-7 ">
                            <h2 className="text-7xl flex justify-center items-center pb-4"><FaMailBulk className="text-cyan-400"></FaMailBulk> </h2>
                            <h2 className="font-bold text-3xl pb-2">Email Us</h2>
                            <p className="font-bold">threequbeconsultantltd@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;