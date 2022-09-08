import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div className="main-container crds-color ">

                <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
                    <Link to='/Shope' className="card-home card-1" style={{ margin: "20px", padding: "20px", width: "500px", textDecoration: "none" }}>
                        <div className="card__icon text-center mt-2"><i class="fa-solid fa-4x fa-shop"></i>
                            <div className="mt-4 mx-auto">
                                <h5>See Shop</h5>
                            </div>
                        </div>
                        <p className="card__exit"><i className="fas fa-" /></p>
                        <h5 className="card-text  text-center p-5" style={{ cursor: "pointer", color: "white" }}></h5>
                    </Link>

                    <Link to='/Profile' className="card-home card-4" style={{ margin: "20px", padding: "20px", width: "500px", textDecoration: "none" }}>
                        <div className="card__icon text-center mt-2"><i class="fa-solid fa-4x fa-user"></i>
                            <div className="mt-4 mx-auto">
                                <h5>Profiles</h5>
                            </div></div>
                        <p className="card__exit"><i className="" /></p>
                        <h5 className="card-text  text-center p-5" style={{ cursor: "pointer", color: "white" }}></h5>
                    </Link>

                    <Link to={'WorkingVideo'} className="card-home card-3" style={{ margin: "20px", padding: "20px", width: "500px", textDecoration: "none" }}>
                        <div className="card__icon text-center mt-2"><i class="fa-solid fa-4x fa-globe"></i>
                            <div className="mt-4 mx-auto">
                                <h5>How It Work</h5>
                            </div>
                        </div>
                        <p className="card__exit"><i className="" /></p>
                        <h5 className="card-text  text-center p-5" style={{ cursor: "pointer", color: "white" }}></h5>
                        <p className="card__apply">
                        </p>
                    </Link>

                    <Link to={'Updateprofile'} className="card-home card-2" style={{ margin: "20px", padding: "20px", width: "500px", textDecoration: "none" }}>
                        <div className="card__icon text-center mt-2"><i class="fa-solid fa-4x fa-marker"></i>
                            <div className="mt-4 mx-auto">
                                <h5>Update Profile</h5>
                            </div></div>
                        <p className="card__exit"><i className="fas fa-" /></p>
                        <h5 className="card-text  text-center p-5" style={{ cursor: "pointer", color: "white" }}></h5>
                        <p className="card__apply" >
                        </p>
                    </Link>                   

                </div>
            </div>
        </div>

    )
}

export default Home