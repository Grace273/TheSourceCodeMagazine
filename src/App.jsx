import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/pages/StartPage";
import AboutPage from "./components/pages/AboutPage";
import ArchivesPage from "./components/pages/ArchivesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/archives" element={<ArchivesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
