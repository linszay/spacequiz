import hero from '../images/hero_logo.png';
import './Landing.css';
import { LogInOverlay, SignUpOverlay } from './LandingOverlays.js'
import QuizQuestionComponent from './quizQuestion.js';
import './notLoggedIn.css'

function Landing() {
  function turnOnOverlay() {
    document.querySelector(".overlayWrapper").style.display = "flex";
  }
  function turnOnSignUp() {
    document.querySelector(".overlayWrapper#signUp").style.display = "flex";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={hero} className="hero-logo" alt="are you: Lost in Space?" />
        <button className="primary cta">Take Our Quiz!</button>
        <QuizQuestionComponent />
        <div className="notLoggedIn"></div>
        <div className="notLoggedInButtons">
          <button className="primary" onClick={turnOnOverlay}>Log in</button>
          <p>or</p>
          <button className="secondary" onClick={turnOnSignUp}>Sign up</button>
        </div>
      </header>
      <LogInOverlay />
      <SignUpOverlay />
    </div>
  );
}


export default Landing;
