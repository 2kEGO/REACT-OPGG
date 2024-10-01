import './Header2.css';
import imgAds from './img/ads-img.webp';



function Header2(){
    return(
        <div className='header-ads-container'>
            <div className="header-ads">
                <a href="#" className='header-ads-link'>
                    <img src={imgAds}/>
                </a>
                <button>X</button>
            </div>
        </div>
    );
}

export default Header2;