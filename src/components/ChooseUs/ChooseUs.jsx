import badge from "../../assets/icon/badge.png"
import experiance from "../../assets/icon/experience.png"
import honest from "../../assets/icon/happy client.png"
import doller from "../../assets/icon/Dollar.png"
import consultancy from "../../assets/icon/consultancy.png"
import handover from "../../assets/icon/handover.png"

const ChooseUs = () => {
    return (
        <>
            <div className="text-center mt-10">
                <h2 className="text-4xl font-bold py-2">Why Choose Qube Consultant BD.</h2>
                <p>Because our most important issue is YOU! We are focused on your taste, lifestyle, and your budget.
                    <br /> We ensure exclusive design, quality materials & great service.</p>
            </div>

            <div className="card-container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 px-5">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={badge} alt="Shoes" className="w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Quality Works</h2>
                        <p>No compromise with quality of materials, quality of finishing, quality of services. A passionate team ensures quality in every aspect.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={experiance} alt="Shoes" className="w-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Really Experienced</h2>
                        <p>13 years experienced, highly professional, a expert team is waiting here to turn your dream project into reality.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={honest} alt="Shoes" className="w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Honest & Dependable</h2>
                        <p>Transparent from design phase to finishing, strictly follow clients approved design & BOQ. No record of failing delivery schedule.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={doller} alt="Shoes" className="w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Best Rates</h2>
                        <p>We design spaces that reflect your likes-your lifestyle and we pride ourselves on doing everything within your budget.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={consultancy} alt="Shoes" className="w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Free Consultancy</h2>
                        <p>We donot charge for giving wings to your dream. We provide free consultancy/verbal discussion to grace your dream space.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={handover} alt="Shoes" className="w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">On Time Handover</h2>
                        <p>We value your time, money & dream. We assure on time delivery otherwise we are ready to offer a late penalty.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ChooseUs;