import logoPic from './assets/Fakeropgg.webp';
import stat from './assets/Stat.webp';
import buttonImage from './assets/stat_lol.webp';
// LIST IMAGE

// DESKTOP IMG
import desktopTransparent from './assets/opgg_transparent.webp';
import desktopColored from './assets/desktopg.webp';

//DUO IMG
import duoTransparent from './assets/Duo_transparent.webp';
import duoColored from './assets/Duo.webp';

// TalkG IMG
import talkGTransparent from './assets/TalkG_transparent.webp';
import talkGColored from './assets/TalkG.webp';

//Esport IMG
import esportTransparent from './assets/Esport_transparent.webp';
import esportColored from './assets/Esport.webp';

//Gigs IMG
import gigsTransparent from './assets/Gig_transparent.webp';
import gigsColored from './assets/Gig.webp';


function Header(){
    return(

        <header>
            <div className="header-section">
                
                <div className="header-left-items">
                    <a className="header-left-logo" href="#">
                        <img src={logoPic} />
                    </a>
                    <div className="header-left-stat">
                        <img src={stat} />
                        <span>Stats</span>
                    </div>
                    <button className="header-left-change-game-button">
                        <img src= {buttonImage}/>
                        <span>League of Legends</span>
                        <div className='triangle'></div>
                    </button>
                    <div className="header-left-list-features">

                        <div className="header-left-list-items">
                            <a href="https://op.gg/desktop/">
                                <div className='header-left-img-container'>
                                    <img src={desktopTransparent} className='img_transparent'/>
                                    <img src={desktopColored} className='img_colored'/>
                                </div>
                                <span className='header-left-span'>Desktop</span>
                            </a>
                        </div>
                        <div className="header-left-list-items">
                            <a href="http://localhost:5173/#">                                                               
                               <div className='header-left-img-container'>
                                    <img src={duoTransparent} className='img_transparent'/>
                                    <img src={duoColored} className='img_colored'/>
                                </div>
                                <span className='header-left-span'>Duo</span>
                            </a>
                        </div>
                        <div className="header-left-list-items">
                            <a href="#">
                                <div className='header-left-img-container'>
                                    <img src={talkGTransparent} className='img_transparent'/>
                                    <img src={talkGColored} className='img_colored'/>
                                </div>
                                <span className='header-left-span'>TalkG</span>
                            </a>
                        </div>
                        <div className="header-left-list-items">
                            <a href="#">
                                <div className='header-left-img-container'>
                                    <img src={esportTransparent} className='img_transparent'/>
                                    <img src={esportColored} className='img_colored'/>
                                </div>
                                <span className='header-left-span'>Esports</span>
                            </a>
                        </div>
                        <div className="header-left-list-items">
                            <a href="#">
                                <div className='header-left-img-container'>
                                    <img src={gigsTransparent} className='img_transparent'/>
                                    <img src={gigsColored} className='img_colored'/>
                                </div>
                                <span className='header-left-span'>Gigs</span>
                                <span id='new'>New</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="header-right-items">

                    <button className="header-right-button" >
                        <img src="" />                        
                    </button>
                    <button className="header-right-button">
                        <img src="" />
                    </button>
                    <button className="header-right-button">
                        <img src="" />
                    </button>
                    <button className="header-right-button" id='signInButton'>
                        <span>Sign in</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header