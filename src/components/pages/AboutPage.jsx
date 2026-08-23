import BackgroundOverlay from "../BackgroundOverlay";
import Nav from "../Nav";
import MeetTheTeam from "../MeetTheTeam";
import Footer from "../Footer";

const AboutPage = ({ onClickHomepage, onClickAbout, onClickArchives }) => {
  return (
    <div className="page">
      <Nav
        onClickHomepage={onClickHomepage}
        onClickAbout={onClickAbout}
        onClickArchives={onClickArchives}
      />
      <div className="main">
        <BackgroundOverlay onClickLogo={onClickHomepage} />
        <div className="content-border-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <br />
          <br />
          <p>Instagram</p>{" "}
          <u>
            <a href="#">@placeholder-handle</a>
          </u>{" "}
          <br />
          <br />
        </div>
        <h1 id="meet-the-team-text">MEET THE TEAM</h1>
        <MeetTheTeam />

        <h1 id="join-us-text">JOIN US</h1>

        <div className="content-border-box">
          <p>
            <b>Interested in contributing to the next issue? Reach out via </b>
            <br />
            <u>
              <a href="#">this sign-up form</a>
            </u>{" "}
            and follow the link in our{" "}
            <u>
              <a href="#">@placeholder-handle</a>
            </u>{" "}
            bio to join our community chat!
            <br />
            <br /> Placeholder call-to-action text goes here.
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
