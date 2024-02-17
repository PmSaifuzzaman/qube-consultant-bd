import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SuccessCounter from "../SuccessCounter/SuccessCounter";


const Home = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <SuccessCounter></SuccessCounter>
            <Footer></Footer>
        </div>
    );
};

export default Home;