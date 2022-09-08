import React from 'react'
import { Link } from 'react-router-dom'


const Updateprofile = () => {
  return (
    <div>
      <section className="m-5">
        <div className="container"  >
          {/* FOR DEMO PURPOSE */}
          <div className="row " >
            <div className="col-lg-6 mx-auto " >
              <header className="text-center pb-5" >
                <h1 className="h2 text-white">Update your Current Profile</h1>
                <p style={{ decoration: "none" }} className='text-white mt-3'>Lorem ipsum dolor sit amet elit. Fugit, eum.<br />View your current<Link to='/Profile' className="font-italic text-info">&nbsp;Profile</Link></p>
              </header>
            </div>
          </div>{/* END */}
          <div className="row" >
            <div className="col-lg-6 mx-auto" >
              {/* CUSTOM BLOCKQUOTE */}
              <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white" /></div>
                <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" className="text-info">@consequat</a>."</p>
                <footer className="pt-4 mt-4 border-top">
                  <div className='d-grid gap-2 d-md-flex justify-content-md-end' >
                    <div>
                      <button className="continue-application">
                        <div>
                          <div className="pencil" />
                          <div className="folder">
                            <div className="top">
                              <svg viewBox="0 0 24 27">
                                <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
                              </svg>
                            </div>
                            <div className="paper" />
                          </div>
                        </div>
                        Update Profile
                      </button>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

export default Updateprofile