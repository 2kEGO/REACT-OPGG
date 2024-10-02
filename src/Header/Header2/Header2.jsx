import './Header2.css';
import imgAds from './img/ads-img.webp';



function Header2(){

    const toggle = document.getElementById('toggle');
    
    function toggleOnOff(element){
        element.id = toggle;
        console.log('clicked')
    }

    return(
        <div className='header-ads-container'>
            <div className="header-ads">
                <a href="#" className='header-ads-link'>
                    <img src={imgAds}/>
                </a>
                <button className='btn ads' onClick={toggleOnOff}>X</button>
            </div>
        </div>
    );
}

export default Header2;