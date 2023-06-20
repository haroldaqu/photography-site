import Circle from "../components/Circle"
import SmCircle from "../components/SmCircle"

const Projects = () => {
    return(
        <div className="projects container">

            <div className="header d-flex mb-2">
                <Circle />
                <h1 className="fw-bold ps-3">PROJECTS</h1>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <h1>WEDDING PHOTOSESSION</h1>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex">
                        <p className="pe-3">2022</p>
                        <SmCircle />
                        <p className="ps-3">Wedding</p>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Projects

