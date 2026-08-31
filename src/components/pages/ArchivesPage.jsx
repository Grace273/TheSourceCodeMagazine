import BackgroundOverlay from "../BackgroundOverlay";
import Nav from "../Nav";
import Footer from "../Footer";

const ArchivesPage = ({ onClickHomepage, onClickAbout, onClickArchives }) => {
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
          <p>The Source Code: Archives</p>
        </div>

        <div id="archives">
          <div id="archives-bg-overlay">
            <div class="prev-issue">
              <a href="/magazine-issues/issue1/issue1-ordered.pdf">
                <img
                  src="magazine-issues/issue1/front-cover.jpg"
                  alt="Cover of First issue"
                  width="30%"
                />
              </a>
              <p>October 2025</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ArchivesPage;
