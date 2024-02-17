import Navbar from "../../components/Navbar/Navbar";
import img1 from "../../assets/images/aboutUs.jpg"


const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero pt-24">
                <div className="hero-content flex-col lg:flex-col">
                    <img src={img1}  />
                    <div>
                        <h1 className="text-5xl font-bold text-center">About Us</h1>
                        <p className="py-6">Qube consultant bd. and his sister concern Qube Associates. is responsible  for Interior & Exterior design,
                            supervision & practical work implementation. Since 2013, we are
                            doing our outstanding performances successfully to satisfy our
                            honorable customers, it is our challenges to meet the requirements
                            & needs of our valued customers by ensuring them our quality,
                            commitment & services. We are always ready to give post hando-
                            ver services to our respected customers. A number of young, ener-
                            getic & experienced Architects & Designers are with our team
                            having well experienced a number of engineers & interior supervi-
                            sors & labors. Our field forces are enough experts to give you max-
                            imum satisfaction. A large number of prestigious works/ projects al-
                            ready we have successfully done in countrywide.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-center">Our Employee</h1>
                        <div className="lg:flex lg:gap-72 mt-5 ">
                            <div>
                                <h2 className="text-xl font-bold text-center underline">Management Section</h2>
                                <div>
                                    <p className="pt-4">1. Arghya Biswas <br />
                                        Chief Architect (BSc. architect)
                                    </p>
                                    <p className="pt-4">2. Moklesur Rahaman <br />
                                        Development and Procurement <br />
                                        BSS (HONs) MSS (Economics)

                                    </p>
                                    <p className="pt-4">3. Mohibul Hasan <br />
                                        Head of Construction BSc. In civil Engg.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-center underline">Technical Section</h2>
                                <div>
                                    <p className="pt-4">1. FIROZ AHMED <br />
                                        B.Arch Senior Architect

                                    </p>
                                    <p className="pt-4">2. SALMAN RAHMAN <br />
                                        B.Arch Architect
                                    </p>
                                    <p className="pt-4">3. Mizanur Rahman <br />
                                        Drafting Section
                                    </p>
                                    <p className="pt-4">4. FARIDUL ISLAM <br />
                                        Drafting Section <br />
                                        Civil Engineer
                                    </p>
                                    <p className="pt-4">5. Tofazzal Hossain <br />
                                        Sr.Engineer (BUET) CONSULTANT

                                    </p>
                                    <p className="pt-4">6. Jahangir Kabir <br />
                                        Diploma in Civil Engg. <br />
                                        Project manager
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;