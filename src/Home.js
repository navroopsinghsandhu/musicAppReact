import React from 'react';
import './App.css';
import Footer from './Footer';

function Home() {
  return (

    <div>
        <section className="firstsection">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big" id="web">Our Music World</h1>
                    <p className="text-small">
                    We offer a vast variety of music from different backgrounds and cultures, taking you on journeys of different tastes.
                    </p>
    
    
                </div>
            </div>
        </section>
    
        <section className="secondsection">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big" id="program">
                        Our aim for you:
                    </h1>
                    <p className="text-small">
                    Enjoy your life while enjoying our music!!!!!!
                    </p>
    
    
                </div>
            </div>
        </section>

        <Footer /> 
        
    </div>

  );
}

export default Home;