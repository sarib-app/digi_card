import React from 'react';
import axios from 'axios';
import { AsyncStorage } from 'AsyncStorage';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Baseurl from '../url';
import Infoform from './Infoform';


const Paidorders = () => {
  const [userData, setUserData] = useState([])
  const [orderID, setOrderID] = useState()
  const [phoneNo, setPhoneNo] = useState()
  const [orderDate, setOrderdate] = useState()
  const [shouldShow, setShouldShow] = useState(false)
  const [userID, setUserID] = useState()


  const recieveData = () => {
    // const objData = {
    //   payment_status: "paid"
    // }

    // axios.get(`${Baseurl}getinfowithpaymentstatus`, objData)
    //   .then(res => {
    //     setUserData(res.data)
    //     console.log(res.data)

    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // console.log(userData)


    var formdata = new FormData();
    formdata.append("payment_status", "paid");

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${Baseurl}getinfowithpaymentstatus`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserData(result)
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }

  function Content({ items }) {
    return (
      <tr>
        <td>{items.id}</td>
        <td>{items.name}</td>
        <td>{items.address}</td>
        <td>{items.phone}</td>
        <td>{items.ldate}</td>
        <td><button className='btn btn-outline-primary m-1' onClick={() => {
          oncloseModal()
          setUserID(items)
        }}>Info</button></td>
        
      </tr>
    )
  }

  const DataRender = () => {

    if (!orderID && !phoneNo & !orderDate) {
      return (
        userData.map((items) => {
          return (
            <Content items={items} />
          )
        }
        )
      )
    }
    else if (orderID && !phoneNo && !orderDate) {
      return (
        userData.filter((objects) => objects.id === Number(orderID)).map((items) => {
          return (
            <Content items={items} />
          )
        }
        )
      )
    }
    else if (phoneNo && !orderID && !orderDate) {
      return (
        userData.filter((objects) => objects.phone === phoneNo).map((items) => {
          return (
            <Content items={items} />
          )
        }
        )
      )
    }
    else if (orderDate && !orderID && !phoneNo) {
      return (
        userData.filter((objects) => objects.ldate === orderDate).map((items) => {
          return (
            <Content items={items} />
          )
        }
        )
      )
    }
    else if (orderID && phoneNo && !orderDate) {
      return (
        userData.filter((objects) => objects.id === Number(orderID) && objects.phone === phoneNo).map((items) => {
          return (
            <Content items={items} />
          )
        }
        ))
    }
    else if (phoneNo && orderDate && !orderID) {
      return (
        userData.filter((objects) => objects.phone === phoneNo && objects.ldate === orderDate).map((items) => {
          return (
            <Content items={items} />
          )
        }
        ))
    }
    else if (orderID && phoneNo && !orderDate) {
      return (
        userData.filter((objects) => objects.id === Number(orderID) && objects.phone === phoneNo).map((items) => {
          return (
            <Content items={items} />
          )
        }
        ))
    }
    else if (orderID && phoneNo && orderDate) {
      return (
        userData.filter((objects) => objects.id === Number(orderID) && objects.phone === phoneNo && objects.ldate === orderDate).map((items) => {
          return (
            <Content items={items} />
          )
        }
        ))
    }
    else {
      <p>no data</p>
    }

  }

  function oncloseModal() {
    setShouldShow((prev) => !prev)
  }

  useEffect(() => {
    recieveData()
  }, [])


  return (
    <div>

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Paid Orders</h1>
              </div>{/* /.col */}
              

            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body table-responsive">
                    <div className="form-group d-flex" >
                      <input className="form-control" type="number" placeholder="Search with order ID" onChange={(e) => { setOrderID(e.target.value) }} aria-label="Search" style={{ borderRadius: "10em" }} />&nbsp;&nbsp;&nbsp;
                      <input className="form-control" type="text" placeholder="Search with Phone" onChange={(e) => setPhoneNo(e.target.value)} aria-label="Search" style={{ borderRadius: "10em" }} />&nbsp;&nbsp;&nbsp;
                      <input className="form-control" type="number" placeholder="Enter date in YYYY-MM-DD" onChange={(e) => setOrderdate(e.target.value)} aria-label="Search" style={{ borderRadius: "10em" }} />
                    </div>
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Orders ID</th>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Phone No.</th>
                          <th>Date</th>
                          <th>Info</th>
                        </tr>
                      </thead>
                      <tbody >
                        {
                          userData.length < 0 ?
                            <h4>No Data Available</h4> :
                            <DataRender />
                        }

                      </tbody>

                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {
              userID ?
                <Infoform
                  shouldShow={shouldShow}
                  closeModal={oncloseModal}
                  userData={userID}
                />
                : null}
        {/* /.content */}
      </div>
    </div>
  )
}

export default Paidorders