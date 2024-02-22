import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import SuccessCounter from "../SuccessCounter/SuccessCounter";


const Home = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <SuccessCounter></SuccessCounter>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;