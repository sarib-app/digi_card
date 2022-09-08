import React, { useState, useEffect } from 'react';
import 'moment-timezone';
import { AsyncStorage } from 'AsyncStorage';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import 'moment-timezone';
import Baseurl from '../url';

toast.configure()
const Additemform = () => {
    // for counter
    const [addCount, setAddCount] = useState(0);

    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [getColor, setColor] = useState('black')
    const [type, setType] = useState('Card')
    const [price, setPrice] = useState('')
    const [ava, setAva] = useState('')
    const [description, setDescription] = useState('')

    const incrementCount = () => {
        setAddCount(addCount + 1);
    }
    const decrementCount = () => {
        setAddCount(addCount - 1)
    }

    // javascript fetch
    const sendData = () => {

        var formdata = new FormData();
        formdata.append("item_name", name);
        formdata.append("item_type", type);
        formdata.append("item_price", price);
        formdata.append("availability", ava);
        formdata.append("describtion", description);
        formdata.append("quantity", addCount);
        formdata.append("item_color", getColor);
        formdata.append("item_pic", picture, "[PROXY]");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl}additem`, requestOptions)
            // .then(response => response.text())
            // .then(result => console.log(result))
            // .catch(error => console.log('error', error));

            .then(response => response.text())
            .then(result => {
                console.log(result)
                toast.success("Item added successfully")
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error).toast.warn("Error while submitting data"));


        setInterval(() => {
            window.location.reload(true)
        }, 2000)
    }


    return (
        <div className='content-wrapper '>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Add New Inventory Item</h1>
                        </div>{/* /.col */}

                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <div className="container pt-3">
                <div className='container'>
                    <div className="card card-secondary">
                        <div className="card-header">
                            <h3 className="card-title">Add Item:</h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputEmail1">Item Name</label>
                                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter product name" />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputFile">Item Picture</label>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input onChange={(e) => setPicture(e.target.files[0])} type="file" className="custom-file-input" id="exampleInputFile" />
                                            <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputPassword1">Item Type</label>
                                    <select onChange={(e) => setType(e.target.value)} className="form-select" aria-label="Default select example">
                                        <option >Card</option>
                                        <option >Tattos</option>
                                        <option >Jewellery</option>
                                        <option >Other</option>
                                    </select>

                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputPassword1">Item Price</label>
                                    <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" placeholder="Item Price as given" />
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputPassword1">Quantity</label>
                                    <div>
                                        <button className='btn btn-secondary me-2 btn-sm' onClick={decrementCount}>-1</button>
                                        <label htmlFor="exampleInputPassword1">{addCount}</label>
                                        <button className='btn btn-secondary ms-2 btn-sm' onClick={incrementCount}>+1</button>
                                    </div>
                                </div>

                                <div className="form-check col-6">
                                    <label htmlFor="exampleInputPassword1">Availability</label>
                                    <div className="form-check form-switch">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="form-check-input mt-2 btn-lg" onChange={(e) => setAva(e.target.value)} type="checkbox" id="flexSwitchCheckDefault" />
                                        &nbsp;&nbsp;&nbsp;<label className="form-check-label mt-1" htmlFor="flexSwitchCheckDefault">Item Available</label>
                                    </div>
                                </div>

                                <div className="col-12 pt-3 pb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Description:</b></label>
                                    <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} id="exampleFormControlTextarea1" rows={5} placeholder="Write short describtion about the product ..." defaultValue={""} />
                                </div>

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Item Color</label>
                                <div className='d-flex justify-content-start'>
                                    <button className={getColor === "black" ? "colorsbutton border border-info" : "colorsbutton"} onClick={() => setColor('black')} style={{ backgroundColor: 'black' }}></button>
                                    <button className={getColor === "red" ? "colorsbutton border border-info" : "colorsbutton"} onClick={() => setColor('red')} style={{ backgroundColor: 'red' }}></button>
                                    <button className={getColor === "blue" ? "colorsbutton border border-info" : "colorsbutton"} onClick={() => setColor('blue')} style={{ backgroundColor: 'blue' }}></button>
                                    <button className={getColor === "pink" ? "colorsbutton border border-info" : "colorsbutton"} onClick={() => setColor('pink')} style={{ backgroundColor: 'pink' }}></button>
                                    <button className={getColor === "yellow" ? "colorsbutton border border-info" : "colorsbutton"} onClick={() => setColor('yellow')} style={{ backgroundColor: 'yellow' }}></button>
                                    <button className={getColor === "green" ? "colorsbutton border border-info" : "colorsbutton"} onClick={() => setColor('green')} style={{ backgroundColor: 'green' }}></button>
                                    <button className={getColor === "grey" ? "colorsbutton border border-info" : "colorsbutton"} onClick={() => setColor('grey')} style={{ backgroundColor: 'grey' }}></button>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" onClick={sendData} className="btn btn-outline-secondary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Additemform