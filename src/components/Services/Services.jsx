import interior from "../../assets/Services/interior.png"
import building from "../../assets/Services/building.jpg"
import flat from "../../assets/Services/flat.jpg"
import civil from "../../assets/Services/civil-contractor.jpg"
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div>
            <div className="text-center pb-10">
                <h2 className="text-4xl font-bold py-2">Services</h2>
                <p>Here we have our best featured services. Along with this we also offer different services which makes our lifestyle living worth.</p>
            </div>
            <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
                <div >
                    <Link to={"/interior"}>
                        <img src={interior} alt="" className="h-56" />
                        <h2 className="text-xl font-bold pt-3">Interior</h2>
                    </Link>
                </div>
                <div >
                    <Link to={"/building"}>
                        <img src={building} alt="" className="h-56" />
                        <h2 className="text-xl font-bold pt-3">Building Design & Development</h2>
                    </Link>
                </div>
                <div >
                    <img src={flat} alt="" className="h-56" />
                    <h2 className="text-xl font-bold pt-3">Flat buy-sell</h2>
                </div>
                <div >
                    <img src={civil} alt="" className="h-56" />
                    <h2 className="text-xl font-bold pt-3">Civil Contractor</h2>
                </div>
            </div>
        </div>
    );
};

export default Services;