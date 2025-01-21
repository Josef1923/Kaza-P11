import "./Footer.scss"
import LogoFooter from "../../assets/Logo/LogoFooter.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={LogoFooter} alt="Kasa Logo" />
      </div>
      <p>
        <span>© 2020 Kasa. All</span>
        <span>rights reserved</span>
      </p>
    </footer>
  );
}

export default Footer