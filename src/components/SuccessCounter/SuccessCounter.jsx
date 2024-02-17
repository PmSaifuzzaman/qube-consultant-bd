import { FaChartLine } from "react-icons/fa";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { BiBuildingHouse } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const SuccessCounter = () => {
    return (
        <>
            <div className="text-center my-5">
                <h2 className="text-4xl font-bold ">Success Counter</h2>

            </div>
            <div className="mb-10 grid grid-cols-4 divide-x-2 divide-current border-current border-t-2 border-b-2 bg-cyan-50 ">
                <div className="text-center space-y-2 py-10">
                    <FaChartLine className="mx-auto text-6xl text-cyan-600 bg-cyan-200 p-3 rounded-full" />
                    <h2 className="text-3xl font-bold">13+</h2>
                    <p className="text-xl font-bold"> Years of Experience</p>
                </div>
                <div className="text-center py-10 space-y-2">
                    <PiProjectorScreenChartDuotone className="mx-auto text-6xl text-cyan-600 bg-cyan-200 p-3 rounded-full" />
                    <h2 className="text-3xl font-bold">10+</h2>
                    <p className="text-xl font-bold">Ongoing Projects</p>
                </div>
                <div className="text-center space-y-2 py-10">
                    <BiBuildingHouse className="mx-auto text-6xl text-cyan-600 bg-cyan-200 p-3 rounded-full" />
                    <h2 className="text-3xl font-bold">300+</h2>
                    <p className="text-xl font-bold">Construction Project</p>
                </div>
                <div className="text-center space-y-2 py-10">
                    <HiOutlineEmojiHappy className="mx-auto text-6xl text-cyan-600 bg-cyan-200 p-3 rounded-full" />
                    <h2 className="text-3xl font-bold">2000+</h2>
                    <p className="text-xl font-bold">Happy Clients</p>
                </div>
            </div>
        </>
    );
};

export default SuccessCounter;