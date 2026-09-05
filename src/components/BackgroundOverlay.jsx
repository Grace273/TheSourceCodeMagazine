import { Link } from "react-router-dom";
import logo from "../assets/images/logo-placeholder.svg";

const BackgroundOverlay = ({ onClickLogo, to = "/" }) => {
  const logoImage = (
    <img id="logo" alt="Site logo placeholder" src={logo} width="100%" />
  );

  if (onClickLogo) {
    return (
      <button type="button" onClick={onClickLogo} style={{ background: "none", border: "none", padding: 0, width: "100%" }}>
        {logoImage}
      </button>
    );
  }

  return <Link to={to}>{logoImage}</Link>;
};

export default BackgroundOverlay;
