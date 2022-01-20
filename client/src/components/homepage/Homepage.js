import './homepage.css';

import Navbar from '../navbar/Navbar';
import Timer from '../timer/Timer'
import clock from './clock.gif';


function Homepage(userObject) {



    return (
        <div className="home">
            <Navbar userObject={userObject} />
            <div id='header-box'>
                <h1 id="main-header">Attack On Time</h1>
            </div>
            <h2  ></h2>

            <Timer />

            <div className='description-box'>
                <p className="attack-description">Think you have what it takes to play the number one fastest
                    growing reaction time based game in the world? Click the Start button if you want to give it a try!
                    Signup and login if you want to see your scores on the Leaderboard. </p>
            </div>
            <br />          
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />




        </div>
    )

}

export default Homepage;