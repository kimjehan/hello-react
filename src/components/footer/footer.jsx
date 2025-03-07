import s from "./footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <p>Made with love by Kim Je Han ❤️</p>
      <p className={s.copyright}>2025 All rights reserved</p>
    </footer>
  );
}

export default Footer;
