import { useEffect, useState } from 'react';
import './App.css';
import tutorialData from './tutorial.json';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

    </div>
  );
}
// Header-parent component 
function Header() {
  return (
    <header>
      <div class="nav">
        <h1 class="nav__title">That Js Dude</h1>
        <button class="sign__in">sign in</button>
      </div>

      <div class="header__main">
        <h1 class="header__title">Exclusive React Workshop for beginners!</h1>
        <p class="header__text">Once in a year opportunity to learn and build your first React app</p>
        <button class="details__button">Learn more</button>
      </div>
    </header>
  )
}
// Whole main-container component
function Main() {
  return (
    <section className="main">
      <Left></Left>
      <Right></Right>

    </section>
  )
}

function Left() {
  const [tutorials, setTutorials] = useState([])

  useEffect(() => {
    setTutorials(tutorialData)
  }, [])

  // console.log(tutorials);

  return (
    <div className="left">
      <JsConfig></JsConfig>
      <div id="tutorial_container">
        {
          tutorials.map(tutorial => <Tutorial title={tutorial.title} desc={tutorial.desc}></Tutorial>)
        }

      </div>
    </div>
  )
}

function Right() {
  return (
    <div className="right">
      <PersonalTraning></PersonalTraning>
      <RecentVideo></RecentVideo>
      <RecentTalks></RecentTalks>
      <RecentInvite></RecentInvite>
    </div>

  )
}

function JsConfig() {
  return (
    //  js-config component 
    <div class="js__config">
      <h4>JS Confusing Parts</h4>
      <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event delegation, dom, timers and many more caveats.</p>
    </div>
  )
}

function PersonalTraning() {
  return (
    <div id="personal_training">
      <h2>Personal Training for $30</h2>
      <p class="side__text">If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a time slot You can Book me</p>

    </div>
  )
}

function RecentVideo() {
  return (
    <div id="recent_video">
      <h4>Recent Videos</h4>
      <ul>
        <li>15+ tricks for dev tool</li>
        <li>Understanding this</li>
        <li>be expert in JS Array</li>
        <li>How Browsers works in 4 min</li>
      </ul>
      <button class="card__button">More on youtube</button>
    </div>
  )
}

function RecentTalks() {
  return (
    <div id="recent_talks">
      <h4>Recent Talks</h4>
      <ul>
        <li>Make Web FasterFunctional Programming: What, Why and How</li>
        <li>JavaScript Code Quality</li>
        <li>Angular JS for Absolute Beginners</li>
        <li>Functional Programming: What, Why and How</li>
        <li>Getting started with React JS</li>
        <li>What's New in ES6</li>
        <li>Make Web Faster</li>
        <li>High Perf JS</li>
      </ul>
      <button class="card__button">Speaker profile</button>
    </div>
  )
}

function RecentInvite() {
  return (
    <div id="recent_invite">
      <h4>Invite to talk</h4>
      <p class="side__text">if you want to invite that js dude in any of your meetup, conference or hangout, send email to khan4019@gmail.com</p>
    </div>

  )
}

function Footer() {
  return (
    <div class="footer">
      <hr></hr>
      <h5>© thatJSDude 2021, a codinism initiative.</h5>
      <h5>Hosted by XeonBD</h5>
    </div>
  )
}


function Tutorial(props) {
  const { title, desc } = props // distructuring
  return (
    <div class="tutorial">
      <h2 class="card__title">{title}</h2>
      <p class="card__text">{desc}</p>
      <button class="card__button">View details</button>
    </div>
  )
}

export default App;
