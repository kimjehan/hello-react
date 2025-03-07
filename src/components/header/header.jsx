import s from "./header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo}>Hello React</div>
      <nav className={s.nav}>
        <a href="#">Главная</a>
        <a href="#">О нас</a>
        <a href="#">Профиль</a>
      </nav>
    </header>
  );
}

export default Header;
