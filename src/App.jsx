import { useState } from "react";
import "./App.css";
import StartPage from "./components/pages/StartPage";
import AboutPage from "./components/pages/AboutPage";
import ArchivesPage from "./components/pages/ArchivesPage";

function App() {
  const [page, setPage] = useState("home");

  const showHome = () => {
    window.location.reload();
  };

  const showAbout = () => {
    setPage("about");
  };

  const showArchives = () => {
    setPage("archive");
  };

  const navProps = {
    onClickHomepage: showHome,
    onClickAbout: showAbout,
    onClickArchives: showArchives,
  };

  return (
    <>
      {page === "home" && <StartPage {...navProps} />}
      {page === "about" && <AboutPage {...navProps} />}
      {page === "archive" && <ArchivesPage {...navProps} />}
    </>
  );
}

export default App;
