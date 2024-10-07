
function Footer () {
    return(
        <div className='footer-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-1 mb-3'>
                        <h3>LOGO</h3>
                    </div>
                    <div className='col-lg-1 mb-3'>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>Discovery</a></li>
                            <li><a href='/'>Photo</a></li>
                            <li><a href='/'>DContact</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-1 mb-3'>
                        <ul>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Help</a></li>
                            <li><a href='/'>Terms</a></li>
                            <li><a href='/'>Guidlines</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-1 mb-3'>
                        <ul>
                            <li><a href='/'>Testimonials</a></li>
                            <li><a href='/'>Advertise</a></li>
                            <li><a href='/'>Integrations</a></li>
                            <li><a href='/'>Careers</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-6 mb-3'>
                        <form className='scriber'>
                            <input type='email' name='email' id='email' placeholder='Email' />
                            <span>Stay in touch with us for the freshest products!</span>
                        </form>
                    </div>
                    <div className='col-lg-2 mb-3'>
                        <ul className='social-group'>
                            <li>
                                <a href='https://www.instagram.com/'>
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.twitter.com/'>
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com'>
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.google.com'>
                                    <i className="bi bi-globe-americas"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;




