import Circle from "../components/Circle"
import SmCircle from "../components/SmCircle"

const Contact = () => {
    return(
        <div className="contact container">
            <div className="row mb-5">
                <div className="col-lg-5">
                    <img src="/assets/images/contact.png" alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-7">
                    <div className="header d-flex mb-5">
                        <Circle />
                        <h1 className="fw-bold ps-3">CONTACT</h1>
                    </div>
                    <form>
                    <div className="row mb-4 mb-lg-5">
                        <div className="col-lg-6">
                            <input type="email" className="mb-4 w-100 border-0 border-bottom  border-black bg-transparent" placeholder="NAME"/>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <input type="password" className="w-100 border-0 border-bottom  border-black bg-transparent" placeholder="EMAIL"/>
                        </div>     
                        <div className="col-lg-12">
                            <input type="password" className="w-100 border-0 border-bottom  border-black bg-transparent" placeholder="MESSAGE"/>
                        </div>                   
                    </div>
                    <button type="submit" className=" btn bg-none border-black text-black rounded-5 px-4 py-2 ">
                        SEND MESSAGE
                    </button>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="d-flex">
                                <SmCircle />
                                <p className="ps-2">CONTACT INFO</p>
                            </div>
                            <p className="ps-3 ps-lg-4 fw-normal">photoby@gmail.com</p>
                            <p className="ps-3 ps-lg-4 fw-normal">(323) 323 - 323</p>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

