import Navbar from "../../components/Navbar/Navbar";
import img1 from "../../assets/images/contactUs.jpg"
import { FaCarAlt, FaMailBulk, FaPhone } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";


const ContactUs = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero pt-24">
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
            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6137.916803201887!2d90.40948996888963!3d23.831853391891503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1708106846270!5m2!1sen!2sbd"  height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;