import Circle from "../components/Circle"
import SmCircle from "../components/SmCircle"

const Projects = () => {
    return(
        <div className="projects container">

            <div className="header d-flex mb-5">
                <Circle />
                <h1 className="fw-bold ps-3">PROJECTS</h1>
            </div>

            <div className="row mb-5">
                <div className="right_projects col-lg-2 d-flex align-items-center">
                    <h1>WEDDING PHOTOSESSION</h1>
                </div>
                <div className="col-lg-10">
                    <div className="d-flex">
                        <p className="pe-3">Januar 10, 2022</p>
                        <SmCircle />
                        <p className="ps-3">Wedding</p>
                    </div>
                    <div className="">
                        <img src="/assets/images/projects/wedding_shot.png" alt="" className="img-fluid"/>
                        <div className="right_controls d-flex justify-content-between align-items-center bg-white p-4">
                            <p className="">See Project</p>
                                <a href="#" className="text-dark"> 
                                    <i  className="bi bi-arrow-right-circle fs-2"></i>
                                </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-10">
                    <div className="d-flex">
                        <p className="pe-3">Januar 10, 2022</p>
                        <SmCircle />
                        <p className="ps-3">Lifestyle</p>
                    </div>
                    <div className="">
                        <img src="/assets/images/projects/lifestyle_shot.png" alt="" className="img-fluid"/>
                        <div className="left_controls d-flex justify-content-between align-items-center bg-white p-4">
                            <p className="">See Project</p>
                                <a href="#" className="text-dark"> 
                                    <i  className="bi bi-arrow-right-circle fs-2"></i>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="left_projects col-lg-2 d-flex align-items-center order-first">
                    <h1>LIFESTYLE PHOTOSESSION</h1>
                </div>
            </div>

            <div className="row mb-5">
                <div className="right_projects col-lg-2 d-flex align-items-center">
                    <h1>PORTRAIT PHOTOSESSION</h1>
                </div>
                <div className="col-lg-10">
                    <div className="d-flex">
                        <p className="pe-3">Januar 10, 2022</p>
                        <SmCircle />
                        <p className="ps-3">Portrait</p>
                    </div>
                    <div className="">
                        <img src="/assets/images/projects/portrait_shot.png" alt="" className="img-fluid"/>
                        <div className="right_controls d-flex justify-content-between align-items-center bg-white p-4">
                            <p>See Project</p>
                                <a href="#" className="text-dark"> 
                                    <i  className="bi bi-arrow-right-circle fs-2"></i>
                                </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-10">
                    <div className="d-flex">
                        <p className="pe-3">Januar 10, 2022</p>
                        <SmCircle />
                        <p className="ps-3">Fashion</p>
                    </div>
                    <div className="">
                        <img src="/assets/images/projects/fashion_shot.png" alt="" className="img-fluid"/>
                        <div className="left_controls d-flex justify-content-between align-items-center bg-white p-4">
                            <p className="">See Project</p>
                                <a href="#" className="text-dark"> 
                                    <i  className="bi bi-arrow-right-circle fs-2"></i>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="left_projects col-lg-2 d-flex align-items-center order-first">
                    <h1>FASHION PHOTOSESSION</h1>
                </div>
            </div>

            <div className="row mb-5">
                <div className="right_projects col-lg-2 d-flex align-items-center">
                    <h1>GRADUATION PHOTOSESSION</h1>
                </div>
                <div className="col-lg-10">
                    <div className="d-flex">
                        <p className="pe-3">Januar 10, 2022</p>
                        <SmCircle />
                        <p className="ps-3">Graduation</p>
                    </div>
                    <div className="">
                        <img src="/assets/images/projects/graduation_shot.png" alt="" className="img-fluid"/>
                        <div className="right_controls d-flex justify-content-between align-items-center bg-white p-4">
                            <p>See Project</p>
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

export default Projects

