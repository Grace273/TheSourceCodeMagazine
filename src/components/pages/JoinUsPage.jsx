import BackgroundOverlay from "../BackgroundOverlay";
import Nav from "../Nav";
import Footer from "../Footer";
import joinUsImg from "../../assets/images/join-us.jpg";

const JoinUsPage = ({
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

export default JoinUsPage;
