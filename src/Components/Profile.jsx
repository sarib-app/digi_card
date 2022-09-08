import React, { useEffect, useState } from 'react'
import profile from './data/profile';
import { Link } from 'react-router-dom';
import card1 from '../Components/asset/card1.jpeg'

import Baseurl from '../url';
import Imagesurl from '../imagesurl';
const Profile = () => {
    const [loader, setLoader] = useState(false)
    const [profiles, setProfiles] = useState([])
    const getData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`${Baseurl}fetchwithreview`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoader(false)
                setProfiles(result.ready_to_review)
            }
            )
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {
                loader === true ?

                    <div>
                        <div className='d-flex justify-content-center' style={{ margin: "10em " }}>
                            <div class="spinner-border text-secondary loadingscreen" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                    :

                    <div className="container  mt-4 mb-4 " style={{ backgroundColor: "#0F1724", borderRadius: "1px" }}>
                        <div className="row text-center ">
                            {
                                profiles.map((item) => {
                                    return (
                                        <div className="col-lg-4">
                                            <div className="image bg-dark profilecards">
                                                <img src={`${Imagesurl}${item.profile_photo}`} className=" p-4" style={{ height: "65%", width: "60%", borderRadius: "50%" }} alt="" />
                                                {/* <img src={card1} className="rounded-circle  p-4" style={{ height: "15em" }} alt="" /> */}
                                                <div className="details">
                                                    <div className="more card__apply">
                                                        <Link className="order-now   card__link" to={{ pathname: "/Portfolio" }} state={{ ID: item.id }}> Check Portfolio</Link>
                                                        <div className="icon-links">
                                                            <h6 style={{ color: " white" }}>{item.name}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
            }
        </>
    )

}
export default Profile