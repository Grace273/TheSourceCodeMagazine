// The homepage of the site

import BackgroundOverlay from "../BackgroundOverlay";
import Nav from "../Nav";
import Flipbook from "../HomepageFlipbook";
import Footer from "../Footer";

const StartPage = ({ onClickHomepage, onClickAbout, onClickArchives }) => {
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
          <h3>Read Our Latest: Volume 1 Issue 1</h3>
        </div>

        <div id="flipbook-container">
          <div id="flipbook">
            <Flipbook />
          </div>
        </div>

        <p className="purple-text">
          (Swipe on mobile, drag or click page corners on computer to use this
          flipbook)
        </p>

        <a
          className="purple-text"
          href="/magazine-issues/issue1/issue1-ordered.pdf"
        >
          <u>View PDF version</u>
        </a>

        <div className="content-border-box">
          <p>
            <h4>
              <u>Updates:</u>
            </h4>
            <br />
            <br />
            * 01/2026: Issue 2 is coming March 2026! New writers welcome!
            <br />
            <br />* 08/2025: Find copies of our latest issue in the CSSU
            (BA2250)
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default StartPage;
