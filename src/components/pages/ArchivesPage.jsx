import BackgroundOverlay from "../BackgroundOverlay";
import Nav from "../Nav";
import Footer from "../Footer";
import issues from "../../data/archiveIssues.json";

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
          <p>[Publication Name]: Archives</p>
        </div>

        <div className="archive-grid">
          {issues.map(({ id, title, date, cover, pdf }) => (
            <a key={id} className="archive-card" href={pdf}>
              {cover ? (
                <img src={cover} alt={`Cover of ${title}`} />
              ) : (
                <div className="archive-cover-placeholder" aria-hidden="true" />
              )}
              <p>
                <b>{title}</b>
              </p>
              <p>{date}</p>
            </a>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ArchivesPage;
