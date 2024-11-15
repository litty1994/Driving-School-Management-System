import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {

    return (
        <>



            <div className="container-xxl py-6">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                        <h6 className="text-warning text-uppercase m-4 fs-3">Testimonial</h6>
                        <h1 className="display-6 mb-4">What Our Clients Say!</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">

                            <div>
                                <div className="testimonial-item text-center mb-4">
                                    <div className="position-relative mb-5">
                                        <img
                                            className="img-fluid rounded-circle mx-auto"
                                            src="https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png"
                                            style={{ width: '200px' }}
                                            alt=""
                                        />
                                        <div
                                            className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                                            style={{ width: "60px", height: "60px" }}
                                        >
                                            <i className="fa fa-quote-left fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5>Ann Christy</h5>
                                    <p className="fs-4">
                                        "Great school! The staff is friendly, and the instructors break everything down into easy steps. I learned so much more than just how to pass the test — I learned to drive responsibly. Thank you for everything!"
                                    </p>
                                    <hr className="w-25 mx-auto" />
                                </div>

                                <div className="testimonial-item text-center mb-4">
                                    <div className="position-relative mb-5">
                                        <img
                                            className="img-fluid rounded-circle mx-auto"
                                            src="https://www.pngitem.com/pimgs/m/579-5794945_circle-profile-hd-png-download.png"
                                            style={{ width: '200px' }}
                                            alt=""
                                        />
                                        <div
                                            className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                                            style={{ width: "60px", height: "60px" }}
                                        >
                                            <i className="fa fa-quote-left fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5>Alex Tom</h5>
                                    <p className="fs-4">
                                        "Amazing experience! Clear guidance and plenty of practice helped me feel comfortable and confident on the road."
                                    </p>
                                    <hr className="w-25 mx-auto" />
                                </div>

                                <div className="testimonial-item text-center mb-4">
                                    <div className="position-relative mb-5">
                                        <img
                                            className="img-fluid rounded-circle mx-auto"
                                            src="https://www.profilebakery.com/wp-content/uploads/2023/03/Profilbild-AI.jpg"
                                            style={{ width: '200px' }}
                                            alt=""
                                        />
                                        <div
                                            className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                                            style={{ width: "60px", height: "60px" }}
                                        >
                                            <i className="fa fa-quote-left fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5>John Christopher</h5>
                                    <p className="fs-4">
                                        "The instructors were professional and supportive, helping me pass my test with ease. Highly recommend for anyone learning to drive!"
                                    </p>
                                    <hr className="w-25 mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>















        </>
    )
}

export default Testimonials