import { useState } from "react"
import { NavLink } from "react-router-dom"
import DarkCircle from "./DarkCircle"
import LogoWhite from "./LogoWhite"
import SmCircle from "./SmCircle"

const Footer = () => {
    const [subscribed, setSubscribed] = useState(false)

    return(
        <div className="footer text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center mb-3">
                        <h1 className="fw-bold pe-3">
                            PHOTOBY 
                        </h1>
                        <LogoWhite />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start py-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <DarkCircle />
                            <p className="ps-2" >STAY IN THE KNOW</p>
                        </div>
                        {subscribed ? 
                            <div className="py-2">
                                <p>Email added to list!</p>
                            </div> :
                            <div className="d-flex border-bottom justify-content-center align-items-center">
                                <input type="email" placeholder="EMAIL ADDRESS" className="my-2 bg-black text-white border-0"/>  
                                <button onClick={() => setSubscribed(true)} className="bg-black border-0">
                                    <i  className="bi bi-arrow-right fs-4 text-white"></i>  
                                </button>                       
                            </div>
                        }


                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold"> SOCIALS</p>
                                <div className="d-flex flex-column gap-2">
                                    <a>Instagram</a>
                                    <a>Twiiter</a>
                                    <a>LinkedIn</a>
                                    <a>Facebook</a>
                                </div>
                            </div>
                            <div className="col-6">
                                <p className="fw-bold" >PAGES</p>
                                <div className="d-flex flex-column gap-2">
                                    <NavLink className="text-white" to="/">Home</NavLink>
                                    <NavLink className="text-white" to="/services">Services</NavLink>
                                    <NavLink className="text-white" to="/projects">Projects</NavLink>
                                    <NavLink className="text-white" to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
