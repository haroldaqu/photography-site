import Circle from "../components/Circle"
import Line from "../components/Line"

const Services = () => {
    return(
        <div className="services container">

            <div className="mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header d-flex mb-2">
                            <Circle />
                            <h1 className="fw-bold ps-3">OUR <br></br> SERVICES</h1>
                        </div>
                        <div className="header d-flex "> 
                            <Line />
                            <p className="ps-4 services_info">Lorem ipsum dolor sit amet consectetur. Eget vitae leo dolor sed massa. Lorem pulvinar ut amet dictumst id netus neque consectetur semper. Nec et habitant mi amet penatibus purus commodo. </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services

