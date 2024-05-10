import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
