import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import civil from "../../assets/Civil/civil.png"


const Civil = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-28">
                <img className="mx-auto" src={civil} alt="Civil-image" />
            </div>
            <h2 className="text-center text-xl font-bold pb-5">Civil Content Comming Soon...</h2>
            <Footer></Footer>
        </div>
    );
};

export default Civil;