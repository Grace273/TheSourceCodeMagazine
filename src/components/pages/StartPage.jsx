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
          <h3>Read Our Latest: [Issue Title]</h3>
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
            * [Placeholder date]: [Placeholder update text goes here]
            <br />
            <br />* [Placeholder date]: [Placeholder update text goes here]
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default StartPage;
