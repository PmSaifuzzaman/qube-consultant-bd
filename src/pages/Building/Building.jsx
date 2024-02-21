import img1 from "../../assets/Building/1.png"
import img2 from "../../assets/Building/2.jpg"
import img3 from "../../assets/Building/3.jpg"
import img4 from "../../assets/Building/4.jpg"
import img5 from "../../assets/Building/kiam 4.jpg"
import img6 from "../../assets/Building/kiam ren 7.jpg"
import Footer from "../../components/Footer/Footer"



const Building = () => {
    return (
        <div>
            
            <div className=" building-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Card 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img1} alt="Building" className="rounded-xl h-52 w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Office Building Design & Development</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img2} alt="Shoes" className="rounded-xl h-52 w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Office Building Design & Development</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img3} alt="Shoes" className="rounded-xl h-52 w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Office Building Design & Development</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img4} alt="Shoes" className="rounded-xl h-52 w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Office Building Design & Development</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img5} alt="Shoes" className="rounded-xl h-52 w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Office Building Design & Development</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>
                {/* Card 6 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img6} alt="Building" className="rounded-xl h-52 w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kiam Metal Office Building Design & Development</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>
                {/* Card 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>
                {/* Card 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>
                {/* Card 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <p className="pl-2">5.0 ( 3 Reviews )</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Building;