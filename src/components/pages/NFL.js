import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import ref from "../../assets/nfl-refs.jpg";
import nflt from "../../assets/nfl.teams.jpg";
import next from "../../assets/nfl.schedule.jpg";
import last from "../../assets/nfl.stats.jpg";

const NFL = () => {
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
                    <img class="article-image" src={ nflt }></img>
                    <h4 class="title">We cover all 30 NFL teams, find your home team below!</h4>
                    <p class="Summary">- Patriots - Cardinals - Falcons - Panthers - Bears - Cowboys - Lions
                        - Packers - Rams - Vikings - Saints - Giants - Eagles - 49ers - Seahawks - Buccaneers
                        - Commanders - Ravens - Bills - Bengals - Browns - Broncos - Texans - Colts - Jaguars
                        - Chiefs - Raiders - Chargers - Dolphins - Jets - Steelers - Titans -</p>
                    <p class="author"><small class="muted">J. Golden Ellis</small></p>
                </div>

                <div class="article">
                    <img class="article-image" src={ next }></img>
                    <h4 class="title">Catch all of the must-watch games with J and J</h4>
                    <p class="Summary"> - Ravens @ Patriots, 9/25 - Lions @ Patriots, 10/9 -
                        Rams @ Cardinals, 9/25 - Chiefs @ Colts, 9/25 -</p>
                    <p class="author"><small class="muted">J. Golden Ellis</small></p>
                </div>

                <div class="article">
                    <img class="article-image" src={ last }></img>
                    <h4 class="title">EJ Sports is your Fantasy Football go to, we have all the stats</h4>
                    <p class="Summary"> - Tom Brady hold the record for most Super Bowl appearances at 10 -
                        Rob Gronkowski holds the Patriots touchdown record with 80 -</p>
                    <p class="author"><small class="muted">J. Golden Ellis</small></p>
                </div>
            </div>

            <div class="col-extra">
                <h5>What's New In the NFL World</h5>
                <ul class="top-headlines">
                    <li>
                        <a class="headline">Why the Patriots dynasty sets an impossible standard</a>
                    </li>
                    <li>
                        <a class="headline">A look at Chark Barringon and other BYU draft prospects</a>
                    </li>
                    <li>
                        <a class="headline">Catching up with Steve Young, Taysom Hill, and other BYU greats</a>
                    </li>
                    <li>
                        <a class="headline">What Jamaar Williams eats in a day</a>
                    </li>
                    <li>
                        <a class="headline">Is Taysom Hill the most versatile player in the</a>
                    </li>
                    <li>
                        <a class="headline">Report- Mac Jones will play the best football of his life next week</a>
                    </li>
                </ul>

            </div>
        </div>);
};

export default NFL;