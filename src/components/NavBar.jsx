import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react';

function NavBar() {
    const [isActive, setActive] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setActive('home'), 600);
        return () => clearTimeout(timer); 
    }, []);

    function handleActive (link) {
        setActive(link);
    }
    
    return(
        <nav className="navbar navbar-expand-lg bg-clr-1">
            <div className="container-fluid">
                <a className="navbar-brand clr-2 fw-bold" href="/">LOGO</a>
                <button className="navbar-toggler menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center justify-content-center">
                        <li className="nav-item">
                            <NavLink 
                            className={`nav-link ${isActive === 'home' ? 'my-active' : ''}`}
                            onClick={() => handleActive('home')}
                            aria-current="page" 
                            to="/"
                            >HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={`nav-link ${isActive === 'discovery' ? 'my-active' : ''}`}
                            onClick={() => handleActive('discovery')}
                            to="#"
                            >DISCOVERY</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={`nav-link ${isActive === 'photos' ? 'my-active' : ''}`}
                            onClick={() => handleActive('photos')}
                            to="#"
                            >PHOTOS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={`nav-link ${isActive === 'contact' ? 'my-active' : ''}`} 
                            onClick={() => handleActive('contact')}
                            to="#"
                            >CONTACT</NavLink>
                        </li>
                        <li className="nav-item ms-5">
                            <div className='user-profile'>
                                <img src={require('../assets/images/profile/profile.jpg')}  alt='user profile'/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;


