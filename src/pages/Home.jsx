import { NavLink } from "react-router-dom"
import Circle from "../components/Circle"
import Line from "../components/Line"
import Logo from "../components/Logo"
import LogoWhite from "../components/LogoWhite"
import SmCircle from "../components/SmCircle"

const Home = () => {
    return(
        <div className="home container">

            <div className="hero mb-5">
                <div className="header d-flex mb-2">
                    <Circle />
                    <h1 className="fw-bold ps-3">CRAFTING DIGITAL <br></br> EXPIERNCE</h1>
                </div>
                <div className="header d-flex align-items-center">
                    <p className="pe-3">PHOTOGRAPHY</p> 
                    <Line />
                </div>
                <img src="/assets/images/home_header.png" alt="" className="img-fluid"/>
            </div>

            <div className="about">
                <div className="header d-flex mb-2">
                    <SmCircle/>
                    <h4 className="fw-bold ps-3">ABOUT</h4>
                </div>
                <div className="row">
                    <div className="mb-4 col-lg-6">
                        {/* <div className="d-flex align-items-center my-3">
                            <h1 className="fw-bold my-2 pe-3">
                                PHOTOBY 
                                <img src="/assets/images/logo.png" className="ps-2" alt="" />
                            </h1>
                        </div> */}
                        <img src="/assets/images/home_about.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6">
                        <p className="ms-0 ms-lg-5">At our photography company, we are passionate about capturing moments that tell stories and create lasting memories. With a keen eye for detail and a commitment to excellence, our team of skilled photographers is dedicated to providing exceptional services tailored to our clients' needs. Whether it's weddings, family portraits, corporate events, or commercial projects, we pride ourselves on delivering stunning, high-quality images that truly reflect the unique essence of each occasion. Through our artistry and expertise, we aim to exceed expectations and preserve precious moments for generations to come.</p>
                        <button className="ms-0 ms-lg-5 btn bg-dark text-white rounded-5 px-4 py-2">Learn More</button>
                    </div>
                    <p></p>
                </div>
            </div>

            <div className="partners row d-flex justify-content-between align-items-center my-5 gy-3">
                <div className="col text-center">
                    <img src="/assets/images/partners/earth.png" alt="" />
                </div>
                <div className="col text-center">
                    <img src="/assets/images/partners/foxhub.png" alt="" />
                </div>
                <div className="col text-center">
                    <img src="/assets/images/partners/ztos.png" alt=""/>
                </div>
                <div className="col text-center">
                    <img src="/assets/images/partners/solaytic.png" alt="" />
                </div>
                <div className="col text-center">
                    <img src="/assets/images/partners/utasia.png" alt="" />
                </div>
                <div className="col text-center">
                    <img src="/assets/images/partners/goldline.png" alt="" />
                </div>
            </div>

            <div className="information row my-5">
                <div className="col-lg-3 bg-white d-flex flex-column justify-content-center align-items-center">
                    <h1>200</h1>
                    <p>VISUALIZATION</p>
                </div>
                <div className="col-lg-3 bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <h1>5</h1>
                    <p>YEARS EXPERIENCE</p>
                </div>
                <div className="col-lg-3 bg-white d-flex flex-column justify-content-center align-items-center">
                    <h1>18</h1>
                    <p>AWARDS</p>
                </div>
                <div className="col-lg-3 bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <h1>3</h1>
                    <p>PHOTOGRAPHERS</p>
                </div>
            </div>

            <div className="services_home my-5 py-lg-5">
                <div className="row d-flex justify-content-between align-items-center mb-5 ">
                    <div className="col-6 header d-flex">
                        <SmCircle/>
                        <h4 className="fw-bold ps-3">SERVICES</h4>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <p className=" mb-1 pe-2">Explore Services</p>
                        <NavLink to="/services" className="text-dark"> 
                            <i  className="bi bi-arrow-right-circle fs-2"></i>
                        </NavLink>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col text-center">
                        <i className="bi bi-camera fs-1" ></i>
                        <p>WEDDINGS</p>
                    </div>
                    <div className="col text-center">
                        <i className="bi bi-camera fs-1" ></i>
                        <p>LIFESTYLE</p>
                    </div>
                    <div className="col text-center">
                        <i className="bi bi-camera fs-1" ></i>
                        <p>PORTRAIT</p>
                    </div>
                    <div className="col text-center">
                        <i className="bi bi-camera fs-1" ></i>
                        <p>FASHION</p>
                    </div>
                    <div className="col text-center">
                        <i className="bi bi-camera fs-1" ></i>
                        <p>GRADUATION</p>
                    </div>
                </div>
                <img src="/assets/images/home_services.png" alt="" className="img-fluid mb-5"/>
            </div>

            <div className="team my-5">
                <div className="col-lg-6 header d-flex mb-2 mt-5">
                    <SmCircle/>
                    <h4 className="fw-bold ps-3">TEAM</h4>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img src="/assets/images/team/member_one.png" alt="" className="img-fluid"/>
                        <p className="text-center fw-bold py-3">JAMES ALDIN</p>
                    </div>
                    <div className="col-lg-4">
                        <img src="/assets/images/team/member_two.png" alt="" className="img-fluid"/>
                        <p className="text-center fw-bold py-3">ROY NGUYEN</p>
                    </div>
                    <div className="col-lg-4">
                        <img src="/assets/images/team/member_three.png" alt="" className="img-fluid"/>
                        <p className="text-center fw-bold py-3">ALAN SINGH</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home