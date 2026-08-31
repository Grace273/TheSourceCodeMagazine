import BackgroundOverlay from "../BackgroundOverlay";
import Nav from "../Nav";
import MeetTheTeam from "../MeetTheTeam";
import Footer from "../Footer";
import joinUsImg from "../../assets/images/join-us.jpg";

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
            Established in 2025, The Source Code is UofT's newest Computer
            Science Magazine! Our team and contributors come from a wide range
            of programs and backgrounds. In our zines, you'll find
            student-written pieces ranging from reflections on AI ethics and the
            impact of big tech's latest moves to spotlights on student stories
            and cool side projects.
          </p>
          <br />
          <br />
          <p>Instagram</p>{" "}
          <u>
            <a href="https://www.instagram.com/thesourcecodemagazine/ ">
              @thesourcecodemagazine
            </a>
          </u>{" "}
          <br />
          <br />
        </div>
        <h1 id="meet-the-team-text">MEET THE TEAM</h1>
        <MeetTheTeam />

        <img id="join-us-img" src={joinUsImg} alt="Join Us text" width="100%" />

        <div className="content-border-box">
          <p>
            <b>
              Interested in contributing to the next issue? Contribute your
              ideas with{" "}
            </b>
            <br />
            <u>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=JsKqeAMvTUuQN7RtVsVSEIO-XsQfqslDj9tHfJVGStxUMDNaOVgzMDRLTUxVVzhOMFhUNk1GRTkxUi4u">
                this Microsoft Form
              </a>
            </u>{" "}
            and visit the linktree in our instagram{" "}
            <u>
              <a href="https://www.instagram.com/thesourcecodemagazine/ ">
                @thesourcecodemagazine
              </a>
            </u>{" "}
            to join our Discord!
            <br />
            <br /> We want to platform your voice to UofT!
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
