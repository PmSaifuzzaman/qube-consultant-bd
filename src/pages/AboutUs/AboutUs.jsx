import Navbar from "../../components/Navbar/Navbar";
import img1 from "../../assets/images/aboutUs.jpg"


const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-col">
                    <img src={img1} className=" rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold text-center">About Us</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;