import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digit Assiatance</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-2">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="alexa was created by amazon"
              />
            </div>
            <div className="column is-2">
              <ProfileCard
                title="Cortana"
                handle="@cortana23"
                image={CortanaImage}
                description="Cortana was created by microsoft"
              />
            </div>
            <div className="column is-2">
              <ProfileCard
                title="Siri"
                handle="@siri42"
                image={SiriImage}
                description="Siri was created by Apple"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
