// libraries 
import React from "react";

// style css
import './Contact2.css';

// icons 


const Contact2 = () => {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4 mt-1 d-flex justify-content-between">

                    <div className="col-lg-7">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row gy-4">
                                <div className="col-lg-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                    {/* <!-- End Contact Form --> */}

                    <div className="col-lg-4 d-flex flex-column justify-content-around">
                        <div className="info-item d-flex flex-column justify-content-center align-items-center">
                            <i className="bi bi-envelope"></i>
                            <h3>Email Us</h3>
                            <p>contact@example.com</p>
                        </div>

                        <div className="info-item  d-flex flex-column justify-content-center align-items-center"
                        >
                            <i className="bi bi-telephone"></i>
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    {/* <!-- End Google Maps --> */}

                </div>



                <div className="row gy-4 mt-1">

                    <div className="col-lg-4">
                        <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                            <i className="bi bi-map"></i>
                            <h3>Our Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="col-lg-8 ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4846256468545!2d74.272186!3d16.702654000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1003495555555%3A0xae6a0df7a587ca69!2sMenon+and+Menon+Ltd!5e0!3m2!1sen!2sin!4v1413527188679"
                            frameborder="0"
                            style={{ border: 0, width: "100%", height: "384px" }}
                            allowfullscreen></iframe>
                    </div>


                </div>


                <div className="row gy-4 mt-1">

                    <div className="col-lg-4 order-md-2">
                        <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                            <i className="bi bi-map"></i>
                            <h3>KAGAL DIVISION</h3>
                            <h6>Menon and Menon Ltd</h6>
                            <p>F-3, MIDC, Main Road <br />
                                Kagal-Hatkanangale 5 Star Industry <br />
                                Tal- Kagal, Dist.-Kolhapur - 416 236 <br />
                                Maharashtra, India
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-8 order-md-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3823.3776857755142!2d74.3719355!3d16.6078035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fc9073f1113b%3A0x4d43dc9b14dccbd1!2sMenon%20and%20Menon%2C%20Kagal%20Plant!5e0!3m2!1sen!2sin!4v1662033698287!5m2!1sen!2sin"
                            frameborder="0"
                            style={{ border: 0, width: "100%", height: "384px" }}
                            allowfullscreen></iframe>

                    </div>


                </div>

            </div>
        </section>
    )
}
export default Contact2;