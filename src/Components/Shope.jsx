import { Container, Row, Col } from 'react-grid-system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Baseurl from '../url';
import Imagesurl from '../imagesurl';
import card1 from '../Components/asset/card1.jpeg'
import noData1 from '../Components/asset/noDATA1.webp'
import Cardinfo from './Cardinfo';
import $ from 'jquery'
import { dindDOMNode } from 'react-dom'

window.jquery = window.$ = $;
const Shope = () => {
    // const [modalIsOpen, setModalIsOpen] = useState(false)
    // const [index, setIndex] = useState(1)
    const [type, setType] = useState("Card");
    const [loader, setLoader] = useState(false)
    const [getCardData, setCardData] = useState([]);
    const [data, setData] = useState([])
    const [shouldShow, setShouldShow] = useState(false)


    const gettingCardData = () => {
        setLoader(true)
        axios.get(`${Baseurl}getallitems`)
            .then(res => {
                setLoader(false)
                setCardData(res.data.items)
                console.log(res.data.items);
            })
            .catch(error => console.log('error', error));
    }
    const returnData = () => {
        return (
            <>
                {filtered.length >= 1 ?
                    <Container>
                        <Row>
                            {
                                getCardData.length < 1 ?
                                    <h1 className='text-light'>data not find</h1>
                                    :
                                    filtered.map((item) => {
                                        return (
                                            <>
                                                <Col lg={4} className="mt-3 mb-3 p-2">
                                                    <div className=" card bg-dark" key={item.id}>
                                                        <div className="hovereffect">
                                                            <img className="img-responsive card-img-top" src={`${Imagesurl}${item.item_pic}`} alt="card image cant load" style={{ borderRadius: "10px", height: "20em", width: "x" }} />
                                                            <div className="overlay" >
                                                                <button className="btn btn-secondary btn-sm" style={{ borderRadius: "10px" }} onClick={() => {
                                                                    setData(item)
                                                                    OncloseModal()
                                                                }}  >See details</button>

                                                                <p className="icon-links">
                                                                    <a href="#" className='mt-1 ' style={{ textDecoration: "none" }}>{item.item_price}
                                                                        {/* <span className="fa fa-twitter" /> */}
                                                                    </a>
                                                                    <a href="#" className='me-1 mt-1' style={{ textDecoration: "none" }}>Price:
                                                                        {/* <span className="fa fa-facebook" /> */}
                                                                    </a>
                                                                    {/* <a href="#">
                                                                        <span className="fa fa-instagram" />
                                                                    </a> */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </>
                                        )
                                    }
                                    )
                            }
                        </Row>
                    </Container> :
                    <div className='text-center mt-1 mb-3'>
                        <h3>No data {getCardData.length}</h3>
                        <img src={noData1} alt="" style={{ borderRadius: "10px", height: "17em", width: "x" }} />
                    </div>}
            </>
        )
    }

    const filtered = getCardData.filter((item) => item.item_type === type)

    //Scroll to top function
    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function OncloseModal() {
        setShouldShow((prev) => !prev)
    }

    useEffect(() => {
        gettingCardData()
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
                    <>

                        <div className='m-4' style={{ backgroundColor: "#0F1724", borderRadius: "3px" }}>
                            <div className="text-center p-5">
                                <button onClick={() => setType("Tattoos")} type="button" style={{ width: "180px" }} className={type === "Tattoos" ? "btn btn-outline-info  active m-1" : "btn m-1"}>Tattoos</button>
                                <button onClick={() => setType("Card")} type="button" style={{ width: "180px" }} className={type === "Card" ? "btn btn-outline-info active m-1" : "btn m-1"}>Card</button>
                                <button onClick={() => setType("Jewellery")} type="button" style={{ width: "180px" }} className={type === "Jewellery" ? "btn btn-outline-info active m-1 " : "btn m-1"}>Jewellery</button>
                                <div className="position-relative">
                                    <div className='position-absolute bottom-0 end-0'>
                                        <button className='scrolling btn' id="myBtn" onClick={topFunction}><i className="fa-solid fa-angle-up" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {returnData()}
                            <Cardinfo shouldShow={shouldShow} closeModal={OncloseModal} data={data} />

                        </div>
                    </>
            }

        </>

    )
}

export default Shope