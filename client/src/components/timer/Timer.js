
import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserContext from '../UserContext'
import './timerStyle.css';


let DEFAULT_USER = {
    userId: -1,
    highScore: -1,
    disabled: true,
    userName: 'fakeName',
    highScoreId: -1
};


function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const userManager = useContext(UserContext);
    const [userId, setUserId] = useState(0);
    const [errors, setErrors] = useState([]);
    const [hasScore, setHasScore] = useState(false);



    if (userManager.currentUser) {
        console.log('timer: ' + userManager.currentUser.userId)
    }
    const location = useLocation();

    const timeHere = document.getElementById('timer-here');

    let localSeconds = localStorage.getItem('timer');


    useEffect(() => {

        if (localSeconds != null) {
            setSeconds(parseInt(localSeconds));
            setIsActive(true)
            console.log('active: ' + isActive)
            document.getElementById('timer-rectangle').removeAttribute('hidden')
        } else {
            setSeconds(0)
        }

        if (location.pathname === '/bookshelf') {
            console.log('yo, bookshelf')
            document.getElementById('start-button').hidden = 'true'
            document.getElementById('next-button-1').removeAttribute('hidden')
        } else if (location.pathname === '/flashlight') {
            document.getElementById('start-button').hidden = 'true'
            document.getElementById('next-button-1').hidden = 'true'
            document.getElementById('next-button-2').removeAttribute('hidden')
        } else if (location.pathname === '/drag') {
            document.getElementById('start-button').hidden = 'true'
            document.getElementById('next-button-1').hidden = 'true'
            document.getElementById('next-button-2').hidden = 'true'
            document.getElementById('next-button-3').removeAttribute('hidden')
        } else if (location.pathname === '/' && localSeconds != null) {
            document.getElementById('start-button').hidden = 'true';
            document.getElementById('next-button-1').hidden = 'true';
            document.getElementById('next-button-2').hidden = 'true';
            document.getElementById('stop-button').removeAttribute('hidden')
        }

    }, [])

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            if (seconds != null) {
                timeHere.innerHTML = seconds;
            }
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);


    const games = ['/bookshelf', '/flashlight', '/drag', '/']
    if (userManager.currentUser) {

        fetch(`http://localhost:8080/api/users/username/${userManager.currentUser.sub}`)
            .then(response => response.json())
            .then(body => setUserId(body.appUserId))
    }

    const nextButton = () => {
        localStorage.setItem('timer', seconds)
        setIsActive(!isActive)
    }

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
        localStorage.removeItem("timer")
    }
    const stop = () => {
        document.getElementById('next-button-3').hidden = 'true';
        document.getElementById('response-box').removeAttribute('hidden')


        // if logged in add a high score
        if (userManager.currentUser) {
            if (userManager.currentUser.disabled === true) {
                setIsActive(false);
                localStorage.removeItem("timer")
            }
            const name = userManager.currentUser.sub


            /*
            Always Attempt Put
            take the response body: false
            POST
            */




            // const checkExisting = () => {
            //     const jwt = localStorage.getItem("jwt_token");

            //     const init = {
            //         headers: {
            //             "Authorization": "Bearer " + jwt
            //         },
            //     };

            //     return fetch(`http://localhost:8080/api/highscores/${userId}`, init)
            //         .then(response => response.json())
            //         .then(
            //             body => setHasScore(body));
            // }



            // checkExisting();

            // if (hasScore) {
            //     console.log("higscore exists");
            // } else {
            //     console.log("higscore does not exist exist");

            // }



            const updateHighScore = () => {

                const jwt = localStorage.getItem("jwt_token");

                let init = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + jwt
                    },
                    body: JSON.stringify({
                        userId: userId,
                        highScore: seconds,
                        disabled: false,
                        userName: name,
                        highScoreId: userId
                    })

                }
                console.log(init);
                fetch(`http://localhost:8080/api/highscores/${userId}`, init)
                    .then(response => {
                        console.log(response)
                        if (response.status === 204) {
                            document.getElementById('score-msg').innerHTML = `Score of ${seconds} updated for ${name}`;
                        }  else if( response.status === 400){
                            document.getElementById('score-msg').innerHTML = `Score of ${seconds} updated for ${name}`;
                            addHighScore();
                        return response.json();}
                        else if(response.status === 403){
                            addHighScore();
                        return response.json();
                        }
                        else{
                            //document.getElementById('score-msg').innerHTML='Something Went Wrong!'
                            return response.json();
                        }
                        return Promise.reject("Error Occured");
                    })
                    .then(body => {
                        if (!body) {
                            console.log(body);
                            setErrors([]);
                        } else {
                            console.log(body);
                            setErrors(body);
                        }
                    }).catch(error => console.log(error));

            }

            const addHighScore = () => {

                const jwt = localStorage.getItem("jwt_token");

                let init = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + jwt
                    },
                    body: JSON.stringify({
                        userId: userId,
                        highScore: seconds,
                        disabled: false,
                        userName: name,
                        highScoreId: userId
                    })

                }
                console.log(init);
                fetch(`http://localhost:8080/api/highscores`, init)
                    .then(response => {
                        console.log(response)
                        if (response.status === 201) {
                            document.getElementById('score-msg').innerHTML = `Score of ${seconds} submitted for ${name}`;
                        } else {
                            //document.getElementById('score-msg').innerHTML='Something Went Wrong!'
                            return response.json();
                        }
                        return Promise.reject("Error Occured");
                    })
                    .then(body => {
                        if (!body) {
                            setErrors([]);
                        } else {
                            setErrors(body);
                        }
                    }).catch(error => console.log(error));
            }

            updateHighScore();
        } else {
            // if no user login just reset the timer.
            setIsActive(false);
            localStorage.removeItem("timer")
        }
        setIsActive(false);
        localStorage.removeItem("timer")
    }


    return (
        <>
            <a className='btn main-btn' id='start-button' href={games[0]} onClick={nextButton}>Start</a>
            <a hidden className='timer-btn btn' id='next-button-1' href={games[1]} onClick={nextButton}>Next</a>
            <a hidden className='timer-btn btn' id='next-button-2' href={games[2]} onClick={nextButton} type='submit'>Next</a>
            <a hidden className='timer-btn btn' id='next-button-3' onClick={stop}>Stop</a>
            <button hidden className='timer-btn btn main-btn' id='stop-button' onClick={stop}>Stop</button>
            {/* <button id='reset-button' onClick={reset}>Reset</button> */}
            <div hidden id='response-box'>
                <h2 id='score-msg'></h2>
                <h4 id='home-msg'>Return to the home page to play again</h4>
                <a className='timer-btn btn' href='/'>Home</a>
            </div>
            <div hidden id='timer-rectangle'>
                <h2 id='timer-box'><span id='timer-here'></span> seconds</h2>
            </div>
        </>
    )
}

export default Timer;