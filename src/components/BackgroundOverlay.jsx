import logo from "../assets/images/logo-placeholder.svg";

const BackgroundOverlay = ({ onClickLogo }) => {
  return <img id="logo" alt="Site logo placeholder" src={logo} width="100%" onClick={onClickLogo} />;
};

export default BackgroundOverlay;
