import { Link } from "react-router-dom";
import errorImg from "../../assets/ErrorPage/errorpage.png"
import { FaArrowRight } from "react-icons/fa";

const Errorpage = () => {
    return (
        <div >
            <Link to={"/"} className="text-blue-900 flex justify-center items-center gap-1 underline pt-5">Go Back to Home <FaArrowRight></FaArrowRight></Link>
            <img className="mx-auto" src={errorImg} alt="404" />
        </div>
    );
};

export default Errorpage;