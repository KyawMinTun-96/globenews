import React, {useState, useEffect} from 'react'
import trenData from '../assets/json/trending.json';
import happeningData from '../assets/json/happening.json';


function Home() {

    const [trendData, setTrendData] = useState([]);
    const [happenData, setHappenData] = useState([]);

    useEffect(() => {
        setTrendData(trenData);
        setHappenData(happeningData);
    }, []);

  return (
    <div className='home-sec'>

        {/* Banner Sec */}
        <div className='d-flex flex-wor justify-content-center align-items-center banner-sec'>
            <div className='banner-profile'>
                <img src={require('../assets/images/others/banner-profile.jpg')} alt='banner images profile' />
                <div className='profile-text'>
                    <h2>WORLD NEWS</h2>
                    <p>Amazin places in America to visit.</p>
                    <p>For some reason - this country, this city, this nighborhood, this particular street - is the place you are living a majority of your life in.</p>
                </div>
            </div>

            <div className='banner-info'>
                <div className='banner-title'>
                    <h2>MORE NEWS</h2>
                    <div className='banner-btn'>
                        <button className='btn text-muted'>
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className='btn'>
                            <i className="bi bi-chevron-right fw-bold"></i>
                        </button>
                    </div>
                </div>
                <div className='banner-body'>
                    {
                        [1, 2].map((_, index) => (
                            <div key={index} className='card rounded-0 border-0 mb-3'>
                                <div className='card-body'>
                                    <h3 className='clr-2'>TRAVEL</h3>
                                    <h4>Article title</h4>
                                    <p className='text-muted'>Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...</p>
                                    <div className='text-muted'>
                                        <i className="bi bi-clock"></i>
                                        <span><small className='fst-italic'>2 min ago</small></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>


        {/* Trending Sec */}
        <div className='trending-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between'>
                        <h2 className='sec-title'>TRENDING</h2>
                        <div className='banner-btn'>
                            <button className='btn text-muted'>
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button className='btn'>
                                <i className="bi bi-chevron-right fw-bold"></i>
                            </button>
                        </div>
                    </div>

                    {
                        trendData.map((data) => (
                            <div key={data.id} className='col-md-4 mb-4'>
                                <div className='card border-0'>
                                    <img className="card-img-top h-20" style={{height: '200px'}} src={require(`../assets/images/others/${data.image}`)} alt='trending images' />
                                    <div className='card-body px-4'>
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.description}</p>
                                        <div className='text-muted'>
                                            <i className="bi bi-clock"></i>
                                            <span><small className='fst-italic'>{data.time}</small></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>


        {/* Happening Sec */}
        <div className='happening-sec'>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h2 className='sec-title'>HAPPENING NOW</h2>
                    <div className='banner-btn'>
                        <button className='btn text-muted'>
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className='btn'>
                            <i className="bi bi-chevron-right fw-bold"></i>
                        </button>
                    </div>
                </div>

                <div className='happen-group'>
                    <div className='d-flex flex-column me-3 happen-left'>
                        {
                            happenData.slice(0, 2).map((data) => (
                                
                                    <div key={data.id} className="card text-bg-dark border-0 mb-4">
                                        <img src={require(`../assets/images/others/${data.image}`)} className="card-img happen-img" alt='trending images' height='350' />
                                        <div className="card-img-overlay happen-overlay">
                                            <h5 className="card-title">{data.name}</h5>
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.description}</p>
                                            <div className='card-text'>
                                                <i className="bi bi-clock"></i>
                                                <span><small className='fst-italic'>{data.time}</small></span>
                                            </div>
                                        </div>
                                    </div>
                                
                            ))
                        }
                    </div>

                    <div className='d-flex flex-column happen-right'>
                        {
                            happenData.slice(2, 5).map((data) => (
                                <div key={data.id} className='card border-0 mb-auto'>
                                    <img className="card-img-top h-20" style={{height: '100px'}} src={require(`../assets/images/others/${data.image}`)} alt='trending images' />
                                    <div className='card-body'>
                                        <h5 className="card-title">{data.title}</h5>
                                        <div className='text-muted'>
                                            <i className="bi bi-clock"></i>
                                            <span>
                                                <small className='fst-italic'>{data.time} <a className='text-muted' href={data.anchorURL} target="_blank" rel="noreferrer">{data.anchorName}</a></small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Home;