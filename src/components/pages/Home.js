import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import ref from "../../assets/nfl-refs.jpg";
import AB from "../../assets/logan-vs-antonio.jpg";

const Home = () => {
    return (
        <div class="row-2">
            <div class="article-container">
                <div class="article">
                    <img class="article-image" src={ ref }></img>
                    <h4 class="title">Referees Storm off the Field After Heated Conflict with The Texans Offense
                    </h4>
                    <p class="Summary">The officials for the game got into a dispute with the Texans Quarterback
                        Dave Mills after an unsportsmanlike conduct, in which the rookie did his "new and
                        special" dance move, lets just say it wasn't so special.</p>
                    <p class="author"><small class="muted">J. Golden Ellis</small></p>
                </div>
                <div class="article">
                    <img class="article-image" src={ AB }></img>
                    <h4 class="title">Antonio Brown vs Logan Paul, We all Know Who We Want to Win</h4>
                    <p class="Summary">With the much anticipated fight on the line, bets started piling up in
                        Antonio's favor especially with his recent charges for battery and burglary, we can only
                        hope that Antonio will do the same to Logan.</p>
                    <p class="author"><small class="muted">Ethan Kaloi</small></p>
                </div>
            </div>
            <div class="col-extra">
                <h5>Top Headlines</h5>
                <ul class="top-headlines">
                    <li>
                        <a class="headline">BYU Football beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">BYU Swim beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">BYU Track beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">BYU Womens Soccer beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">BYU Rugby beats Oregon</a>
                    </li>
                    <li>
                        <a class="headline">Oregon Ducks football association banned from PAC-12</a>
                    </li>

                </ul>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark bottom justify-content-center fixed-bottom">
                    <a class="navbar-brand" href="https://github.com/jellis206/React-E-J-Sports.git">
                        <p class="footer"><small class="muted-footer">Brought to you by J. Ellis and Ethan Kaloi (this is a link to our repo)</small></p>
                    </a>
                </nav>
            </div>
        </div>);
};

export default Home;