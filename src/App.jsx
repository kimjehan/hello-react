import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.app}>
      <Header></Header>
      <main>Бу бзиарни апп</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
