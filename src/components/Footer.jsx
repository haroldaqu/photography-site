import DarkCircle from "./DarkCircle"
import LogoWhite from "./LogoWhite"
import SmCircle from "./SmCircle"

const Footer = () => {
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
                    <div className="col-lg-6">
                        <p>Lorem ipsum dolor sit amet consectetur. Sit volutpat metus quis ut tellus pellentesque pharetra cursus.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start py-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <DarkCircle />
                            <p className="ps-2" >STAY IN THE KNOW</p>
                        </div>
                        <input type="text" placeholder="EMAIL ADDRESS" className="my-2 bg-black border-0 border-bottom text-white"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-6">
                                <p className="fw-bold"> SOCIALS</p>
                                <p>Instagram</p>
                                <p>Twiiter</p>
                                <p>LinkedIn</p>
                                <p>Facebook</p>
                            </div>
                            <div className="col-6">
                                <p className="fw-bold" >PAGES</p>
                                <p>Home</p>
                                <p>Services</p>
                                <p>Projects</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer