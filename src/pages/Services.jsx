import Circle from "../components/Circle"
import Line from "../components/Line"

const Services = () => {
    return(
        <div className="services container">

                <div className="row mb-5">
                    <div className="col-lg-6">
                        <div className="header d-flex mb-2">
                            <Circle />
                            <h1 className="fw-bold ps-3">OUR <br></br> SERVICES</h1>
                        </div>
                        <div className="header d-flex flex-column"> 
                            <Line />
                            <p className=" services_info">Our photography services encompass a wide range of offerings, including weddings, portraits, events, commercial projects, and more. With a blend of technical proficiency and artistic vision, we strive to deliver exceptional images that capture the essence and emotion of every moment. </p>
                        </div>
                    </div>
                    <div className="mt-5 mt-lg-0 col-lg-6">
                        <div className="text-end">
                            <img src="/assets/images/services/weddings.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="services_type wedding p-4 bg-white">
                            <h1>WEDDINGS</h1>
                            <div className=" d-flex justify-content-between align-items-center">
                                <p>Explore Service</p>
                                <a href="#" className="text-dark"> 
                                    <i  className="bi bi-arrow-right-circle fs-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            <div className=" row m-lg-5">
                <div className="move_up col-lg-6 mb-5 mb-lg-0">
                    <div className="">
                        <img src="/assets/images/services/lifestyle.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="services_type lifestyle p-4 bg-white">
                        <h1>LIFESTYLE</h1>
                        <div className=" d-flex justify-content-between align-items-center">
                            <p>Explore Service</p>
                            <a href="#" className="text-dark"> 
                                <i  className="bi bi-arrow-right-circle fs-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-end">
                        <img src="/assets/images/services/portrait.png" alt="" className="img-fluid "/>
                    </div>
                    <div className="services_type portrait p-4 bg-white">
                        <h1>PORTRAIT</h1>
                        <div className=" d-flex justify-content-between align-items-center">
                            <p>Explore Service</p>
                            <a href="#" className="text-dark"> 
                                <i  className="bi bi-arrow-right-circle fs-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="move_up col-lg-6 mb-5 mb-lg-0">
                    <div className="">
                        <img src="/assets/images/services/fashion.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="services_type fashion p-4 bg-white">
                        <h1>FASHION</h1>
                        <div className=" d-flex justify-content-between align-items-center">
                            <p>Explore Service</p>
                            <a href="#" className="text-dark"> 
                                <i  className="bi bi-arrow-right-circle fs-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-0 mt-lg-5 col-lg-6">
                    <div className="text-end">
                        <img src="/assets/images/services/graduation.png" alt="" className="img-fluid "/>
                    </div>
                    <div className="services_type graduation p-4 bg-white">
                        <h1>GRADUATION</h1>
                        <div className=" d-flex justify-content-between align-items-center">
                            <p>Explore Service</p>
                            <a href="#" className="text-dark"> 
                                <i  className="bi bi-arrow-right-circle fs-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services

