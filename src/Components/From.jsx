import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Baseurl from '../url';
import { useLocation } from 'react-router-dom';
toast.configure()
const From = () => {
    const location = useLocation();
    const customId = location.state.customID;
    const [name, Setname] = useState("");
    const [phone, Setphone] = useState("");
    const [cnic, setCnic] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [whatsapp_b, setWhatsapp_b] = useState("");
    const [address, Setaddress] = useState("");
    const [email, Setemail] = useState("");
    const [profile, SetProifle] = useState("");
    const [cover, setCover] = useState("");
    const [age, Setage] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("")
    const [twiter, setTwiter] = useState("");
    const [snapchat, setSnapchat] = useState("");
    const [telegram, setTelegram] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [skype, setSkype] = useState("");
    const [pinterest, setPintreset] = useState("");
    const [shortdisc, Setshortdisc] = useState("");
    const [religion, setReligion] = useState("Islam");
    const [region, setRegion] = useState("");
    const [bio, setBio] = useState("");
    const [github, setGithub] = useState("");
    const [linkedind, setLinkedin] = useState("");
    const [Stackoverflow, setStackoverflow] = useState("");
    const [fiver, setFiver] = useState("");
    const [upwork, setUpwork] = useState("");
    const [cv, setCv] = useState("");
    const [submit, setSubmit] = useState(false);
    const submitData = () => {

        if (!name || !cnic || !phone || !address || !email || !profile || !age || !shortdisc) {
            setSubmit(true)
        }
        else {

            var formdata = new FormData();
            formdata.append("profile_photo", profile, "[PROXY]");
            formdata.append("cover_photo", cover, "[PROXY]");
            formdata.append("name", name);
            formdata.append("phone", phone);
            formdata.append("gmail", email);
            formdata.append("snapchat", snapchat);
            formdata.append("instagram", instagram);
            formdata.append("linkedin", linkedind);
            formdata.append("twitter", twiter);
            formdata.append("github", github);
            formdata.append("facebook", facebook);
            formdata.append("bio", bio);
            formdata.append("short_desc", shortdisc);
            formdata.append("long_desc", "23e");
            {
                cv ?
                    formdata.append("cv", cv, "[PROXY]") : console.log("Cv is Empty")
            }
            formdata.append("whatsapp", whatsapp);
            formdata.append("whatsapp_b", whatsapp_b);
            formdata.append("payment_status", "23e23");
            formdata.append("telegram", telegram);
            formdata.append("tiktok", tiktok);
            formdata.append("skype", skype);
            formdata.append("printest", pinterest);
            formdata.append("age", age);
            formdata.append("religion", religion);
            formdata.append("region", region);
            formdata.append("cnic", cnic);
            formdata.append("stackoverflow", Stackoverflow);
            formdata.append("fiverr", fiver);
            formdata.append("upword", upwork);
            formdata.append("item_id", customId);
            formdata.append("order_status", "new");
            formdata.append("ready_to_review", 0);
            formdata.append("address", address)

            axios.post(`${Baseurl}adddata`, formdata)
                .then((response) => {
                    toast.info("Data sumbitted!")
                    setInterval(() => {
                        window.location.reload(true)
                    }, 2000)
                    console.log(response)
                })
                .catch((error) => {
                    toast.warn("error while submitting");
                    console.log(error)

                })

        }

    }
    return (
        <div>
            <div className="bg-dark p-5" >
                <div className='container'>
                    {/* <div className="card p-3" style={{ borderColor: "#2AA5DECC", borderWidth: "2px", borderRadius: "20px" ,}}> */}
                    <div className="cards" style={{ borderRadius: "3px", borderColor: 'grey', }}>
                        <div className=" card-header" style={{ background: "#36404E" }}>
                            <h1 className=" text-center text-white mb-3"><b>Profile Information</b></h1>
                            <h4 className='text-white text-center mt-4'> Please Provide your Information before ordering your Digi-card</h4>
                        </div>
                        <div className="card-body frombody">

                            <div className="row gy-3 mt-4 ">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label text-white "> <b>Name*</b> </label>
                                    <input type="text" className={"form-control text-white"} onChange={(e) => Setname(e.target.value)} style={{ backgroundColor: "#20262F", borderColor: name === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputName5" placeholder="Enter Full Name" />
                                    {name === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label text-white"> <b>Phone Number*</b> </label>
                                    <input type="stringr" className="form-control text-white" onChange={(e) => Setphone(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: phone === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Enter Phone Number" />
                                    {phone === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cnic" className="form-label text-white"> <b>CNIC Number*</b> </label>
                                    <input type="string" className="form-control text-white" onChange={(e) => setCnic(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: cnic === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Enter CNIC Number" />
                                    {cnic === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="Whatsapp No" className="form-label text-white"> <b>WhatsApp Number*</b> </label>
                                    <input type="string" className="form-control text-white" onChange={(e) => setWhatsapp(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: whatsapp === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Enter  Whatsapp Number" />
                                    {!whatsapp && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                </div>
                                <div className="col-md-6">
                                    {/* <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2  fa-brands fa-whatsapp" /> */}
                                    <label htmlFor="Whatsapp No" className="form-label text-white"> <b>WhatsApp Businness*</b> </label>
                                    <input type="string" className="form-control text-white" onChange={(e) => setWhatsapp_b(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: whatsapp_b === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Enter Business  Whatsapp Number" />
                                    {whatsapp_b === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="address" className="form-label text-white" > <b>Address*</b></label>
                                    <input type="text" className="form-control text-white" onChange={(e) => Setaddress(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: address === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputAddres5s " placeholder="Enter Address" />
                                    {!address && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="profile" className="form-label text-white " > <b>Upload Profile Picture*</b></label>
                                    <input type="file" className="form-control text-white" onChange={(e) => SetProifle(e.target.files[0])} style={{ backgroundColor: '#20262F', borderColor: !profile && submit === true ? "red" : 'rgba(0,0,0,0)' }} name="image" id="inputCity" placeholder="Upload A picture" />
                                    {!profile && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label text-white"> <b>Upload Cover Picture</b></label>
                                    <input type="file" className="form-control text-white" onChange={(e) => setCover(e.target.files[0])} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} name="image" id="inputCity" />
                                </div>
                            </div>
                            {/* End Multi Columns Form */}
                            <div className='mt-4 text-white'><h4 ><b>Socials</b></h4></div>
                            <div className="row gy-3 mt-2">

                                <div className="col-md-4 d-flex">
                                    <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2  fa-brands fa-facebook"></i>
                                    <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setFacebook(e.target.value)} id="inputEmail5" style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} placeholder="Paste Facebook profile link" />
                                </div>

                                <div className="col-md-4 d-flex">
                                    <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2 fa-brands fa-instagram"></i>
                                    <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setInstagram(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Paste Instagram profile link or username" />
                                </div>

                                <div className="col-md-4 d-flex">
                                    <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2 fa-brands fa-twitter"></i>
                                    <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setTwiter(e.target.value)} id="inputEmail5" style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} placeholder="Paste Twitter profile link" />
                                </div>

                                <div className="col-md-4 d-flex">
                                    <i style={{ fontSize: '23px', color: "white" }} className=" mt-3 ms-2 fa-brands fa-snapchat"></i>
                                    <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setSnapchat(e.target.value)} id="inputEmail5" style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} placeholder="Enter Snapchat username" />
                                </div>

                                <div className="col-md-4 d-flex">
                                    <i style={{ fontSize: '23px', color: "white" }} class="mt-3 ms-2  fa-brands fa-telegram"></i>
                                    <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setTelegram(e.target.value)} id="inputEmail5" style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} placeholder="Paste Telegram profile link" />
                                </div>

                                <div className="col-md-4 d-flex">
                                    <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2  fa-brands fa-tiktok"></i>
                                    <input type="text" className="ms-2 form-control ms-2 py-3 text-white" onChange={(e) => setTiktok(e.target.value)} id="inputEmail5" style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} placeholder="Paste Ticktok profile link" />
                                </div>

                                <div className="col-md-4 d-flex">
                                    <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2  fa-brands fa-skype"></i>
                                    <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setSkype(e.target.value)} id="inputEmail5" style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} placeholder="Paste Sykpe profile link" />
                                </div>

                                <div className="col-md-4 d-flex">
                                    <i style={{ fontSize: '23px', color: "whitesmoke" }} className="mt-3 ms-2  fa-brands fa-pinterest-p"></i>
                                    <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setPintreset(e.target.value)} id="inputEmail5" style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} placeholder="Paste Pintrest profile link" />
                                </div>
                                <div className="col-md-4 d-flex">
                                    <label htmlFor="email" className="form-label text-white "><i style={{ fontSize: '23px', color: "whitesmoke" }} className="mt-3 ms-2  fa-solid  fa-envelope "></i></label>
                                    <input type="text" className={"form-control text-white"} onChange={(e) => Setemail(e.target.value)} style={{ backgroundColor: "#20262F", borderColor: email === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputName5" placeholder="Enter Your Email" />
                                    {email === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                </div>
                                <h4 className='mt-4 text-white'><b>User Info*</b></h4>
                                <div className="row gy-3 mt-4">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label text-white "> <b>Short Description*</b> </label>
                                        <input type="text" className={"form-control text-white"} onChange={(e) => Setshortdisc(e.target.value)} style={{ backgroundColor: "#20262F", borderColor: shortdisc === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputName5" placeholder="Enter Short Description" />
                                        {shortdisc === "" & submit === true ? <span className='text-danger'>input empty</span> : ""}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="age" className="form-label text-white" required> <b> Age*</b> </label>
                                        <input type="string" className="form-control text-white" id="inputEmail5" onChange={(e) => Setage(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: age === "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} placeholder="Enter Your Age" />
                                        {age === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                    </div>

                                    <div className="col-md-6">
                                        <div>
                                            <label htmlFor="Religion" className="form-label text-white" required ><b>Religion</b></label>
                                            <select className="form-select  text-white" onChange={(e) => setReligion(e.target.value)} style={{ backgroundColor: '#20262F' }} id="validationCustom04" placeholder="Enter Your Religion">
                                                <option >Islam</option>
                                                <option>Christanity</option>
                                                <option>Hindu</option>
                                                <option>Sikh</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail5" className="form-label text-white"> <b> Region</b> </label>
                                        <input type="text" className="form-control text-white" onChange={(e) => setRegion(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Enter Your Region" />
                                    </div>
                                    <div className="col-12 pt-3 pb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label text-white"><b>Bio</b></label>
                                        <textarea className="form-control text-white" onChange={(e) => setBio(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} id="exampleFormControlTextarea1" rows={7} placeholder="Write your short bio ..." defaultValue={""} />

                                    </div>

                                    <h4 className='mt-4 text-white'><b>Professional Accounts</b></h4>
                                    {/* <div className="col-md-4 d-flex">
                                        <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2  fa-brands fa-whatsapp" />
                                        <input type="number" className="form-control text-white" onChange={(e) => setWhatsapp(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: whatsapp == "" && submit === true ? "red" : 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Enter Business  Whatsapp Number" />
                                        {whatsapp === "" && submit === true ? <span className='text-danger'>input empty</span> : ""}
                                    </div> */}
                                    <div className="col-md-4 d-flex">
                                        <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2  fa-brands fa-linkedin" />
                                        <input type="text" className="form-control ms-2 py-3 text-white " onChange={(e) => setLinkedin(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Paste LInkedIn profile link" />
                                    </div>

                                    <div className="col-md-4 d-flex">
                                        <i style={{ fontSize: '23px', color: "white" }} className=" mt-3 ms-2  fa-brands fa-github" />
                                        <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setGithub(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Paste Github profile link or username" />
                                    </div>

                                    <div className="col-md-4 d-flex">
                                        <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2  fa-brands fa-stack-overflow" />
                                        <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setStackoverflow(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Paste Stackoverflow profile link" />
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2 fa-solid  fa-dollar-sign" />
                                        <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setFiver(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Paste your Fiver account link" />
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <i style={{ fontSize: '23px', color: "white" }} className="mt-3 ms-2 fa-solid  fa-dollar-sign" />
                                        <input type="text" className="form-control ms-2 py-3 text-white" onChange={(e) => setUpwork(e.target.value)} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} id="inputEmail5" placeholder="Paste your Upwork account link" />
                                    </div>
                                    <div className="col-md-12 d-flex">
                                        <label htmlFor="inputCity" className="form-label text-white" style={{ fontSize: '20px', color: "white" }}> <b>CV;</b></label>
                                        <input type="file" className="ms-2 form-control text-white " onChange={(e) => setCv(e.target.files[0])} style={{ backgroundColor: '#20262F', borderColor: 'rgba(0,0,0,0)' }} name="image" id="inputCity" />
                                    </div>

                                </div>
                                <div className="card-footer text-end  ">
                                    {/* ,<button type="submit" className="btn btn-outline-info  mt-3" onClick={() => Setsubmit(true) , () => console(); } >Submit</button> */}
                                    <button type="submit" className="btn btn-outline-info  mt-3" onClick={
                                        submitData
                                    } >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default From