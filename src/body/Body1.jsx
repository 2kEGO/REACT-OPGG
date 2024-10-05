
import './body-style1.css';
import bodyPicture from './Body-img.webp';

function Body (){
    return (
        <div className="body">
            <div className="body-container">

                <div className="body-image-container">
                    <img src={bodyPicture} />
                </div>

                <div className="body-search-bar">
                    <div className="body-search-container">
                        <div className="body-search-bar-left">
                            <div className='body-search-items'>
                                <h1>Region</h1>
                                <button className ='select-region'>
                                    <span>Europe West</span>
                                    <div className='triangle'></div>
                                </button>
                            </div>
                            <div className='body-search-items'>
                                <h1>Search</h1>
                                <input type="text" placeholder="Game Name" />
                            </div>
                        </div>
                        <div className='body-search-bar-right'>
                            <button id='search-button'>
                                <span>.GG</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body