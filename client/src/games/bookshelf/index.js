import './index.css';
import Navbar from '../../components/navbar/Navbar';
import { useEffect, useState } from 'react';
import Timer from '../../components/timer/Timer';


function Bookshelf(userObject) {
    const bookID = Math.floor(Math.random() * 34 +1);
    const displayAlert = (bookNumber) => {
        // e.preventDefault();

        if (bookNumber == bookID) {
            document.getElementById('wrong-book').hidden = true;
            document.getElementById('next-box').removeAttribute("hidden");
            document.getElementById('game-instructions').hidden = true;

        } else {
            const wrongBook = document.getElementsByClassName(`book-${bookNumber}`)
            document.getElementById('wrong-book').innerHTML = `No, not ${wrongBook[0].alt}`;
        }
    }


    //making a random book the goal

    useEffect(() => {

        const book = document.getElementsByClassName(`book-${bookID}`)

        const bookName = book[0].alt

        document.getElementById("book-name").innerHTML = bookName;
    })



    return (
        <div className='bookshelf-game'>
            <h1 id="game-instructions">I want to read <span id='book-name'></span></h1>
            <h3 id="wrong-book"></h3>
            <div hidden id='next-box'>
                <Timer userObject={userObject}/>
            </div>

            <br />

            <div className='bookshelf-body'>
                <ul>
                    <li><img className="book-10" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" alt="Magicians Impossible" onClick={() => displayAlert(10)} /></li>
                    <li><img className="book-2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="The Gone World" onClick={() => displayAlert(2)} /></li>
                    <li><img className="book-3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="Point of Control" onClick={() => displayAlert(3)} /></li>
                    <li><img className="book-4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="Black Dog" onClick={() => displayAlert(4)} /></li>
                    <li><img className="book-5" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="Juniper Unraveling" onClick={() => displayAlert(5)} /></li>
                    <li><img className="book-6" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="The Art of Crash Landing" onClick={() => displayAlert(6)} /></li>
                    <li><img className="book-7" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="Der Kreide Mann" onClick={() => displayAlert(7)} /></li>
                    <li><img className="book-8" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="Wink Poppy Midnight" onClick={() => displayAlert(8)} /></li>
                    <li><img className="book-9" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="The Great Gatsby" onClick={() => displayAlert(9)} /></li>
                    <li><img className="book-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="The Nowhere Girls" onClick={() => displayAlert(1)} /></li>
                    <li><img className="book-11" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="The Light Between Oceans" onClick={() => displayAlert(11)} /></li>
                    <li><img className="book-13" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="Resistance" onClick={() => displayAlert(13)} /></li>
                    <li><img className="book-12" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="Spindle Fire" onClick={() => displayAlert(12)} /></li>
                    <li><img className="book-14" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt="Wonderful World" onClick={() => displayAlert(14)} /></li>
                    <li><img className="book-15" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="All The Crooked Saints" onClick={() => displayAlert(15)} /></li>
                    <li><img className="book-16" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="Not a Sound" onClick={() => displayAlert(16)} /></li>
                    <li><img className="book-17" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="Don't Cry Murder" onClick={() => displayAlert(17)} /></li>
                    <li><img className="book-18" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="The Queen of Hearts" onClick={() => displayAlert(18)} /></li>
                    <li><img className="book-19" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="The Long Drop" onClick={() => displayAlert(19)} /></li>
                    <li><img className="book-20" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="And Then There Were None" onClick={() => displayAlert(20)} /></li>
                    <li><img className="book-21" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="The Death of Bees" onClick={() => displayAlert(21)} /></li>
                    <li><img className="book-22" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="Inexplicables" onClick={() => displayAlert(22)} /></li>
                    <li><img className="book-23" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="The Sisters Brothers" onClick={() => displayAlert(23)} /></li>
                    <li><img className="book-24" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="The Snow Child" onClick={() => displayAlert(24)} /></li>
                    <li><img className="book-25" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="The Tragedy Paper" onClick={() => displayAlert(25)} /></li>
                    <li><img className="book-26" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="The Flame Alphabet" onClick={() => displayAlert(26)} /></li>
                    <li><img className="book-27" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="Litle Red Riding Hood: And Other Classic French Fairy Tales" onClick={() => displayAlert(27)} /></li>
                    <li><img className="book-28" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="The Psychopath Test" onClick={() => displayAlert(28)} /></li>
                    <li><img className="book-29" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="The Toy Collector" onClick={() => displayAlert(29)} /></li>
                    <li><img className="book-30" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="The Unlikely Pilgrimage of Harold Fry" onClick={() => displayAlert(30)} /></li>
                    <li><img className="book-31" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="One Perfect Day: The Selling of the American Wedding" onClick={() => displayAlert(31)} /></li>
                    <li><img className="book-32" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="Manhattan" onClick={() => displayAlert(32)} /></li>
                    <li><img className="book-33" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="The Elephant Vanishes" onClick={() => displayAlert(33)} /></li>
                    <li><img className="book-34" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="The Catastrophist" onClick={() => displayAlert(34)} /></li>
                    <li><img className="book-10" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" alt="The Nowhere Girls" onClick={() => displayAlert(10)} /></li>
                    <li><img className="book-2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="The Gone World" onClick={() => displayAlert(2)} /></li>
                    <li><img className="book-3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="Point of Control" onClick={() => displayAlert(3)} /></li>
                    <li><img className="book-4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="Black Dog" onClick={() => displayAlert(4)} /></li>
                    <li><img className="book-5" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="Juniper Unraveling" onClick={() => displayAlert(5)} /></li>
                    <li><img className="book-6" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="The Art of Crash Landing" onClick={() => displayAlert(6)} /></li>
                    <li><img className="book-7" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="Der Kreide Mann" onClick={() => displayAlert(7)} /></li>
                    <li><img className="book-8" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="Wink Poppy Midnight" onClick={() => displayAlert(8)} /></li>
                    <li><img className="book-9" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="The Great Gatsby" onClick={() => displayAlert(9)} /></li>
                    <li><img className="book-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="Magicians Impossible" onClick={() => displayAlert(1)} /></li>
                    <li><img className="book-11" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="The Light Between Oceans" onClick={() => displayAlert(11)} /></li>
                    <li><img className="book-13" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="Resistance" onClick={() => displayAlert(13)} /></li>
                    <li><img className="book-12" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="Spindle Fire" onClick={() => displayAlert(12)} /></li>
                    <li><img className="book-14" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt="Wonderful World" onClick={() => displayAlert(14)} /></li>
                    <li><img className="book-15" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="All The Crooked Saints" onClick={() => displayAlert(15)} /></li>
                    <li><img className="book-16" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="Not a Sound" onClick={() => displayAlert(16)} /></li>
                    <li><img className="book-17" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="Don't Cry Murder" onClick={() => displayAlert(17)} /></li>
                    <li><img className="book-18" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="The Queen of Hearts" onClick={() => displayAlert(18)} /></li>
                    <li><img className="book-19" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="The Long Drop" onClick={() => displayAlert(19)} /></li>
                    <li><img className="book-20" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="And Then There Were None" onClick={() => displayAlert(20)} /></li>
                    <li><img className="book-21" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="The Death of Bees" onClick={() => displayAlert(21)} /></li>
                    <li><img className="book-22" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="Inexplicables" onClick={() => displayAlert(22)} /></li>
                    <li><img className="book-23" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="The Sisters Brothers" onClick={() => displayAlert(23)} /></li>
                    <li><img className="book-24" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="The Snow Child" onClick={() => displayAlert(24)} /></li>
                    <li><img className="book-25" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="The Tragedy Paper" onClick={() => displayAlert(25)} /></li>
                    <li><img className="book-26" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="The Flame Alphabet" onClick={() => displayAlert(26)} /></li>
                    <li><img className="book-27" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="Litle Red Riding Hood: And Other Classic French Fairy Tales" onClick={() => displayAlert(27)} /></li>
                    <li><img className="book-28" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="The Psychopath Test" onClick={() => displayAlert(28)} /></li>
                    <li><img className="book-29" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="The Toy Collector" onClick={() => displayAlert(29)} /></li>
                    <li><img className="book-30" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="The Unlikely Pilgrimage of Harold Fry" onClick={() => displayAlert(30)} /></li>
                    <li><img className="book-31" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="One Perfect Day: The Selling of the American Wedding" onClick={() => displayAlert(31)} /></li>
                    <li><img className="book-32" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="Manhattan" onClick={() => displayAlert(32)} /></li>
                    <li><img className="book-33" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="The Elephant Vanishes" onClick={() => displayAlert(33)} /></li>
                    <li><img className="book-34" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="The Catastrophist" onClick={() => displayAlert(34)} /></li>
                </ul>
            </div>
            <br />
            <br />
        </div>

    )

}

export default Bookshelf;