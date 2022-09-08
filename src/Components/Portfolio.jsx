import React from 'react'
import { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Baseurl from '../url';
import Imagesurl from '../imagesurl';
import Fivericon from '../Components/asset/fiverr-3.png'

const Portfolio = () => {
    const location = useLocation();
    const id = location.state.ID;
    const [profile, setProfile] = useState("social")
    const [profile_photo, setprofile_photo] = useState("")
    const [userName, setuserName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [gmail, setGmail] = useState("")
    const [religion, setReligion] = useState("")
    const [cnic, setCnic] = useState("")
    const [cover, setCover] = useState("");
    const [age, Setage] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("")
    const [twiter, setTwiter] = useState("");
    const [snapchat, setSnapchat] = useState("");
    const [telegram, setTelegram] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [skype, setSkype] = useState("");
    const [printest, setPrintest] = useState("");
    const [short_desc, setShort_desc] = useState("");
    const [region, setRegion] = useState("");
    const [bio, setBio] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [stackoverflow, setStackoverflow] = useState("");
    const [fiverr, setFiverr] = useState("");
    const [upword, setUpword] = useState("");
    const [cv, setCv] = useState("");
    const [loader, setLoader] = useState(true)

    const profileData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };











        fetch(`${Baseurl}getdata/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoader(false)
                console.log(result)
                setuserName(result.name)
                setPhone(result.phone)
                setprofile_photo(result.profile_photo)
                setAddress(result.address)
                setGmail(result.gmail)
                setReligion(result.religion)
                Setage(result.age)
                setCnic(result.cnic)
                setFacebook(result.facebook)
                setInstagram(result.instagram)
                setSnapchat(result.snapchat)
                setTelegram(result.telegram)
                setLinkedin(result.linkedind)
                setStackoverflow(result.stackoverflow)
                setLinkedin(result.linkedin)
                setFiverr(result.fiverr)
                setUpword(result.setUpwork)
                setPrintest(result.printest)
                setTiktok(result.tiktok)
                setGithub(result.github)
                setSkype(result.skype)
                setTwiter(result.twiter)
                setUpword(result.upword)
                setRegion(result.region)
                setShort_desc(result.short_desc)
                setBio(result.bio)
            })
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        profileData()

    }, [])
    const ReturnData = () => {

        if (profile === "social") {
            return (
                <>
                    <div className=" row container text-center ">
                        <div className="col-lg-3">
                            <div className="flip3D" style={{ background: " radial-gradient(#60efbc, #58d5c9)" }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-twitter"></i></div> */}
                                <a href={`${twiter}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D" style={{ background: "radial-gradient(#76b2fe, #b69efe)" }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-instagram "></i></div>   */}
                                <a href={`${instagram}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D" style={{ background: "radial-gradient(#60efbc, #58d5c9)" }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-tiktok"></i></div> */}
                                <a href={`${tiktok}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-tiktok"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D " style={{ background: "radial-gradient(#76b2fe, #b69efe)" }} >
                                {/* <div className="front"><i className="fa-brands fa-4x fa-snapchat"></i></div> */}
                                <a href={`${snapchat}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-snapchat"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D" style={{ background: "radial-gradient(#76b2fe, #b69efe)" }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-twitter"></i></div> */}
                                <a href={`${facebook}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-facebook"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D" style={{ background: "radial-gradient(#60efbc, #58d5c9)" }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-instagram "></i></div>   */}
                                <a href={`${printest}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-pinterest"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D" style={{ background: "radial-gradient(#76b2fe, #b69efe)" }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-tiktok"></i></div> */}
                                <a href={`${skype}}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-skype"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D " style={{ background: "radial-gradient(#60efbc, #58d5c9)" }} >
                                {/* <div className="front"><i className="fa-brands fa-4x fa-snapchat"></i></div> */}
                                <a href={`${telegram}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-telegram"></i></a>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (profile === "profile") {
            return (

                <div className="row m-1 conatainer profolio-card">
                    <div className="col-lg-4 mb-4  text-light">
                        <div className="card " style={{ width: "20em", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.3)", boxShadow: "2px 2px 3px 2px  #000000", fontFamily: "serif" }}>
                            <div className="card-body ">
                                <h4 className='text-bold' style={{ fontWeight: 'bold' }}>Name:</h4>
                                <h5> {userName}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-cente mb-4  text-light">
                        <div className="card " style={{ width: "20em", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.3)", boxShadow: "2px 2px 3px 2px  #000000", fontFamily: "serif" }}>
                            <div className="card-body ">
                                <h4 className='text-bold' style={{ fontWeight: 'bold' }}>Phone:</h4>
                                <h5> {phone}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-cente mb-4  text-light">
                        <div className="card " style={{ width: "20em", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.3)", boxShadow: "2px 2px 3px 2px  #000000", fontFamily: "serif" }}>
                            <div className="card-body ">
                                <h4 className='text-bold' style={{ fontWeight: 'bold' }}>Email:</h4>
                                <h5> {gmail}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-cente mb-4  text-light">
                        <div className="card " style={{ width: "20em", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.3)", boxShadow: "2px 2px 3px 2px  #000000", fontFamily: "serif" }}>
                            <div className="card-body ">
                                <h4 className='text-bold' style={{ fontWeight: 'bold' }}>Member-Age:</h4>
                                <h5> {age} Years-old</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-cente mb-4  text-light">
                        <div className="card " style={{ width: "20em", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.3)", boxShadow: "2px 2px 3px 2px  #000000", fontFamily: "serif" }}>
                            <div className="card-body ">
                                <h4 className='text-bold' style={{ fontWeight: 'bold' }}>Religion:</h4>
                                <h5> {religion}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-cente mb-4  text-light">
                        <div className="card " style={{ width: "20em", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.3)", boxShadow: "2px 2px 3px 2px  #000000", fontFamily: "serif" }}>
                            <div className="card-body ">
                                <h4 className='text-bold' style={{ fontWeight: 'bold' }}>Region:</h4>
                                <h5> {region}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-cente mb-4  text-light">
                        <div className="card scroll-card" style={{ height: "6em", width: "20em", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.3)", boxShadow: "2px 2px 3px 2px  #000000", fontFamily: "serif" }}>
                            <div className="card-body ">
                                <h4 className='text-bold' style={{ fontWeight: 'bold' }}>Address:</h4>
                                <h5> {address}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-cente mb-4  text-light ">
                        <div className="card scroll-card" style={{ height: "6em", width: "20em", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.3)", boxShadow: "2px 2px 3px 2px  #000000", fontFamily: "serif" }}>
                            <div className="card-body ">
                                <h4 className='text-bold' style={{ fontWeight: 'bold' }}>Description:</h4>
                                <h5> {short_desc}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (profile === "business") {
            return (
                <>

                    <div className=" row container text-center">
                        <div className="col-lg-3">
                            <div className="flip3D" style={{ background: " radial-gradient(#60efbc, #58d5c9)" }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-twitter"></i></div> */}
                                <a href={`${twiter}`} target={'_blank'} className="front"><i className="fa-brands fa-4x fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-3 ">
                            <div className="flip3D " style={{ background: "radial-gradient(#76b2fe, #b69efe)", }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-linkedin"></i></div> */}
                                {/* <a href={`${fiverr}`} target={`_blank`} className="front"><Icon className='text-center mt-5' icon="jam:fiverr" style={{width:"18em" , height:"4em", textAlign:"center"}} /></a> */}
                                <img src={Fivericon} alt="fiverr icon" style={{ width: "5em", height: "4em", marginTop: "4em", color: "white" }} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D" style={{ background: " radial-gradient(#60efbc, #58d5c9)" }}>
                                {/* <div className="front"><i className="fa-brands fa-4x fa-stack-overflow"></i></div> */}
                                <a href={`${stackoverflow}`} target={`_blank`} className="front"><i className="fa-brands fa-4x fa-stack-overflow"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip3D " style={{ background: "radial-gradient(#76b2fe, #b69efe)" }} >
                                {/* <div className="front"><i className="fa-brands fa-4x fa-github"></i></div> */}
                                <a href={`${github}`} target={`_blank`} className="front"><i className="fa-brands fa-4x fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                </>
            )
        }


    }
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


                    < Container>
                        <Row>
                            <div className="container justify-content-center mt-4 mb-4 ms-2 me-2" style={{ backgroundColor: "#0F1724", borderRadius: "5px", borderRadius: "10px", boxShadow: "0px 0px 1px 1px  #1ef7f7" }}>
                                <Col lg={12}>
                                    <img src={`${Imagesurl}${profile_photo}`} className="rounded-circle mt-3 mb-2 d-block mx-auto" style={{ height: "10em", width: "12em", border: "2px solid #1ef7f7" }} />

                                </Col>
                                <Col lg={6} className="mx-auto" style={{ textAlign: "center", color: "white", justifyContent: "center" }}>
                                    <p>{bio}</p>
                                </Col>
                                <div className="col-lg-12 text-center m-2 ">
                                    <button onClick={() => setProfile("social")} type="button" className={profile === "social" ? "btn btn-outline-info active me-2 w-25" : "btn me-2 w-25"}>Social</button>
                                    <button onClick={() => setProfile("profile")} type="button" className={profile === "profile" ? "btn btn-outline-info active me-2 w-25" : "btn me-2 w-25"}>Personal</button>
                                    <button onClick={() => setProfile("business")} type="button" className={profile === "business" ? "btn btn-outline-info active me-2 w-25" : "btn me-2 w-25"}>Business</button>
                                </div>

                                <ReturnData />
                            </div>
                        </Row>
                    </Container >
            }
        </>
    )
}

export default Portfolio








