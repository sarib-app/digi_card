import React from 'react'
import card1 from '../Components/asset/card1.jpeg'
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import Imagesurl from '../imagesurl';
import Modal from 'react-modal';
import { Container, Row, Col } from 'react-grid-system';
import { hover } from '@testing-library/user-event/dist/hover';



// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: "rgba(0,0,0,0.2)"
//   },
// }

const Cardinfo = ({ shouldShow, closeModal, data }) => {
  return (

    <Modal
      isOpen={shouldShow}
      className="container p-2"
      contentLabel="Example Modal"
    >

      <div className="container p-5 ">
        <div className="row justify-content-center  ">
          <div className="col-lg-9 ">
            <div className="card mt-3 cardColor" style={{ borderRadius: "1em", borderColor: "#1ef7f7" }}>
              <button
                onClick={() => closeModal()}
                type="button" className="btn-close btn-close-white position-absolute  top-0 end-0 text-light mt-2 me-1 " aria-label="Close" />
              <div className="row mt-2 pt-3">
                <div className="col-lg-5 mt-3 mb-5 imgModal " >
                  {
                    data.item_pic != "default" ?
                      <img src={`${Imagesurl}${data.item_pic}`} className="img-fluid wallet " />
                      :
                      <img src={card1} className="img-fluid wallet" alt="image can't load" />
                  }
                </div>
                <div className="card-body col-lg-6 m-2" style={{ color: "rgb(230, 255, 242)" }}>
                  <p className=''>Colors Available;<button className="ms-2 card-title colorButtonforInfo" style={{ backgroundColor: `${data.item_color}` }}></button></p>
                  <h1 className="card-title mt-2"><span className='fw-bold'> {data.item_name}</span></h1>
                  <h5 className='card-title mt-4'>{data.describtion}</h5>
                  {/* <h4 className="card-title"><span className='fw-bold'>Type:</span> {data.item_type}</h4> */}
                  <h5 className="card-title mt-3"><span >Quantity:</span>&nbsp;<b>{data.quantity}</b></h5>
                  <h5 className='card-title  mt-2'><span style={{ fontSize: "1.2em", color: "orange" }}> Price: </span> {data.item_price}/-</h5>
                  <div className='d-flex mt-3'>
                    <Link className='btn p-3' to={{ pathname: "/Form" }} state={{ customID: data.id }} >Order Now</Link>
                    <button className='btn ms-2'>How it works</button>
                  </div>
                </div>
              </div>
              <Container>
                <Row>
                  {/* <div className="row" style={{ fontFamily: "serif", fontSize: "20px", justifyContent: "center" }}>
                    <div className="col-lg-2">
                      <div className="flip3D text-light" style={{ background: "radial-gradient(#76b2fe, #b69efe)", height: "8em", width: "10em" }} >
                        <div className="text-center">
                          <div><i className="fa-solid fa-4x fa-phone text-center mt-4"></i>
                            <div>
                              <h4><a href="" className="order now text-light  fw-bold">Order On Call</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="flip3D text-light" style={{ background: "radial-gradient(#60efbc, #58d5c9)", height: "8em", width: "10em" }} >
                        <div className="text-center">
                          <div><i className="fas fa-4x fa-shipping-fast mt-4"></i>
                            <div>
                              <Link className="order-now text-light" to={{ pathname: "/Form" }} state={{ customID: data.id }}><h4>Order Now</h4></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="flip3D text-light" style={{ background: "radial-gradient(#fbc1cc, #fa99b2)", height: "8em", width: "10em" }} >
                        <div className="text-center">
                          <div><i className="fa-solid fa-4x fa-square-phone mt-4"></i>
                            <div>
                              <h4><a href="" className='order-now text-light fw-bold'>Get-Info</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Modal>


  )
}

export default Cardinfo