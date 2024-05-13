import "./assets/css/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <div className="container-md">
        <Hero />
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
