import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import flat from "../../assets/Flat/flat.png"


const Flat = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-20">
                <img className="mx-auto" src={flat} alt="Civil-image" />
            </div>
            <h2 className="text-center text-xl font-bold pb-5">Flat Content Comming Soon...</h2>
            <Footer></Footer>
        </div>
    );
};

export default Flat;