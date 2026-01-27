import BackgroundOverlay from "../BackgroundOverlay";
import Nav from "../Nav";
import MeetTheTeam from "../MeetTheTeam";
import Footer from "../Footer";

const AboutPage = ({
  onClickHomepage,
  onClickAbout,
  onClickJoinUs,
  onClickArchives,
  onClickMenu,
}) => {
  return (
    <div className="body grid-container">
      <Nav
        onClickHomepage={onClickHomepage}
        onClickAbout={onClickAbout}
        onClickJoinUs={onClickJoinUs}
        onClickArchives={onClickArchives}
      />
      <div className="main">
        {/* For mobile */}
        <button id="menu-btn">
          <a onClick={onClickMenu}>◄ Menu</a>
        </button>
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
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
